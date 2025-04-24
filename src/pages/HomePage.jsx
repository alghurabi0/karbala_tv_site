import React from "react"

export default function HomePage() {
  return (
    <div className="container">
      {/* Header with Arabic calligraphy */}
      <header className="header">
        <div className="header-content">
          <img
            src="/images/ktv_group.svg"
            alt="Arabic Calligraphy Header"
            width={1000}
            height={200}
            className="header-image"
          />
        </div>
      </header>

      {/* Channel Cards */}
      <div className="channel-cards">
        <ChannelCard image="/images/safeer.png" title="Safeer" label="SAFEER" />
        <ChannelCard image="/images/documentary.png" title="الوثائقية" label="DOCUMENTARY" />
        <ChannelCard image="/images/alqurani.png" title="القرآني" label="ALQURANI" />
        <ChannelCard image="/images/karbala.png" title="كربلاء" label="KARBALA" />
      </div>

      {/* Red Divider */}
      <div className="divider"></div>

      {/* Satellite Info Section */}
      <div className="satellite-section">
        {/* Channel Logos */}
        <div className="channel-logos">
          <img src="/images/safeer-small.png" alt="Safeer" width={100} height={40} className="channel-logo" />
          <img src="/images/documentary-small.png" alt="Documentary" width={100} height={40} className="channel-logo" />
          <img src="/images/alqurani-small.png" alt="Alqurani" width={100} height={40} className="channel-logo" />
          <img src="/images/karbala-small.png" alt="Karbala" width={100} height={40} className="channel-logo" />
        </div>

        {/* Satellite Dish */}
        <div className="satellite-dish">
          <img src="/images/satellite-dish.png" alt="Satellite Dish" width={200} height={200} className="dish-image" />
        </div>

        {/* Satellite Info */}
        <div className="satellite-info rtl">
          <h3 className="info-title">تردد المجموعة</h3>
          <div className="info-details">
            <p>HD - نايل سات</p>
            <p>التـــــــردد - 11258</p>
            <p>الاستقطاب - Horizontal</p>
            <p>التـرمـيــــز - 27,500 Msymb/s</p>
          </div>
        </div>
      </div>

      {/* Prayer Times Section */}
      <div className="prayer-section">
        <div className="prayer-times">
          {/* <PrayerTime icon={<Sun className="icon" />} name="صلاة الصبح" time="3:47" />
          <PrayerTime icon={<Sun className="icon" />} name="شروق الشمس" time="5:16" />
          <PrayerTime icon={<Sun className="icon" />} name="صلاة الظهر" time="12:01" />
          <PrayerTime icon={<Sun className="icon" />} name="صلاة المغرب" time="7:02" />
          <PrayerTime icon={<Moon className="icon" />} name="منتصف الليل" time="11:16" /> */}
        </div>

        <div className="date-section rtl">
          <h3 className="date-title">المواقيت الشرعية والطقس</h3>
          <p className="location">كربلاء المقدسة ↓</p>
          <div className="current-date">
            <h2 className="day-name">الخميس</h2>
            <p className="date-details">
              <span className="gregorian-date">أيار 2</span> شوال 23
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="qr-code">
            <img src="/images/qr-code.png" alt="QR Code" width={100} height={100} className="qr-image" />
          </div>
          <div className="contact-email">
            <p>info@karbala-tv.iq</p>
          </div>
          <div className="contact-phone">
            <p>+9647602002200</p>
          </div>
          <div className="website">
            <p>www.karbala-tv.iq</p>
          </div>
          <div className="copyright">
            <p>© All Right Reserved 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ChannelCard({ image, title, label }) {
  return (
    <div className="channel-card">
      <img src={image || "/placeholder.svg"} alt={title} width={256} height={128} className="card-image" />
      <div className="card-overlay">
        <div className="card-title">{title}</div>
        <div className="card-label">{label}</div>
      </div>
    </div>
  )
}

function PrayerTime({ icon, name, time }) {
  return (
    <div className="prayer-time">
      <div className="prayer-icon">{icon}</div>
      <p className="prayer-name">{name}</p>
      <p className="prayer-time-value">{time}</p>
    </div>
  )
}
