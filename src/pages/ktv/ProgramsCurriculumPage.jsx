import React from "react";
import { KtvTitleReverse } from "./KtvHomaPage";
import { FaPlay } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

function ProgramsCurriculumPage() {
  const programs = [
    {
      id: 1,
      time: "00:00",
      image: "/images/karbala_city.jpg",
      title: "نور البيان",
      description:
        "برنامج حواري عقائدي الذي يتضمن في محتواه التدبر والتأمل في النصوص القرآنية المتضمنة للأحداث والوقائع القصصية ونحو ذلك بصحبة نخبة من ضيوف المتواجدين في كل حلقة من حلقات البرنامج",
    },
    {
      id: 2,
      time: "01:00",
      image: "/images/karbala_city.jpg",
      title: "الاخبار",
      description: "اخبار منوعة",
    },
    {
      id: 3,
      time: "02:00",
      image: "/images/karbala_city.jpg",
      title: "الدين والحياة",
      description:
        "برنامج يوضح الارتباط الوثيق للدين في حياة الانسان وتبيان الشريعة التي شرعها الله جل وعلا للبشر لهدايتهم، يتطرق فيه سماحة الشيخ محمد كنعان الى موضوع عقائدي ثم يتسلم اسئلة المشاهدين في الامور الفقهية والعقائدية ليجيب عليها. وقت البرنامج ساعة ونصف يبث بشكل مباشر يوم الاثنين ويعاد يوم الثلاثاء الساعة الواحدة والنصف صباحا",
    },
    {
      id: 4,
      time: "03:00",
      image: "/images/karbala_city.jpg",
      title: "سراج المودة",
      description:
        "برنامج اجتماعي ثقافي تربوي يسلط الضوء في كل حلقة من حلقاته على موضوع ليفتح له باباً من ابواب السعادة الزوجية بحوار يجمع الخبراء والمختصين لمناقشته من اجل تعزيز التواصل السليم في اسرار السعادة الزوجية",
    },
    {
      id: 5,
      time: "04:00",
      image: "/images/karbala_city.jpg",
      title: "ادعية وزيارات عامة",
      description: "",
    },
    {
      id: 6,
      time: "05:00",
      image: "/images/karbala_city.jpg",
      title: "موعد صلاة الصبح",
      description: "",
    },
  ];
  return (
    <>
      <div className="programs">
        <KtvTitleReverse title={"منهاج البرامج"} />
        {programs.map((program) => (
          <ProgramCurriculumTile program={program} key={program.id} />
        ))}
      </div>
    </>
  );
}

export default ProgramsCurriculumPage;

function ProgramCurriculumTile({ program }) {
  return (
    <>
      <div className="program">
        <section className="time">
          <span className="time-text">{program.time}</span>
          <FaPlay color="grey" size={20} />
          <CiTimer size={25} color="red" />
        </section>
        <img src={program.image} className="img" />
        <section className="metadata">
          <div className="title">{program.title}</div>
          <div className="description">{program.description}</div>
        </section>
      </div>
    </>
  );
}
