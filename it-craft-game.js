// ZEN MATRIX IT CLICKER (มินิเกมสาย IT แบบผ่อนคลาย ไม่ต้องคิดเยอะ)
const IT_ZEN_GAME = {
    dataBits: 0,
    bitsPerClick: 1,
    autoBitsPerSec: 0,
    
    upgrades: [
        { id: "auto_click", name: "🤖 กด อัตโนมัติ", cost: 15, bps: 1, count: 0 },
        { id: "fast_cpu", name: "⚡ โอเวอร์คล็อก ซีพียู", cost: 50, bpc: 2, count: 0 },
        { id: "cloud_node", name: "☁️ คลาวด์ โหนด เซิร์ฟเวอร์", cost: 200, bps: 10, count: 0 },
        { id: "quantum_core", name: "🔮 ควอนตัมคอร์", cost: 1000, bps: 50, count: 0 }
    ],

    init() {
        this.loadGame();
        this.renderUI();
        setInterval(() => this.autoTick(), 1000);
    },

    loadGame() {
        const saved = localStorage.getItem('IT4501_zen_game');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.dataBits = parsed.dataBits || 0;
            this.bitsPerClick = parsed.bitsPerClick || 1;
            this.autoBitsPerSec = parsed.autoBitsPerSec || 0;
            if (parsed.upgrades) {
                this.upgrades.forEach((u, i) => {
                    if (parsed.upgrades[i]) u.count = parsed.upgrades[i].count || 0;
                });
            }
        }
    },

    saveGame() {
        localStorage.setItem('IT4501_zen_game', JSON.stringify({
            dataBits: this.dataBits,
            bitsPerClick: this.bitsPerClick,
            autoBitsPerSec: this.autoBitsPerSec,
            upgrades: this.upgrades.map(u => ({ count: u.count }))
        }));
    },

    clickBit(event) {
        this.dataBits += this.bitsPerClick;
        this.createFloatingText(event, `+${this.bitsPerClick} Bit`);
        this.saveGame();
        this.updateDisplay();
    },

    buyUpgrade(index) {
        const up = this.upgrades[index];
        if (this.dataBits >= up.cost) {
            this.dataBits -= up.cost;
            up.count += 1;
            if (up.bps) this.autoBitsPerSec += up.bps;
            if (up.bpc) this.bitsPerClick += up.bpc;
            up.cost = Math.floor(up.cost * 1.5);
            
            showToast(`ซื้อ ${up.name} เรียบร้อยแล้ว! ✨`);
            this.saveGame();
            this.renderUI();
        } else {
            showToast('Bits ยังไม่พอสำหรับอัปเกรดนี้');
        }
    },

    autoTick() {
        if (this.autoBitsPerSec > 0) {
            this.dataBits += this.autoBitsPerSec;
            this.saveGame();
            this.updateDisplay();
        }
    },

    createFloatingText(e, text) {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const el = document.createElement('div');
        el.className = 'absolute text-amber-300 font-bold font-mono text-sm pointer-events-none animate-bounce';
        el.style.left = `${e.clientX - rect.left}px`;
        el.style.top = `${e.clientY - rect.top - 20}px`;
        el.textContent = text;
        btn.appendChild(el);
        setTimeout(() => el.remove(), 800);
    },

    updateDisplay() {
        const bitsEl = document.getElementById('zenBitsCount');
        const bpsEl = document.getElementById('zenBpsCount');
        if (bitsEl) bitsEl.textContent = this.dataBits.toLocaleString();
        if (bpsEl) bpsEl.textContent = this.autoBitsPerSec.toLocaleString();
    },

    renderUI() {
        const container = document.getElementById('itGameContainer');
        if (!container) return;

        container.innerHTML = `
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white space-y-6">
                <!-- Header -->
                <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                        <h3 class="text-xl font-bold font-heading text-emerald-400 flex items-center gap-2">
                            <i class="fa-solid fa-spa"></i> IT Matrix Zen Clicker (เกมไอทีแบบผ่อนคลาย)
                        </h3>
                        <p class="text-xs text-slate-400 mt-1">กดสะสม Data Bits สบายๆ ผ่อนคลายจากการเรียน</p>
                    </div>
                    <div class="text-right">
                        <div id="zenBitsCount" class="text-2xl font-mono font-bold text-amber-300">${this.dataBits.toLocaleString()}</div>
                        <div class="text-[11px] text-slate-400">Data Bits • (<span id="zenBpsCount">${this.autoBitsPerSec}</span> Bits/วิ)</div>
                    </div>
                </div>

                <!-- RELAXING CLICK AREA -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="md:col-span-2 bg-slate-950/80 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[260px]">
                        <!-- Relaxing Background Animation Glow -->
                        <div class="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-indigo-950/30"></div>
                        
                        <button onclick="IT_ZEN_GAME.clickBit(event)" class="relative z-10 w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 hover:from-emerald-500 hover:to-teal-300 shadow-2xl shadow-emerald-500/30 flex flex-col items-center justify-center transition transform active:scale-95 group border-4 border-emerald-300/30">
                            <i class="fa-solid fa-atom text-4xl text-slate-950 group-hover:rotate-45 transition duration-500"></i>
                            <span class="text-[11px] font-bold text-slate-950 mt-1 uppercase tracking-wider">CLICK!</span>
                        </button>

                        <p class="text-xs text-slate-400 mt-4 relative z-10">คลิกที่แกนพลังงานเพื่อเก็บ Data Bits (+${this.bitsPerClick} / คลิก)</p>
                    </div>

                    <!-- UPGRADES LIST -->
                    <div class="space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">รายการอัปเกรดผ่อนคลาย:</h4>
                        ${this.upgrades.map((up, i) => `
                            <div class="bg-slate-800/80 border border-slate-700 p-3 rounded-xl flex items-center justify-between gap-2">
                                <div>
                                    <div class="text-xs font-bold text-slate-200">${up.name} <span class="text-emerald-400">(x${up.count})</span></div>
                                    <div class="text-[10px] text-slate-400">ราคา: ${up.cost.toLocaleString()} Bits</div>
                                </div>
                                <button onclick="IT_ZEN_GAME.buyUpgrade(${i})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition active:scale-95">
                                    ซื้อ
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};

window.addEventListener('DOMContentLoaded', () => {
    IT_ZEN_GAME.init();
});
