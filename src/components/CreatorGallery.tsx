import React, {
  CSSProperties,
  FC,
  ReactElement,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Text parts
const text1 = "Imagination  ";
const text2 = "is ";
const text3 = "my ";
const text4 = "tool.";
const text5 = "Nikka Joie Sanchez Mendoza";

// Utility for animation
function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // speed range
}

function getRandomRotation() {
  return Math.random() * 60 - 30; // -30 to 30 degrees
}

function getRandomPastelColor(): string {
  const hue = Math.floor(Math.random() * 360); // any hue
  const saturation = 60 + Math.random() * 15; // 60% - 75%
  const lightness = 88 + Math.random() * 8; // 88% - 96% very light
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll(".letter");

  // Assign very light pastel colors on first scroll
  ScrollTrigger.create({
    trigger: document.documentElement,
    start: 0,
    once: true,
    onEnter: () => {
      letterElements?.forEach((letter: Element) => {
        const el = letter as HTMLElement;
        gsap.to(el, { color: getRandomPastelColor(), opacity: 0.7, duration: 0.6, ease: "power1.out" });
      });
    },
  });

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
      <div className="mt-24 flex flex-col items-center justify-end">
        <div className="flex flex-wrap w-full justify-center">
          <LetterDisplay word={text1} />
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <LetterDisplay word={text2} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={text3} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={text4} />
        </div>
      </div>
      {/* Hidden sentence3 at the very bottom - only visible during scroll */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center" style={{ transform: 'translateY(100vh)' }}>
        <LetterDisplay word={text5} />
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


type FloatingItem = {
  type: "blob";
  content: ReactElement;
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
    type: "blob",
    content: blobs[1],
    style: { top: "50%", left: "3%", transform: "rotate(8deg)" },
    anim: "float3",
    size: { width: 400, height: 480 },
  },
  {
    type: "blob",
    content: blobs[2],
    style: { top: "70%", right: "18%", transform: "rotate(-6deg)" },
    anim: "float5",
    size: { width: 500, height: 420 },
  },
];

const floatKeyframes = `
@keyframes float1 { 0%{transform:translateY(0) rotate(-18deg);} 50%{transform:translateY(-24px) rotate(-18deg);} 100%{transform:translateY(0) rotate(-18deg);} }
@keyframes float3 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(-18px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
@keyframes float5 { 0%{transform:translateY(0) rotate(-6deg);} 50%{transform:translateY(-16px) rotate(-6deg);} 100%{transform:translateY(0) rotate(-6deg);} }
`;

// Main Gallery
const CreatorGallery: FC = () => {
  return (
    <section
      className="relative min-h-screen overflow font-comfortaa"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#000000",
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
            className="absolute flex items-center justify-center z-10"
            style={{
              width: item.size.width,
              height: item.size.height,
              ...item.style,
              filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.10))",
              animation: `${item.anim} ${
                5.5 + idx * 0.7
              }s ease-in-out infinite`,
              animationDelay: `${idx * 0.9 + (idx % 2 === 0 ? 0.2 : 0.5)}s`,
            }}
          >
            <div style={{ width: "100%", height: "100%" }}>{item.content}</div>
          </div>
        ))}


      {/* Foreground content */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col items-center justify-end" style={{ paddingBottom: "4rem" }}>
        {/* ✨ Added LetterCollision here */}
        <LetterCollision />
      </div>
    </section>
  );
};

export default CreatorGallery;
