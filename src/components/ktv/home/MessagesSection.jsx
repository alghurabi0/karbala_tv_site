import React from "react";

function MessagesSection() {
  const messages = [
    {
      id: 1,
      name: "الباسط ماهر",
      date: "2024/05/07",
      avatar: "/icons/iq-circle.png",
      content:
        "السلام على حسين وعلى أولاد حسين وعلى اصحاب حسين السلام عليك يا ثار الله وإبن ثاره إن لم يجبك لساني عند إستغاتئك وبدني عند استنصارك فقد أجابك سمعي وبصري وروحي وقلبي",
    },
    {
      id: 2,
      name: "عبدالله نجم عبدالله",
      date: "2024/04/08",
      avatar: "/icons/iq-circle.png",
      content:
        "السلام عليك يا أبا عبدالله الحسين السلام عليكم ورحمة الله وبركاته اللهم بحق الحسين الشهيد ان تغفر ل ابي وان انجح من الثالث اللهم امين يارب العالمين السلام عليك يا أبا عبد الله الحسين السلام عليكم ورحمة الله وبركاته اللهم بحق الحسين الشهيد ان تغفر ل ابي وان انجح من الثالث اللهم امين يارب العالمين السلام عليك يا أبا عبدالله الحسين السلام عليكم ورحمة الله وبركاته اللهم بحق الحسين الشهيد ان تغفر ل ابي وان انجح من الثالث اللهم امين ياربالعالمين",
    },
    {
      id: 3,
      name: "داو د سلطان الفوسوي",
      date: "2024/04/07",
      avatar: "/icons/iq-circle.png",
      content:
        "لبيك لبيك لبيك ياحسين لبيك لبيك لبيك ياشهيد لبيك لبيك لبيك يا مظلوم",
    },
    {
      id: 4,
      name: "داو د سلطان الفوسوي",
      date: "2023/11/29",
      avatar: "/icons/iq-circle.png",
      content: "السلام عليك يا ابا الشهداء",
    },
    {
      id: 5,
      name: "عبدالله الحسين",
      date: "2023/11/29",
      avatar: "/icons/iq-circle.png",
      content:
        "لبيك لبيك لبيك يا ابا عبد الله الامام الحسين لبيك لبيك لبيك يا ابا الفضل الامام العباس",
    },
  ];
  return (
    <>
      <section className="messages-section">
        <img src="/images/header.png" className="messages-header" />
        <div className="messages">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MessagesSection;

function Message({ message }) {
  return (
    <>
      <div className="message">
        <div className="message-metadata">
          <img src={message.avatar} className="message-avatar" />
          <div className="message-name-date">
            <div className="message-name">{message.name}</div>
            <div className="message-date">{message.date}</div>
          </div>
        </div>
        <div className="message-content">{message.content}</div>
      </div>
    </>
  );
}
