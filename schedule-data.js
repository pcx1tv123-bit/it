// ข้อมูลตารางเรียนหลัก IT.4501
const MASTER_SCHEDULE = {
    mon: {
        dayName: "วันจันทร์",
        bgColor: "bg-red-500 dark:bg-red-900/80",
        borderColor: "border-red-200 dark:border-red-900/50",
        accentBg: "bg-red-50 dark:bg-red-950/30",
        classes: [
            { 
                id: "m1", 
                timeStart: "08:10", 
                timeEnd: "10:40", 
                subject: "ระบบฐานข้อมูลและการประยุกต์", 
                room: "ท.205", 
                instructor: "อ.มุสลีย์ พงษ์บุพศิริกุล", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ศึกษาหลักการออกแบบฐานข้อมูลเชิงสัมพันธ์, ภาษา SQL ขั้นสูง, การทำ Normalization และการประยุกต์ใช้งานฐานข้อมูลในระบบจริง",
                color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" 
            },
            { 
                id: "m2", 
                timeStart: "10:40", 
                timeEnd: "11:30", 
                subject: "แคลคูลัส 1", 
                room: "SK2.204", 
                instructor: "อ.ณัฐฤกตา ชัยศิริ", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ศึกษาเกี่ยวกับลิมิต ความต่อเนื่องของฟังก์ชัน อนุพันธ์และการประยุกต์ใช้งานอนุพันธ์ในทางวิศวกรรมและเทคโนโลยี",
                color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" 
            },
            { 
                id: "mL", 
                timeStart: "11:30", 
                timeEnd: "12:20", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ช่วงเวลาพักรับประทานอาหารกลางวันและพักผ่อนตามอัธยาศัย",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "m3", 
                timeStart: "12:20", 
                timeEnd: "14:50", 
                subject: "การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Front-End", 
                room: "ท.205", 
                instructor: "อ.เทวฤทธิ์ วงค์ฉายา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ปฏิบัติการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ด้วย HTML5, CSS3, JavaScript และการใช้เฟรมเวิร์กจัดการส่วนติดต่อผู้ใช้",
                color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/60 text-cyan-900 dark:text-cyan-200" 
            },
            { 
                id: "mH", 
                timeStart: "14:50", 
                timeEnd: "15:10", 
                subject: "โฮมรูม", 
                room: "ท.205", 
                instructor: "อ.นาริน พรมมี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "กิจกรรมโฮมรูม ชี้แจงประกาศสำคัญ ตรวจสอบการเข้าเรียน และปรึกษาหารือประจำสัปดาห์",
                color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" 
            }
        ]
    },
    tue: {
        dayName: "วันอังคาร",
        bgColor: "bg-pink-500 dark:bg-pink-900/80",
        borderColor: "border-pink-200 dark:border-pink-900/50",
        accentBg: "bg-pink-50 dark:bg-pink-950/30",
        classes: [
            { 
                id: "t1", 
                timeStart: "08:10", 
                timeEnd: "09:50", 
                subject: "การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Front-End", 
                room: "ท.205", 
                instructor: "อ.เทวฤทธิ์ วงค์ฉายา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ต่อเนื่องจากคาบปฏิบัติการ เขียนโค้ดและเชื่อมต่อระบบส่วนหน้า (Front-End) เข้ากับระบบบริการข้อมูล",
                color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/60 text-cyan-900 dark:text-cyan-200" 
            },
            { 
                id: "t2", 
                timeStart: "09:50", 
                timeEnd: "11:30", 
                subject: "แคลคูลัส 1", 
                room: "SK2.208", 
                instructor: "อ.ณัฐฤกตา ชัยศิริ", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ศึกษาทฤษฎีบทและการแก้โจทย์ปัญหาทางคณิตศาสตร์เพิ่มเติม",
                color: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60 text-purple-900 dark:text-purple-200" 
            },
            { 
                id: "tL", 
                timeStart: "11:30", 
                timeEnd: "12:20", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ช่วงเวลาพักรับประทานอาหารกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "t3", 
                timeStart: "12:20", 
                timeEnd: "14:50", 
                subject: "การพัฒนาซอฟต์แวร์สำหรับอุปกรณ์เคลื่อนที่", 
                room: "ท.103", 
                instructor: "อ.ชาลิตรา เตจะสา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "เรียนรู้แนวทางการพัฒนาแอปพลิเคชันบนสมาร์ทโฟนและอุปกรณ์พกพา เครื่องมือและสภาพแวดล้อมการพัฒนาที่จำเป็น",
                color: "bg-lime-50 dark:bg-lime-950/40 border-lime-200 dark:border-lime-900/60 text-lime-900 dark:text-lime-200" 
            },
            { 
                id: "tH", 
                timeStart: "14:50", 
                timeEnd: "15:10", 
                subject: "โฮมรูม", 
                room: "ท.103", 
                instructor: "อ.นาริน พรมมี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "กิจกรรมโฮมรูมประจำวันอังคาร",
                color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" 
            }
        ]
    },
    wed: {
        dayName: "วันพุธ",
        bgColor: "bg-emerald-500 dark:bg-emerald-900/80",
        borderColor: "border-emerald-200 dark:border-emerald-900/50",
        accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
        classes: [
            { 
                id: "w1", 
                timeStart: "08:10", 
                timeEnd: "09:50", 
                subject: "การพัฒนาซอฟต์แวร์สำหรับอุปกรณ์เคลื่อนที่", 
                room: "ท.103", 
                instructor: "อ.ชาลิตรา เตจะสา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ปฏิบัติการเขียนโปรแกรมและออกแบบส่วนติดต่อผู้ใช้สำหรับแอปพลิเคชันมือถือ",
                color: "bg-lime-50 dark:bg-lime-950/40 border-lime-200 dark:border-lime-900/60 text-lime-900 dark:text-lime-200" 
            },
            { 
                id: "w2", 
                timeStart: "09:50", 
                timeEnd: "11:30", 
                subject: "โครงสร้างข้อมูลและอัลกอริทึม", 
                room: "ท.204", 
                instructor: "อ.ณัฐพงษ์ นามคำ", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ศึกษาการจัดเก็บข้อมูลในรูปแบบต่างๆ เช่น Array, Linked List, Stack, Queue รวมถึงอัลกอริทึมการค้นหาและเรียงลำดับ",
                color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" 
            },
            { 
                id: "wL", 
                timeStart: "11:30", 
                timeEnd: "12:20", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ช่วงเวลาพักรับประทานอาหารกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "w3", 
                timeStart: "12:20", 
                timeEnd: "14:50", 
                subject: "การเป็นผู้ประกอบการ", 
                room: "SK2.502", 
                instructor: "อ.สิทธิชัย โกเสนตอ", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "แนวคิดการสร้างธุรกิจนวัตกรรม การวางแผนโมเดลธุรกิจ (Business Model Canvas) และช่องทางตลาดดิจิทัล",
                color: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200" 
            },
            { 
                id: "wH", 
                timeStart: "14:50", 
                timeEnd: "15:10", 
                subject: "โฮมรูม", 
                room: "SK2.502", 
                instructor: "อ.นาริน พรมมี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "กิจกรรมโฮมรูมประจำวันพุธ",
                color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" 
            }
        ]
    },
    thu: {
        dayName: "วันพฤหัสบดี",
        bgColor: "bg-orange-500 dark:bg-orange-900/80",
        borderColor: "border-orange-200 dark:border-orange-900/50",
        accentBg: "bg-orange-50 dark:bg-orange-950/30",
        classes: [
            { 
                id: "th1", 
                timeStart: "08:10", 
                timeEnd: "10:40", 
                subject: "โครงสร้างข้อมูลและอัลกอริทึม", 
                room: "ท.204", 
                instructor: "อ.ณัฐพงษ์ นามคำ", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ปฏิบัติการเขียนโค้ดโครงสร้างข้อมูลเชิงลึกและการวิเคราะห์ความซับซ้อนของอัลกอริทึม",
                color: "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900/60 text-orange-900 dark:text-orange-200" 
            },
            { 
                id: "th2", 
                timeStart: "10:40", 
                timeEnd: "11:30", 
                subject: "การเขียนและการนำเสนอโครงงานภาษาอังกฤษ", 
                room: "SK2.206", 
                instructor: "อ.ณปภัช วรธารารัตน์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ฝึกฝนทักษะการเขียนบทคัดย่อ การจัดทำรายงานเชิงวิชาการ และเทคนิคการนำเสนอโครงงานเป็นภาษาอังกฤษ",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "thL", 
                timeStart: "11:30", 
                timeEnd: "12:20", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ช่วงเวลาพักรับประทานอาหารกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "th3", 
                timeStart: "12:20", 
                timeEnd: "13:10", 
                subject: "การเขียนและการนำเสนอโครงงานภาษาอังกฤษ", 
                room: "SK2.206", 
                instructor: "อ.ณปภัช วรธารารัตน์", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ฝึกซ้อมการนำเสนอผลงานและการตอบข้อซักถามภาคภาษาอังกฤษ",
                color: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200" 
            },
            { 
                id: "th4", 
                timeStart: "13:10", 
                timeEnd: "14:50", 
                subject: "ระบบฐานข้อมูลและการประยุกต์", 
                room: "ท.205", 
                instructor: "อ.มุสลีย์ พงษ์บุพศิริกุล", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ปฏิบัติการจัดการฐานข้อมูลขั้นสูงและการเชื่อมต่อกับระบบหลังบ้าน",
                color: "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200" 
            },
            { 
                id: "thH", 
                timeStart: "14:50", 
                timeEnd: "15:10", 
                subject: "โฮมรูม", 
                room: "ท.205", 
                instructor: "อ.นาริน พรมมี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "กิจกรรมโฮมรูมประจำวันพฤหัสบดี",
                color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" 
            }
        ]
    },
    fri: {
        dayName: "วันศุกร์",
        bgColor: "bg-amber-500 dark:bg-amber-900/80",
        borderColor: "border-amber-200 dark:border-amber-900/50",
        accentBg: "bg-amber-50 dark:bg-amber-950/30",
        classes: [
            { 
                id: "f1", 
                timeStart: "08:10", 
                timeEnd: "10:40", 
                subject: "ระบบปฏิบัติการเครื่องแม่ข่าย", 
                room: "ท.106", 
                instructor: "อ.สุรชัย เจริญศรี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "การติดตั้ง การตั้งค่า และการบริหารจัดการระบบปฏิบัติการเซิร์ฟเวอร์ (Server OS) การกำหนดสิทธิ์ผู้ใช้ และความปลอดภัยเบื้องต้น",
                color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" 
            },
            { 
                id: "fL", 
                timeStart: "10:40", 
                timeEnd: "11:30", 
                subject: "พักรับประทานอาหาร", 
                room: "-", 
                isLunch: true, 
                instructor: "-", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ช่วงเวลาพักรับประทานอาหารกลางวัน",
                color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-200" 
            },
            { 
                id: "f2", 
                timeStart: "11:30", 
                timeEnd: "13:10", 
                subject: "ระบบปฏิบัติการเครื่องแม่ข่าย", 
                room: "ท.106", 
                instructor: "อ.สุรชัย เจริญศรี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "ปฏิบัติการจัดการบริการบนเครื่องแม่ข่ายและการดูแลรักษาระบบเครือข่ายย่อย",
                color: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-200" 
            },
            { 
                id: "f3", 
                timeStart: "13:10", 
                timeEnd: "14:50", 
                subject: "วิชากิจกรรม", 
                room: "กิจกรรม", 
                isActivity: true, 
                instructor: "อาจารย์ประจำชั้น / ฝ่ายพัฒนานักศึกษา", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "กิจกรรมเสริมหลักสูตรและพัฒนาทักษะชีวิตประจำสัปดาห์:\n\n• 13:10 - 13:30 : ชี้แจงกำหนดการและรวมแถว\n• 13:30 - 14:15 : กิจกรรมส่งเสริมคุณธรรม จริยธรรม และการทำงานร่วมกันเป็นทีม\n• 14:15 - 14:50 : สรุปกิจกรรม ประเมินผล และการบำเพ็ญประโยชน์รอบบริเวณคณะ",
                color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200" 
            },
            { 
                id: "fH", 
                timeStart: "14:50", 
                timeEnd: "15:10", 
                subject: "โฮมรูม", 
                room: "ท.106", 
                instructor: "อ.นาริน พรมมี", 
                image: "https://i.pinimg.com/1200x/8e/60/d3/8e60d32df4b628534e56f8dc2bd5788e.jpg",
                description: "กิจกรรมโฮมรูมส่งท้ายสัปดาห์ แจ้งกำหนดการสัปดาห์ถัดไป",
                color: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200" 
            }
        ]
    }
};