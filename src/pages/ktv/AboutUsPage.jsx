import React from "react";
import SatelliteInfoSection, {
  SatelliteHomepage,
} from "../../components/homepage/SatelliteInfoSection";

function AboutUsPage() {
  return (
    <>
      <div className="outlet-container">
        <div className="about-us-page">
          {/* Satellite Section */}
          {/* <SatelliteInfoSection /> */}
          <SatelliteAboutUs />
          {/* <SatelliteHomepage /> */}

          {/* Content */}
          <div className="about-us-content">
            {/* Upper section */}
            <div className="about-us-up">
              <section className="about-us-title">
                بسم الله الرحمن الرحيم ..
              </section>
              <section className="about-us-title">
                الحمد لله، وسلام على من انتجبه واصطفاه لا سيما خاتم الرسل وأهل
                بيته ومن والاه
              </section>
              <section className="about-us-subtitle">
                قناة كربلاء المقدسة الفضائية
              </section>
              <section className="about-us-paragraph">
                هي قناة العتبة الحسينية المقدسة، حيث الانتماء الأصيل لفكر الإمام
                الحسين عليه السلام ومبادئه وفلسفة ثورته المباركة. ولتسميتها
                (كربلاء) رمزية تتصل بالمكان من جانب، وتتصل بالإمام الحسين الشهيد
                ومدرسة أهل البيت بركن وثيق من جانب آخر.. ولديوان الوقف الشيعي في
                جمهورية العراق يد بيضاء في دعم هذه القناة التي أخذت على عاتقها
                أن تكون بمستوى أهمية الدور، وعظم المسؤولية، وضخامة الأمانة التي
                يحتـّـمها الواجب الديني العقيدي.. معتمدة الخطاب الفكري الثقافي
                المعاصر الذي يأخذ أصالته من القرآن الكريم والسنة المعصومة
                الصحيحة المطهرة لنبي الإسلام وأهل بيته الكرام (عليه وعليهم أفضل
                الصلاة والسلام)، مع ما يتصل بها من استمرارية مباركة تمثلت
                بالمرجعية الدينية وعلى رأسها سماحة المرجع الديني الأعلى آية الله
                العظمى السيد علي السيستاني مُدّ ظله الوارف..
              </section>
              <section className="about-us-paragraph text-center">
                تأسست قناة كربلاء الفضائية في 30 رمضان 1429 للهجرة، الموافق 1
                تشرين الأول 2008 للميلاد. وانطلقت ببثها التجريبي في 1 رمضان 1430
                هجرية، الموافق 22 آب 2009 ميلادية..
              </section>
            </div>

            {/* Middle Section */}
            <div className="about-us-middle">
              <section className="about-us-title">اهداف القناة</section>
              <section className="about-us-paragraph">
                (1) التعريف بمدرسة أهل البيت عليهم السلام، وإشاعة مبادئها وفكرها
                العظيم، بموضوعية ومنهجية علمية تتلاقى مع الفكر الآخر، وتتلاقح مع
                الحقيقة المنشودة أينما كانت، بما ينسجم مع القرآن الكريم، والسنة
                المطهرة، واحترام العقل.
              </section>
              <section className="about-us-paragraph">
                (2) السعي لتوحيد كلمة المسلمين، بما لا يضر بالثوابت المشار
                إليها، والعمل على إيجاد مناخات سليمة للتآلف والتعاون والتفاهم
                والتعارف بين المسلمين. ومدّ الجسور المبدئية مع باقي الأديان، ومع
                المنجز الحضاري العالمي فيما يتصل بالفكر والثقافة والخطاب
                الإنساني الشامل، الذي يأخذ على عاتقه مسؤولية خدمة الإنسان، أياً
                كان، وفي أي مكان وزمان، وهذا ما ورثناه من مدرسة أهل بيت المصطفى
                (عليه وعليهم التحية والسلام).
              </section>
              <section className="about-us-paragraph">
                (3) ردّ الشبهات بالدليل والبرهان، لكن لا بشكل استفزازي، ولا
                بهيئة ردود الأفعال، بل باستعراض ما في مدرسة أهل البيت (عليهم
                السلام)، وهذا بدوره يأخذ مداه في التعريف بها، وردّ الشبهات
                المثارة ضدها.
              </section>
              <section className="about-us-paragraph">
                (4) إيصال صوت الإبداع الإسلامي الحسيني في مجالات الآداب والفنون
                (شعراً، وقصة، ومسرحاً، ونتاجاً مرئياً بكافة أشكاله، إضافة إلى
                الأداء الصوتي لقرّاء القرآن الكريم وقرّاء العزاء الحسيني في
                المرثيات وقصائد التأبين... وغير ذلك).
              </section>
              <section className="about-us-paragraph">
                (5) التعريف بالتراث العلمي المغمور أو المهمش الذي يتصل بعطاء
                النبي الأكرم ومدرسة أهل بيته الكرام (عليهم السلام)، وإبراز الجهد
                المكنون للعلماء والأدباء والفلاسفة والمبدعين من هذه المدرسة
                العملاقة، مع التنويه بدورهم في بناء المجتمعات الإنسانية.
              </section>
              <section className="about-us-paragraph">
                (6) التعريف بالمشاهد المشرفة لأهل البيت (عليهم السلام)، والعمل
                على نشر الزيارة كثقافة نستلهم منها دروس الكرامة والإيمان التي
                استُشهد من أجلها الأئمة الشهداء وأصحابهم الكرام (عليهم السلام
                والرضوان)، مع تبيان أهداف الزيارة ومعانيها وآدابها.
              </section>
              <section className="about-us-paragraph">
                (7) التواصل الإيجابي مع المهاجرين من أتباع مدرسة أهل البيت، ومع
                إخوانهم المسلمين الآخرين، ومع من يريد نشدان التقارب الإنساني
                المبتنى على أساس خدمة البشرية، التي تعاني من ويلات الحروب
                والاضطهاد والفقر والضياع.
              </section>
              <section className="about-us-paragraph">
                (8) العمل على إيصال الصورة المثلى لشعائر ولاء أهل البيت عليهم
                السلام، تلك الشعائر التي يستفاد منها بيان رسالتهم الدينية
                والتاريخية والإنسانية، لتوضيح أهداف الدين الإسلامي الأصيلة، من
                خلال بث برامج دينية، وتربوية، وثقافية، بالإضافة إلى برامج
                ترفيهية، وبرامج أطفال وشباب وأُسرة، برؤية إسلامية.
              </section>
            </div>

            {/* Down Section */}
            <div className="about-us-down">
              <section className="about-us-title">تنويه</section>

              <section className="about-us-warning">
                مع أن هذه الأهداف كبرى وشاملة، وقد يكون من غير المتاح النهوض
                بأعبائها كاملة، لكننا نستعين بالله تبارك وتعالى على إنجازها
                مستمدين من لطقه وكرمه العظيم كل عون للوصول إلى صدارة القنوات
                الفضائية المتقدمة، عرضاً ومضمونا، بما يحقق لقناتنا ما يؤهلها
                لتكون واجهة إعلامية إسلامية. تسهم في نشر الثقافة والوعي الديني
                الرصين.. شاكرين لكل المخلصين الخيرين الذين يساهمون معنا في
                تحقيقها، خدمة للرسالة الإسلامية العظيمة، وأمنائها بالحق (عليهم
                السلام)
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;

export function SatelliteAboutUs() {
  return (
    <>
      <div
        className="sat-section"
        style={{ border: "none", background: "none" }}
      >
        <img className="sat-dish" src="/images/satellite_dish.svg" alt="Dish" />
        <div className="sat-logos">
          <img src="/images/karbala-seq.png" />
          <img src="/images/quran-seq.png" />
          <img src="/images/documentary-seq.png" />
          <img src="/images/safeer-seq.png" />
        </div>
        <div className="sat-info">
          <div className="sat-title">تردد المجموعة</div>
          <div className="sat-detail">HD - نايل سات</div>
          <div className="sat-detail">التردد - 11258</div>
          <div className="sat-detail">الاستقطاب - Horizontal</div>
          <div className="sat-detail">الترميز - Msymb/s 27,500</div>
        </div>
        <div className="sat-line" style={{ width: "100%" }}></div>
      </div>
    </>
  );
}
