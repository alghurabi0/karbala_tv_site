import React from "react";

function PrayerTimes() {
  return (
    <>
      <div className="prayer-section">
        <div className="prayer-times">
          <PrayerTime
            icon={"/icons/dawn-cir.png"}
            name="صلاة الصبح"
            time="3:47"
          />
          <PrayerTime
            icon={"/icons/sunrise-cir.png"}
            name="شروق الشمس"
            time="5:16"
          />
          <PrayerTime
            icon={"/icons/morning-cir.png"}
            name="صلاة الظهر"
            time="12:01"
          />
          <PrayerTime
            icon={"/icons/afternoon-cir.png"}
            name="صلاة المغرب"
            time="7:02"
          />
          <PrayerTime
            icon={"/icons/midnight-cir.png"}
            name="منتصف الليل"
            time="11:16"
          />
        </div>

        <div className="date-section rtl">
          <h3 className="date-title">المواقيت الشرعية والطقس</h3>
          <p className="location">كربلاء المقدسة ↓</p>
          <div className="current-date">
            <h2 className="day-name">الخميس</h2>
            <div className="date-details">
              <span className="date1">أيار 2</span>
              <span className="date2">شوال 23</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PrayerTime({ icon, name, time }) {
  return (
    <div className="prayer-time">
      <img src={icon} className="prayer-icon" />
      <p className="prayer-name">{name}</p>
      <p className="prayer-time-value">{time}</p>
    </div>
  );
}

export default PrayerTimes;
