import React, {
  CSSProperties,
  FC,
  ReactElement,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import nikka1 from "../imgs/nikka1.jpg";
import nikka2 from "../imgs/nikka2.jpg";
import nikka3 from "../imgs/nikka3.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Text parts
const creativity = "Imagination  ";
const is = "is ";
const my = "my ";
const craft = "tool.";
const sentence3 = "Nikka Joie Sanchez Mendoza";

// Utility for animation
function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // speed range
}

function getRandomRotation() {
  return Math.random() * 60 - 30; // -30 to 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll(".letter");

  letterElements?.forEach((letter: Element) => {
    const el = letter as HTMLElement;
    gsap.to(el, {
      y: (i, el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "1");
        return (1 - speed) * ScrollTrigger.maxScroll(window);
      },
      ease: "power2.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5,
      },
      rotation: getRandomRotation(),
    });
  });
};

// LetterDisplay component
function LetterDisplay({ word }: { word: string }) {
  return (
    <div className="inline-flex flex-wrap">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className="letter text-white creator-font-size"
          data-speed={String(getRandomSpeed())}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}

// LetterCollision component
export function LetterCollision() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animateLettersOnScroll(containerRef);
    }
  }, []);

  return (
    <div ref={containerRef} className="scroll-smooth">
      <div className="mt-24 flex flex-col justify-end">
        <div className="flex flex-wrap">
          <LetterDisplay word={creativity} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={is} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={my} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={craft} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}

// Simple SVG blob shapes
const blobs: ReactElement[] = [
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "rgba(167, 139, 250, 0.15)",
      filter: "blur(80px)",
    }}
  />,
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "rgba(56, 189, 248, 0.12)",
      filter: "blur(80px)",
    }}
  />,
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "rgba(244, 114, 182, 0.1)",
      filter: "blur(80px)",
    }}
  />,
];

const images = [nikka1, nikka2, nikka3];

type FloatingItem =
  | {
      type: "blob";
      content: ReactElement;
      style: CSSProperties;
      anim: string;
      size: { width: number; height: number };
    }
  | {
      type: "image";
      content: string;
      style: CSSProperties;
      anim: string;
      size: { width: number; height: number };
    };

const floatingItems: FloatingItem[] = [
  {
    type: "blob",
    content: blobs[0],
    style: { top: "7%", left: "20%", transform: "rotate(-18deg)" },
    anim: "float1",
    size: { width: 420, height: 350 },
  },
  {
    type: "image",
    content: images[0],
    style: { top: "12%", right: "18%", transform: "rotate(14deg)" },
    anim: "float2",
    size: { width: 300, height: 350 },
  },
  {
    type: "blob",
    content: blobs[1],
    style: { top: "50%", left: "3%", transform: "rotate(8deg)" },
    anim: "float3",
    size: { width: 400, height: 480 },
  },
  {
    type: "image",
    content: images[2],
    style: { bottom: "1%", right: "20%", transform: "rotate(-12deg)" },
    anim: "float4",
    size: { width: 300, height: 350 },
  },
  {
    type: "blob",
    content: blobs[2],
    style: { top: "70%", right: "18%", transform: "rotate(-6deg)" },
    anim: "float5",
    size: { width: 500, height: 420 },
  },
  {
    type: "image",
    content: images[1],
    style: { bottom: "15%", right: "8%", transform: "rotate(10deg)" },
    anim: "float6",
    size: { width: 300, height: 350 },
  },
];

const floatKeyframes = `
@keyframes float1 { 0%{transform:translateY(0) rotate(-18deg);} 50%{transform:translateY(-24px) rotate(-18deg);} 100%{transform:translateY(0) rotate(-18deg);} }
@keyframes float2 { 0%{transform:translateY(0) rotate(12deg);} 50%{transform:translateY(18px) rotate(12deg);} 100%{transform:translateY(0) rotate(12deg);} }
@keyframes float3 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(-18px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
@keyframes float4 { 0%{transform:translateY(0) rotate(-10deg);} 50%{transform:translateY(20px) rotate(-10deg);} 100%{transform:translateY(0) rotate(-10deg);} }
@keyframes float5 { 0%{transform:translateY(0) rotate(-6deg);} 50%{transform:translateY(-16px) rotate(-6deg);} 100%{transform:translateY(0) rotate(-6deg);} }
@keyframes float6 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(22px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
`;

// Main Gallery
const CreatorGallery: FC = () => {
  return (
    <section
      id="creator-gallery"
      style={{
        position: "relative",
        maxHeight: "100vh",
        background: "#8B8078",
        fontFamily: "Inter, sans-serif",
        fontWeight: 550,
        letterSpacing: "0.6em",
      }}
    >
      <style>{floatKeyframes}</style>

      {/* Floating background items */}
      {floatingItems
        .filter((item) => item.type === "blob")
        .map((item, idx) => (
          <div
            key={`blob-${idx}`}
            style={{
              position: "absolute",
              width: item.size.width,
              height: item.size.height,
              ...item.style,
              zIndex: 1,
              filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.10))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: `${item.anim} ${
                5.5 + idx * 0.7
              }s ease-in-out infinite`,
              animationDelay: `${idx * 0.9 + (idx % 2 === 0 ? 0.2 : 0.5)}s`,
            }}
          >
            <div style={{ width: "100%", height: "100%" }}>{item.content}</div>
          </div>
        ))}

      {floatingItems
        .filter((item) => item.type === "image")
        .map((item, idx) => (
          <div
            key={`img-${idx}`}
            style={{
              position: "absolute",
              width: item.size.width,
              height: item.size.height,
              ...item.style,
              zIndex: 2,
              filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.10))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: `${item.anim} ${
                5.5 + (idx + 3) * 0.7
              }s ease-in-out infinite`,
              animationDelay: `${
                (idx + 3) * 0.9 + ((idx + 3) % 2 === 0 ? 0.2 : 0.5)
              }s`,
            }}
          >
            {typeof item.content === "string" ? (
              <img
                src={item.content}
                alt="gallery object"
                style={{
                  width: item.size.width,
                  height: item.size.height,
                  objectFit: "cover",
                  borderRadius: 32,
                  background: "#E2CBAA",
                }}
              />
            ) : null}
          </div>
        ))}

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: "6vw",
        }}
      >
        {/* ✨ Added LetterCollision here */}
        <LetterCollision />
      </div>
    </section>
  );
};

export default CreatorGallery;
