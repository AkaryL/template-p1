import { useEffect, useRef, useState } from 'react';
import cloud from 'd3-cloud';
import { wordCloud } from '../data/mockData';

interface Placed {
  text: string;
  size: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
}

export function WordCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<Placed[]>([]);
  const [dims, setDims] = useState({ w: 320, h: 220 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setDims({ w: Math.max(200, r.width), h: Math.max(160, r.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const maxV = Math.max(...wordCloud.map((w) => w.value));
    const scale = (v: number) => 14 + (v / maxV) * 42;

    const layout = cloud<Placed>()
      .size([dims.w, dims.h])
      .words(
        wordCloud.map((w) => ({
          text: w.text,
          size: scale(w.value),
          x: 0,
          y: 0,
          rotate: 0,
          color: w.color,
        })),
      )
      .padding(3)
      .rotate(() => 0)
      .font('Inter')
      .fontSize((d) => (d as Placed).size)
      .on('end', (out) => setWords(out as Placed[]));

    layout.start();
    return () => {
      layout.stop();
    };
  }, [dims]);

  return (
    <div className="card p-3 h-full flex flex-col">
      <h3 className="text-[13px] font-semibold text-gray-200 mb-2 truncate">Nube de palabras</h3>
      <div ref={containerRef} className="flex-1 relative min-h-[180px]">
        <svg width={dims.w} height={dims.h} className="absolute inset-0">
          <g transform={`translate(${dims.w / 2}, ${dims.h / 2})`}>
            {words.map((w, i) => (
              <text
                key={i}
                textAnchor="middle"
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                style={{
                  fontSize: w.size,
                  fill: w.color,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                }}
              >
                {w.text}
              </text>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
