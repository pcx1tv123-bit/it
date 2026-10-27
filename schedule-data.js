// ข้อมูลตารางเรียนหลัก IT.4501
const MASTER_SCHEDULE = {
    mon: {
        dayName: "วันจันทร์",
        bgColor: "bg-red-500 dark:bg-red-900/80",
        borderColor: "border-red-200 dark:border-red-900/50",
        accentBg: "bg-red-50 dark:bg-red-950/30",
        classes: [
            { id: "m1", timeStart: "08:10", timeEnd: "10:40", subject: "ระบบฐานข้อมูลและการประยุกต์", room: "ท.205", color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" },
            { id: "m2", timeStart: "10:40", timeEnd: "11:30", subject: "แคลคูลัส 1", room: "SK2.204", color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" },
            { id: "mL", timeStart: "11:30", timeEnd: "12:20", subject: "พักรับประทานอาหาร (Lunch)", room: "-", isLunch: true, color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" },
            { id: "m3", timeStart: "12:20", timeEnd: "14:50", subject: "การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Front-End", room: "ท.205", color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/60 text-cyan-900 dark:text-cyan-200" },
            { id: "mH", timeStart: "14:50", timeEnd: "15:10", subject: "โฮมรูม (Homeroom)", room: "ท.205", color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" }
        ]
    },
    tue: {
        dayName: "วันอังคาร",
        bgColor: "bg-pink-500 dark:bg-pink-900/80",
        borderColor: "border-pink-200 dark:border-pink-900/50",
        accentBg: "bg-pink-50 dark:bg-pink-950/30",
        classes: [
            { id: "t1", timeStart: "08:10", timeEnd: "09:50", subject: "การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Front-End", room: "ท.205", color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/60 text-cyan-900 dark:text-cyan-200" },
            { id: "t2", timeStart: "09:50", timeEnd: "11:30", subject: "แคลคูลัส 1", room: "SK2.204", color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" },
            { id: "tL", timeStart: "11:30", timeEnd: "12:20", subject: "พักรับประทานอาหาร (Lunch)", room: "-", isLunch: true, color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" },
            { id: "t3", timeStart: "12:20", timeEnd: "14:50", subject: "การพัฒนาซอฟต์แวร์สำหรับอุปกรณ์เคลื่อนที่", room: "ท.103", color: "bg-lime-50 dark:bg-lime-950/40 border-lime-200 dark:border-lime-900/60 text-lime-900 dark:text-lime-200" },
            { id: "tH", timeStart: "14:50", timeEnd: "15:10", subject: "โฮมรูม (Homeroom)", room: "ท.103", color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" }
        ]
    },
    wed: {
        dayName: "วันพุธ",
        bgColor: "bg-emerald-500 dark:bg-emerald-900/80",
        borderColor: "border-emerald-200 dark:border-emerald-900/50",
        accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
        classes: [
            { id: "w1", timeStart: "08:10", timeEnd: "09:50", subject: "การพัฒนาซอฟต์แวร์สำหรับอุปกรณ์เคลื่อนที่", room: "ท.103", color: "bg-lime-50 dark:bg-lime-950/40 border-lime-200 dark:border-lime-900/60 text-lime-900 dark:text-lime-200" },
            { id: "w2", timeStart: "09:50", timeEnd: "11:30", subject: "โครงสร้างข้อมูลและอัลกอริทึม", room: "ท.204", color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" },
            { id: "wL", timeStart: "11:30", timeEnd: "12:20", subject: "พักรับประทานอาหาร (Lunch)", room: "-", isLunch: true, color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" },
            { id: "w3", timeStart: "12:20", timeEnd: "14:50", subject: "การเป็นผู้ประกอบการ", room: "SK2.502", color: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200" },
            { id: "wH", timeStart: "14:50", timeEnd: "15:10", subject: "โฮมรูม (Homeroom)", room: "SK2.502", color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" }
        ]
    },
    thu: {
        dayName: "วันพฤหัสบดี",
        bgColor: "bg-orange-500 dark:bg-orange-900/80",
        borderColor: "border-orange-200 dark:border-orange-900/50",
        accentBg: "bg-orange-50 dark:bg-orange-950/30",
        classes: [
            { id: "th1", timeStart: "08:10", timeEnd: "10:40", subject: "โครงสร้างข้อมูลและอัลกอริทึม", room: "ท.204", color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" },
            { id: "th2", timeStart: "10:40", timeEnd: "11:30", subject: "การเขียนและการนำเสนอโครงงานภาษาอังกฤษ", room: "SK2.206", color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" },
            { id: "thL", timeStart: "11:30", timeEnd: "12:20", subject: "พักรับประทานอาหาร (Lunch)", room: "-", isLunch: true, color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" },
            { id: "th3", timeStart: "12:20", timeEnd: "13:10", subject: "การเขียนและการนำเสนอโครงงานภาษาอังกฤษ", room: "SK2.206", color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" },
            { id: "th4", timeStart: "13:10", timeEnd: "14:50", subject: "ระบบฐานข้อมูลและการประยุกต์", room: "ท.205", color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" },
            { id: "thH", timeStart: "14:50", timeEnd: "15:10", subject: "โฮมรูม (Homeroom)", room: "ท.205", color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" }
        ]
    },
    fri: {
        dayName: "วันศุกร์",
        bgColor: "bg-amber-500 dark:bg-amber-900/80",
        borderColor: "border-amber-200 dark:border-amber-900/50",
        accentBg: "bg-amber-50 dark:bg-amber-950/30",
        classes: [
            { id: "f1", timeStart: "08:10", timeEnd: "10:40", subject: "ระบบปฏิบัติการเครื่องแม่ข่าย", room: "ท.106", color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" },
            { id: "fL", timeStart: "10:40", timeEnd: "11:30", subject: "พักรับประทานอาหาร (Lunch)", room: "-", isLunch: true, color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" },
            { id: "f2", timeStart: "11:30", timeEnd: "13:10", subject: "ระบบปฏิบัติการเครื่องแม่ข่าย", room: "ท.106", color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" },
            { id: "f3", timeStart: "13:10", timeEnd: "14:50", subject: "วิชากิจกรรม", room: "กิจกรรม", color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200" },
            { id: "fH", timeStart: "14:50", timeEnd: "15:10", subject: "โฮมรูม (Homeroom)", room: "ท.106", color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" }
        ]
    }
};