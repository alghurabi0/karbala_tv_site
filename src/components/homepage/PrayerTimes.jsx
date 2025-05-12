import React from "react";
import CustomDropdown from "./CustomDropdown";

// function PrayerTimes() {
//   return (
//     <>
//       <div className="prayer-section">
//         <div className="prayer-times">
//           <PrayerTime
//             icon={"/icons/dawn-cir.png"}
//             name="صلاة الصبح"
//             time="3:47"
//           />
//           <PrayerTime
//             icon={"/icons/sunrise-cir.png"}
//             name="شروق الشمس"
//             time="5:16"
//           />
//           <PrayerTime
//             icon={"/icons/morning-cir.png"}
//             name="صلاة الظهر"
//             time="12:01"
//           />
//           <PrayerTime
//             icon={"/icons/afternoon-cir.png"}
//             name="صلاة المغرب"
//             time="7:02"
//           />
//           <PrayerTime
//             icon={"/icons/midnight-cir.png"}
//             name="منتصف الليل"
//             time="11:16"
//           />
//         </div>

//         <div className="date-section rtl">
//           <h3 className="date-title">المواقيت الشرعية والطقس</h3>
//           <p className="location">كربلاء المقدسة ↓</p>
//           <div className="current-date">
//             <h2 className="day-name">الخميس</h2>
//             <div className="date-details">
//               <span className="date1">أيار 2</span>
//               <span className="date2">شوال 23</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function PrayerTime({ icon, name, time }) {
//   return (
//     <div className="prayer-time">
//       <img src={icon} className="prayer-icon" />
//       <p className="prayer-name">{name}</p>
//       <p className="prayer-time-value">{time}</p>
//     </div>
//   );
// }

// export default PrayerTimes;

const PrayerTime = ({ icon, name, time, active = false }) => {
  return (
    <>
      <div className="prayer-time">
        <div className={`prayer-icon ${active ? "active-prayer-icon" : ""}`}>
          <img src={icon || "/placeholder.svg"} alt={name} className="icon" />
        </div>
        <p className="prayer-name">{name}</p>
        <p className="prayer-time-value">{time}</p>
      </div>
    </>
  );
};

const PrayerSection = () => {
  // Sample prayer data
  const prayers = [
    { icon: "/icons/dawn-cir.png", name: "صلاة الصبح", time: "3:47" },
    { icon: "/icons/sunrise-cir.png", name: "شروق الشمس", time: "5:16" },
    { icon: "/icons/morning-cir.png", name: "صلاة الظهر", time: "12:01" },
    { icon: "/icons/afternoon-cir.png", name: "صلاة المغرب", time: "7:02" },
    { icon: "/icons/midnight-cir.png", name: "منتصف الليل", time: "11:16" },
  ];

  // const cities = [
  //   { id: 1, name: "كربلاء المقدسة", value: "karbala" },
  //   { id: 2, name: "بغداد", value: "baghdad" },
  //   { id: 3, name: "البصرة", value: "basra" },
  //   { id: 4, name: "النجف الأشرف", value: "najaf" },
  //   { id: 5, name: "الموصل", value: "mosul" },
  //   { id: 6, name: "أربيل", value: "erbil" },
  //   { id: 7, name: "السليمانية", value: "sulaymaniyah" },
  //   { id: 8, name: "دهوك", value: "duhok" },
  //   { id: 9, name: "كركوك", value: "kirkuk" },
  //   { id: 10, name: "الأنبار", value: "anbar" },
  //   { id: 11, name: "ديالى", value: "diyala" },
  //   { id: 12, name: "بابل", value: "babel" },
  //   { id: 13, name: "واسط", value: "wasit" },
  //   { id: 14, name: "ميسان", value: "maysan" },
  //   { id: 15, name: "ذي قار", value: "thiqar" },
  //   { id: 16, name: "المثنى", value: "muthanna" },
  //   { id: 17, name: "القادسية", value: "qadisiyah" },
  //   { id: 18, name: "صلاح الدين", value: "salahaddin" },
  //   { id: 19, name: "نينوى", value: "ninawa" },
  // ];

  return (
    <div className="prayer-section-container">
      <div className="prayer-section">
        <div className="prayer-times">
          {prayers.slice(0, 4).map((prayer, index) => (
            <PrayerTime
              key={index}
              icon={prayer.icon}
              name={prayer.name}
              time={prayer.time}
            />
          ))}
          <PrayerTime
            icon={prayers[4].icon}
            name={prayers[4].name}
            time={prayers[4].time}
            active={true}
          />
        </div>

        <div className="date-section">
          <p className="date-title">المواقيت الشرعية والطقس</p>
          <div className="location rtl">
            {/* <select className="cities-select">
              {cities.map((city) => (
                <option
                  className="city-option"
                  value={city.value}
                  key={city.id}
                >
                  {city.name}
                </option>
              ))}
            </select> */}
            <CustomDropdown />
          </div>
          <div className="current-date">
            <div className="date-details">
              <div className="date1">2 أيار</div>
              <div className="date2">23 شوال</div>
            </div>
            <div className="day-name">الخميس</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerSection;
