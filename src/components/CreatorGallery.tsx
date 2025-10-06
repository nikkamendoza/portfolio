import React, { CSSProperties, FC, ReactElement } from 'react';
import nikka1 from '../imgs/nikka1.jpg';
import nikka2 from '../imgs/nikka2.jpg';
import nikka3 from '../imgs/nikka3.jpg';

// Simple SVG blob shapes
const blobs: ReactElement[] = [
  // Blob 1: Purple
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(167, 139, 250, 0.15)', filter: 'blur(80px)' }} />,
  // Blob 2: Blue
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.12)', filter: 'blur(80px)' }} />,
  // Blob 3: Pink
  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(244, 114, 182, 0.1)', filter: 'blur(80px)' }} />,
];

const images = [nikka1, nikka2, nikka3];

type FloatingItem =
  | { type: 'blob'; content: ReactElement; style: CSSProperties; anim: string; size: { width: number; height: number } }
  | { type: 'image'; content: string; style: CSSProperties; anim: string; size: { width: number; height: number } };

const floatingItems: FloatingItem[] = [
  { type: 'blob', content: blobs[0], style: { top: '7%', left: '20%', transform: 'rotate(-18deg)' }, anim: 'float1', size: { width: 420, height: 350 } },
  { type: 'image', content: images[0], style: { top: '12%', right: '18%', transform: 'rotate(14deg)' }, anim: 'float2', size: { width: 300, height: 350 } },
  { type: 'blob', content: blobs[1], style: { top: '50%', left: '3%', transform: 'rotate(8deg)' }, anim: 'float3', size: { width: 400, height: 480 } },
  { type: 'image', content: images[2], style: { bottom: '5%', right: '20%', transform: 'rotate(-12deg)' }, anim: 'float4', size: { width: 300, height: 350 } },
  { type: 'blob', content: blobs[2], style: { top: '70%', right: '18%', transform: 'rotate(-6deg)' }, anim: 'float5', size: { width: 500, height: 420 } },
  { type: 'image', content: images[1], style: { bottom: '25%', right: '4%', transform: 'rotate(10deg)' }, anim: 'float6', size: { width: 300, height: 350 } },
];

const floatKeyframes = `
@keyframes float1 { 0%{transform:translateY(0) rotate(-18deg);} 50%{transform:translateY(-24px) rotate(-18deg);} 100%{transform:translateY(0) rotate(-18deg);} }
@keyframes float2 { 0%{transform:translateY(0) rotate(12deg);} 50%{transform:translateY(18px) rotate(12deg);} 100%{transform:translateY(0) rotate(12deg);} }
@keyframes float3 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(-18px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
@keyframes float4 { 0%{transform:translateY(0) rotate(-10deg);} 50%{transform:translateY(20px) rotate(-10deg);} 100%{transform:translateY(0) rotate(-10deg);} }
@keyframes float5 { 0%{transform:translateY(0) rotate(-6deg);} 50%{transform:translateY(-16px) rotate(-6deg);} 100%{transform:translateY(0) rotate(-6deg);} }
@keyframes float6 { 0%{transform:translateY(0) rotate(8deg);} 50%{transform:translateY(22px) rotate(8deg);} 100%{transform:translateY(0) rotate(8deg);} }
`;

const CreatorGallery: FC = () => {
  return (
    <section id="creator-gallery" style={{ position: 'relative', minHeight: '100vh', background: '#8B8078', overflow: 'hidden', fontFamily: 'Comfortaa, cursive' }}>
      <style>{floatKeyframes}</style>
      {/* Floating Blobs and Images */}
      {/* Render blobs first for background */}
      {floatingItems.filter(item => item.type === 'blob').map((item, idx) => (
        <div
          key={`blob-${idx}`}
          style={{
            position: 'absolute',
            width: item.size.width,
            height: item.size.height,
            ...item.style,
            zIndex: 1,
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `${item.anim} ${5.5 + idx * 0.7}s ease-in-out infinite`,
            animationDelay: `${idx * 0.9 + (idx % 2 === 0 ? 0.2 : 0.5)}s`,
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>{item.content}</div>
        </div>
      ))}
      {/* Render images above blobs */}
      {floatingItems.filter(item => item.type === 'image').map((item, idx) => (
        <div
          key={`img-${idx}`}
          style={{
            position: 'absolute',
            width: item.size.width,
            height: item.size.height,
            ...item.style,
            zIndex: 2,
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `${item.anim} ${5.5 + (idx + 3) * 0.7}s ease-in-out infinite`,
            animationDelay: `${(idx + 3) * 0.9 + ((idx + 3) % 2 === 0 ? 0.2 : 0.5)}s`,
          }}
        >
          {typeof item.content === 'string' ? (
            <img src={item.content} alt="gallery object" style={{ width: item.size.width, height: item.size.height, objectFit: 'cover', borderRadius: 32, background: '#E2CBAA' }} />
          ) : null}
        </div>
      ))}
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '6vw' }}>
        <div className="creator-heading">
          <div className="creator-heading-line"><span className='title-highlight'>M</span>eet</div>
          <div className="creator-heading-line">the</div>
          <div className="creator-heading-line"><span className='title-highlight'>C</span>reator</div>
        </div>
      </div>
    </section>
  );
};

export default CreatorGallery; 