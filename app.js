// WEBHOOK URL & CONFIGURATION
const GOOGLE_CHAT_WEBHOOK_URL = "";

// GLOBAL STATE
let autoNotificationEnabled = true;
let notifiedClassIdsForToday = new Set();
let morningNotifiedDateStr = "";
let semesterStartDate = "2026-10-19";

function getWebAppUrl() {
    return window.location.href;
}

// DARK MODE
function initTheme() {
    const savedTheme = localStorage.getItem('IT4501_theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        updateThemeToggleIcon(false);
    } else {
        document.documentElement.classList.add('dark');
        updateThemeToggleIcon(true);
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('IT4501_theme', isDark ? 'dark' : 'light');
    updateThemeToggleIcon(isDark);
    showToast(isDark ? 'สลับเป็น Dark Mode เรียบร้อย 🌙' : 'สลับเป็น Light Mode เรียบร้อย ☀️');
}

function updateThemeToggleIcon(isDark) {
    const icon = document.getElementById('themeToggleIcon');
    if (icon) {
        icon.className = isDark ? "fa-solid fa-sun text-base text-amber-300" : "fa-solid fa-moon text-base text-indigo-600";
    }
}

// APP INIT
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadSavedSettings();
    initClockAndLoop();
    renderTodaySchedule();
    renderWeeklySchedule();
    updateAcademicWeekDisplay();
});

function loadSavedSettings() {
    semesterStartDate = "2026-10-19";
    const semInput = document.getElementById('semesterStartDateInput');
    if (semInput) semInput.value = semesterStartDate;

    const savedToggle = localStorage.getItem('IT4501_auto_notify');
    if (savedToggle !== null) {
        autoNotificationEnabled = savedToggle === 'true';
        const toggleEl = document.getElementById('autoNotifyToggle');
        if (toggleEl) toggleEl.checked = autoNotificationEnabled;
        updateAutoNotifyUI();
    }
}

function updateSemesterStartDate(newDate) {
    if (!newDate) return;
    semesterStartDate = newDate;
    updateAcademicWeekDisplay();
    showToast('อัปเดตวันเปิดเทอมเรียบร้อยแล้ว');
}

function toggleAutoNotification() {
    const toggleEl = document.getElementById('autoNotifyToggle');
    autoNotificationEnabled = toggleEl ? toggleEl.checked : false;
    localStorage.setItem('IT4501_auto_notify', autoNotificationEnabled);
    updateAutoNotifyUI();
    showToast(autoNotificationEnabled ? 'เปิดการแจ้งเตือนอัตโนมัติแล้ว' : 'ปิดการแจ้งเตือนอัตโนมัติแล้ว');
}

function updateAutoNotifyUI() {
    const dot = document.getElementById('autoNotifyStatusDot');
    const text = document.getElementById('autoNotifyStatusText');
    if (dot && text) {
        if (autoNotificationEnabled) {
            dot.className = "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse";
            text.className = "font-bold text-emerald-600 dark:text-emerald-400";
            text.textContent = "เปิดอยู่";
        } else {
            dot.className = "w-2.5 h-2.5 rounded-full bg-slate-400";
            text.className = "font-bold text-slate-400";
            text.textContent = "ปิดอยู่";
        }
    }
}

// UNLIMITED ACADEMIC WEEK COUNTER (นับเพิ่มไปเรื่อยๆ ไม่มีลิมิต)
function calculateAcademicWeek() {
    const start = new Date(semesterStartDate + "T00:00:00");
    const now = new Date();
    const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const diffTime = current.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        return { weekNum: 0, text: "ยังไม่เปิดเทอม", dateRangeStr: "รอเปิดภาคเรียน" };
    }

    // คำนวณสัปดาห์เพิ่มขึ้นเรื่อยๆ ไม่มีเพดานกั้น
    const weekNum = Math.floor(diffDays / 7) + 1;
    
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + ((weekNum - 1) * 7));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    const options = { day: 'numeric', month: 'short' };
    const dateRangeStr = `${weekStart.toLocaleDateString('th-TH', options)} - ${weekEnd.toLocaleDateString('th-TH', options)}`;

    return { weekNum, text: `สัปดาห์ที่ ${weekNum}`, dateRangeStr };
}

function updateAcademicWeekDisplay() {
    const weekInfo = calculateAcademicWeek();
    ['headerAcademicWeek', 'liveWeekBadge', 'settingsCurrentWeekStr'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = weekInfo.text;
    });
    const rangeEl = document.getElementById('settingsWeekDateRange');
    if (rangeEl) rangeEl.textContent = weekInfo.dateRangeStr;
}

// CLOCK & DYNAMIC MONITOR LOOP
function initClockAndLoop() {
    updateRealtimeStatus();
    setInterval(updateRealtimeStatus, 1000);
}

function updateRealtimeStatus() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clockEl = document.getElementById('digitalClock');
    if (clockEl) clockEl.textContent = `${hours}:${minutes}:${seconds}`;

    const dayNamesFull = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
    const monthNamesFull = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    const dateTodayKeyStr = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
    const dateStr = `${dayNamesFull[now.getDay()]}ที่ ${now.getDate()} ${monthNamesFull[now.getMonth()]} ${now.getFullYear() + 543}`;
    const dateEl = document.getElementById('currentDateStr');
    if (dateEl) dateEl.textContent = dateStr;

    // Auto Morning Notification (07:00 AM)
    if (autoNotificationEnabled && hours === "07" && minutes === "00" && morningNotifiedDateStr !== dateTodayKeyStr) {
        morningNotifiedDateStr = dateTodayKeyStr;
        notifiedClassIdsForToday.clear();
        sendDailyScheduleToGoogleChat(true);
    }

    // DYNAMIC LIVE CLASS & COUNTDOWN EVALUATOR
    evaluateLiveClassStatus(now);
}

function evaluateLiveClassStatus(now) {
    const dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const currentDayKey = dayKeys[now.getDay()];
    const daySchedule = MASTER_SCHEDULE[currentDayKey];

    const titleEl = document.getElementById('currentSubjectTitle');
    const subEl = document.getElementById('currentSubjectSub');
    const countdownEl = document.getElementById('timeRemainingCountdown');
    const countdownLabelEl = document.getElementById('countdownLabel');
    const nextSubjectEl = document.getElementById('nextSubjectShort');
    const iconBox = document.getElementById('statusIconBox');

    document.querySelectorAll('.active-class-card').forEach(el => el.classList.remove('active-class-card'));

    if (!daySchedule) {
        if (titleEl) titleEl.textContent = "วันนี้ไม่มีคาบเรียน (วันหยุด)";
        if (subEl) subEl.textContent = "พักผ่อนให้เต็มที่! ไม่มีตารางเรียนสำหรับวันนี้";
        if (iconBox) iconBox.innerHTML = `<i class="fa-solid fa-mug-hot"></i>`;
        
        // ถ้าเป็นวันหยุด ให้นับเวลาถอยหลังข้ามวัน
        setMidnightCountdown(now, countdownEl, countdownLabelEl, nextSubjectEl);
        return;
    }

    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    let currentClass = null;
    let nextClass = null;

    for (let i = 0; i < daySchedule.classes.length; i++) {
        const item = daySchedule.classes[i];
        const [startH, startM] = item.timeStart.split(':').map(Number);
        const [endH, endM] = item.timeEnd.split(':').map(Number);
        
        const startMins = startH * 60 + startM;
        const endMins = endH * 60 + endM;

        if (nowMinutes >= startMins && nowMinutes < endMins) {
            currentClass = item;
            nextClass = daySchedule.classes[i + 1] || null;
            break;
        } else if (nowMinutes < startMins && !nextClass) {
            nextClass = item;
        }

        if (autoNotificationEnabled && !item.isLunch) {
            const diffToStart = startMins - nowMinutes;
            if (diffToStart === 10 && !notifiedClassIdsForToday.has(item.id)) {
                sendClassReminderWebhook(item, daySchedule.dayName);
                notifiedClassIdsForToday.add(item.id);
            }
        }
    }

    if (currentClass) {
        // --- อยู่ในคาบเรียน: นับถอยหลังหมดคาบเรียน ---
        if (titleEl) titleEl.textContent = currentClass.subject;
        if (subEl) subEl.textContent = currentClass.isLunch ? "อยู่ในช่วงพักรับประทานอาหารกลางวัน" : `ห้องเรียน: ${currentClass.room} (${currentClass.timeStart} - ${currentClass.timeEnd} น.)`;
        if (iconBox) iconBox.innerHTML = currentClass.isLunch ? `<i class="fa-solid fa-utensils"></i>` : `<i class="fa-solid fa-book-open"></i>`;
        if (countdownLabelEl) countdownLabelEl.textContent = "เวลาคงเหลือในคาบนี้";

        const [endH, endM] = currentClass.timeEnd.split(':').map(Number);
        const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endH, endM, 0);
        const totalSecs = Math.max(0, Math.floor((targetTime - now) / 1000));

        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        if (countdownEl) countdownEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        if (nextSubjectEl) nextSubjectEl.textContent = nextClass ? nextClass.subject : "หมดคาบเรียนวันนี้";

        const cardEl = document.getElementById(`today-card-${currentClass.id}`);
        if (cardEl) cardEl.classList.add('active-class-card');

    } else {
        // --- ไม่อยู่ในคาบเรียน (ก่อนเริ่มเรียน หรือ เลิกเรียนแล้ว): นับถอยหลังข้ามวัน ---
        const firstClass = daySchedule.classes[0];
        const [firstH, firstM] = firstClass.timeStart.split(':').map(Number);
        const firstMins = firstH * 60 + firstM;

        if (nowMinutes < firstMins) {
            if (titleEl) titleEl.textContent = "ยังไม่ถึงเวลาเริ่มเรียน";
            if (subEl) subEl.textContent = `วิชาแรกเริ่มเวลา ${firstClass.timeStart} น. (${firstClass.subject})`;
            if (iconBox) iconBox.innerHTML = `<i class="fa-solid fa-hourglass-start"></i>`;
            if (countdownLabelEl) countdownLabelEl.textContent = "นับถอยหลังเริ่มวิชาแรก";
            
            // นับถอยหลังเข้าวิชาแรก
            const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), firstH, firstM, 0);
            const totalSecs = Math.max(0, Math.floor((targetTime - now) / 1000));
            const mins = Math.floor(totalSecs / 60);
            const secs = totalSecs % 60;
            if (countdownEl) countdownEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            if (nextSubjectEl) nextSubjectEl.textContent = firstClass.subject;
        } else {
            if (titleEl) titleEl.textContent = "เลิกเรียนแล้วสำหรับวันนี้";
            if (subEl) subEl.textContent = "ไม่มีคาบเรียนต่อแล้ว พักผ่อนตามอัธยาศัย";
            if (iconBox) iconBox.innerHTML = `<i class="fa-solid fa-house"></i>`;
            
            // เลิกเรียนแล้ว -> สลับเป็นนับเวลาข้ามวันไปสู่วันถัดไป
            setMidnightCountdown(now, countdownEl, countdownLabelEl, nextSubjectEl);
        }
    }
}

// Helper: นับเวลาถอยหลังข้ามวัน (00:00:00 น.)
function setMidnightCountdown(now, countdownEl, countdownLabelEl, nextSubjectEl) {
    if (countdownLabelEl) countdownLabelEl.textContent = "เวลาถอยหลังข้ามวัน";
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const diffSecs = Math.max(0, Math.floor((midnight - now) / 1000));

    const hrs = Math.floor(diffSecs / 3600);
    const mins = Math.floor((diffSecs % 3600) / 60);
    const secs = diffSecs % 60;

    if (countdownEl) {
        countdownEl.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    const nextDayNames = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
    const nextDayIndex = (now.getDay() + 1) % 7;
    if (nextSubjectEl) nextSubjectEl.textContent = nextDayNames[nextDayIndex];
}

// RENDER TODAY SCHEDULE
function renderTodaySchedule() {
    const container = document.getElementById('todayCardsContainer');
    if (!container) return;
    container.innerHTML = '';

    const now = new Date();
    const dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const todayKey = dayKeys[now.getDay()];
    const daySchedule = MASTER_SCHEDULE[todayKey];

    const dayNamesFull = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
    const dateTitleEl = document.getElementById('todayDateFullStr');
    if (dateTitleEl) dateTitleEl.textContent = `${dayNamesFull[now.getDay()]}ที่ ${now.getDate()} ${now.getFullYear() + 543}`;

    if (!daySchedule) {
        container.innerHTML = `
            <div class="col-span-full bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center text-slate-500 dark:text-slate-400">
                <i class="fa-solid fa-mug-hot text-4xl text-slate-300 dark:text-slate-600 mb-2"></i>
                <p class="font-bold font-heading text-lg text-slate-700 dark:text-slate-200">วันนี้ไม่มีตารางเรียน</p>
                <p class="text-xs">พักผ่อนให้สบาย หรือเตรียมตัวสำหรับวันถัดไป</p>
            </div>
        `;
        return;
    }

    daySchedule.classes.forEach(item => {
        const isLunch = item.isLunch;
        const card = document.createElement('div');
        card.id = `today-card-${item.id}`;
        card.className = `bg-white dark:bg-slate-800 rounded-2xl p-5 border dark:border-slate-700/80 shadow-sm flex flex-col justify-between relative transition hover:shadow-md ${item.color}`;

        card.innerHTML = `
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-2xs">
                        <i class="fa-regular fa-clock text-slate-400 mr-1"></i>${item.timeStart} - ${item.timeEnd}
                    </span>
                    ${isLunch ? `<span class="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">พักเที่ยง</span>` : ''}
                </div>
                ${!isLunch ? `<span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">ห้อง ${item.room}</span>` : ''}
            </div>

            <div class="my-3">
                <h4 class="text-base font-bold font-heading text-slate-800 dark:text-slate-100 leading-snug">${item.subject}</h4>
            </div>

            <div class="flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-700/60 pt-3 mt-1">
                <span class="text-slate-500 dark:text-slate-400">ห้อง IT.4501</span>
                <button onclick="sendSingleSubjectWebhook('${item.subject}', '${item.timeStart} - ${item.timeEnd}', '${item.room}', '${daySchedule.dayName}')" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-bold flex items-center gap-1 text-[11.5px]">
                    <i class="fa-solid fa-share-nodes"></i> แจ้งเข้า Chat
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// RENDER WEEKLY SCHEDULE
function renderWeeklySchedule() {
    const container = document.getElementById('weeklyScheduleGrid');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(MASTER_SCHEDULE).forEach(dayKey => {
        const day = MASTER_SCHEDULE[dayKey];
        const dayBlock = document.createElement('div');
        dayBlock.className = `weekly-day-block day-section-${dayKey} bg-white dark:bg-slate-800 rounded-2xl border ${day.borderColor} shadow-sm overflow-hidden`;

        let classesHtml = '';
        day.classes.forEach(c => {
            classesHtml += `
                <div class="p-3.5 rounded-xl border ${c.color} flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="flex items-start sm:items-center gap-3">
                        <span class="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex-shrink-0">
                            ${c.timeStart} - ${c.timeEnd}
                        </span>
                        <div>
                            <div class="text-sm font-bold font-heading text-slate-800 dark:text-slate-100">${c.subject}</div>
                            <div class="text-[11px] text-slate-500 dark:text-slate-400">${c.isLunch ? 'ช่วงพักรับประทานอาหาร' : 'วิชาเรียนปกติ'}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 self-end sm:self-auto">
                        ${!c.isLunch ? `<span class="text-xs font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">ห้อง ${c.room}</span>` : `<span class="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">พักเที่ยง</span>`}
                    </div>
                </div>
            `;
        });

        dayBlock.innerHTML = `
            <div class="${day.bgColor} px-5 py-3 text-white flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-calendar-day"></i>
                    <h4 class="font-bold font-heading text-base">${day.dayName}</h4>
                </div>
                <span class="text-xs bg-white/20 dark:bg-slate-950/40 px-2.5 py-0.5 rounded-full">${day.classes.filter(x => !x.isLunch).length} วิชา</span>
            </div>
            <div class="p-4 space-y-2.5">${classesHtml}</div>
        `;

        container.appendChild(dayBlock);
    });
}

function filterWeeklyDay(dayKey) {
    document.querySelectorAll('.day-filter-btn').forEach(btn => {
        btn.className = "day-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700";
    });
    if (event && event.target) {
        event.target.className = "day-filter-btn px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-sm";
    }

    const blocks = document.querySelectorAll('.weekly-day-block');
    blocks.forEach(block => {
        if (dayKey === 'all' || block.classList.contains(`day-section-${dayKey}`)) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}

function switchTab(tabKey) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn px-4 py-2.5 font-heading text-sm font-semibold border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-2 whitespace-nowrap";
    });
    const activeBtn = document.getElementById(`tabBtn-${tabKey}`);
    if (activeBtn) {
        activeBtn.className = "tab-btn px-4 py-2.5 font-heading text-sm font-semibold border-b-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 flex items-center gap-2 whitespace-nowrap";
    }

    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    const targetContent = document.getElementById(`tabContent-${tabKey}`);
    if (targetContent) targetContent.classList.remove('hidden');
}

// WEBHOOK HANDLERS
async function sendWebhookPayload(payload) {
    try {
        await fetch(GOOGLE_CHAT_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(payload)
        });
        showToast('ส่งออกไม่ได้ ผู้พัฒนาได้เอาออกแล้ว! 🚀');
    } catch (err) {
        console.error(err);
        showToast('ไม่สามารถเชื่อมต่อกับ Google Chat Webhook ได้');
    }
}

function testGoogleChatWebhook() {
    const weekInfo = calculateAcademicWeek();
    const webAppUrl = getWebAppUrl();
    const payload = {
        text: `🔔 *[ทดสอบระบบแจ้งเตือนตารางเรียน IT.4501]*\n\n✅ การเชื่อมต่อ Webhook สมบูรณ์ดี!\n📅 *สถานะปัจจุบัน:* ${weekInfo.text}\n⏰ *เวลาทดสอบ:* ${new Date().toLocaleTimeString('th-TH')} น.\n\n🔗 *เข้าชมตารางเรียนออนไลน์:* ${webAppUrl}`
    };
    sendWebhookPayload(payload);
}

function sendDailyScheduleToGoogleChat(isAuto = false) {
    const now = new Date();
    const dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const todayKey = dayKeys[now.getDay()];
    const daySchedule = MASTER_SCHEDULE[todayKey];
    const weekInfo = calculateAcademicWeek();
    const webAppUrl = getWebAppUrl();
    const tagText = isAuto ? "🌅 *[สรุปตารางเรียนประจำวันอัตโนมัติ - 07:00 น.]*" : "📅 *[ตารางเรียนประจำวัน ห้อง IT.4501]*";

    if (!daySchedule) {
        sendWebhookPayload({
            text: `${tagText}\n\n📌 *${weekInfo.text}*\n🎉 *วันนี้ไม่มีคาบเรียน (วันหยุด)* พักผ่อนให้เต็มที่ครับ!\n\n🔗 *เข้าชมตารางเรียนออนไลน์:* ${webAppUrl}`
        });
        return;
    }

    let classTextList = daySchedule.classes.map(c => {
        if (c.isLunch) return `🍱 *${c.timeStart} - ${c.timeEnd} น.* : พักรับประทานอาหาร (Lunch)`;
        return `📚 *${c.timeStart} - ${c.timeEnd} น.* : ${c.subject}\n    📍 *ห้องเรียน:* ${c.room}`;
    }).join('\n\n');

    const payload = {
        text: `${tagText}\n🎓 *${weekInfo.text} (${daySchedule.dayName})*\n────────────────────\n\n${classTextList}\n\n────────────────────\n🔗 *เข้าชมตารางเรียนออนไลน์:* ${webAppUrl}\nตั้งใจเรียนนะครับทุกคน! 💪`
    };

    sendWebhookPayload(payload);
}

function sendClassReminderWebhook(item, dayName) {
    const weekInfo = calculateAcademicWeek();
    const webAppUrl = getWebAppUrl();
    const payload = {
        text: `⏰ *[แจ้งเตือนก่อนเริ่มคาบ 10 นาที!]*\n\n📚 *วิชา:* ${item.subject}\n📍 *ห้องเรียน:* ${item.room}\n🕒 *เวลาเรียน:* ${item.timeStart} - ${item.timeEnd} น.\n📅 *ประจำ:* ${dayName} (${weekInfo.text})\n\n🔗 *เข้าชมตารางเรียนออนไลน์:* ${webAppUrl}\n\nเตรียมตัวเข้าห้องเรียนได้เลยครับนักศึกษา IT.4501! 🎒`
    };
    sendWebhookPayload(payload);
}

function sendSingleSubjectWebhook(subject, timeStr, room, dayName) {
    const webAppUrl = getWebAppUrl();
    const payload = {
        text: `📌 *[ข้อมูลวิชาเรียน - IT.4501]*\n\n📚 *วิชา:* ${subject}\n🕒 *เวลา:* ${timeStr} น.\n📍 *ห้องเรียน:* ${room}\n📅 *วัน:* ${dayName}\n\n🔗 *เข้าชมตารางเรียนออนไลน์:* ${webAppUrl}`
    };
    sendWebhookPayload(payload);
}

function copyWebhookUrl() {
    const copyText = document.getElementById("webhookUrlInput");
    if (!copyText) return;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showToast('คัดลอก Webhook URL เรียบร้อยแล้ว');
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'bg-slate-900 dark:bg-slate-800 text-white border border-slate-700 dark:border-slate-600 px-4 py-3 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2.5 transform transition-all duration-300 translate-y-2 opacity-0';
    toast.innerHTML = `<i class="fa-solid fa-circle-info text-sky-400"></i><span>${message}</span>`;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 10);
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}