import React from "react";
import MessagesSection from "../../components/ktv/home/MessagesSection";
import { Pagination } from "../../components/ktv/home/NewsSection";
import { Divide } from "lucide-react";

function LabaykYaHusayn() {
  return (
    <>
      <div className="labayk-container">
        <MessagesSection />
        <Pagination />
        <div className="labayk-divider"></div>
        <MessagesForm />
      </div>
    </>
  );
}

export default LabaykYaHusayn;

function MessagesForm() {
  return (
    <section className="messages-form-section">
      <h2 className="form-title">اضافة مشاركة</h2>

      <form className="messages-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <input type="text" placeholder="الاسم" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="البريد الالكتروني" required />
        </div>
        <div className="form-group">
          <select required>
            <option value="">حدد بلد الإقامة</option>
            <option value="iq">العراق</option>
            <option value="sa">السعودية</option>
            <option value="ir">إيران</option>
            <option value="other">أخرى</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            rows="5"
            placeholder="نص المشاركة (النص محدد بـ ٣٠٠ حرف)"
            maxLength={300}
            required
          ></textarea>
        </div>

        <div className="form-group captcha-group">
          <input type="text" placeholder="ادخل الرمز *" required />
          <img src="/images/captcha.png" alt="captcha" />
        </div>

        <div className="form-actions">
          <button type="submit">لبيك ياحسين</button>
        </div>
      </form>
    </section>
  );
}
