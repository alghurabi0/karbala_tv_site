import { useEffect, useState } from "react";

const IntroAnimation = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Notify parent when animation finishes
    }, 4000); // Match your animation duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="intro-animation">
      <InlineSVG src="/images/intro.svg" className="animated-svg" />
    </div>
  );
};

export default IntroAnimation;

const InlineSVG = ({ src, className }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => setSvgContent(text));
  }, [src]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
