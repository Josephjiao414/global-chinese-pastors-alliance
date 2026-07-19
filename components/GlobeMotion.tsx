"use client";

import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

const cityPoints = [
  { simplified: "香港", traditional: "香港", lat: 22.3, lon: 114.2, pulse: 0.12, primary: true },
  { simplified: "新加坡", traditional: "新加坡", lat: 1.3, lon: 103.8, pulse: 0.28 },
  { simplified: "北京", traditional: "北京", lat: 39.9, lon: 116.4, pulse: 0.44 },
  { simplified: "台北", traditional: "台北", lat: 25, lon: 121.5, pulse: 0.36 },
  { simplified: "洛杉矶", traditional: "洛杉磯", lat: 34.1, lon: -118.2, pulse: 0.63, coral: true },
  { simplified: "温哥华", traditional: "溫哥華", lat: 49.3, lon: -123.1, pulse: 0.78 },
  { simplified: "伦敦", traditional: "倫敦", lat: 51.5, lon: -0.1, pulse: 0.9 },
  { simplified: "悉尼", traditional: "悉尼", lat: -33.9, lon: 151.2, pulse: 0.52, coral: true },
];

type GsapTimeline = {
  fromTo: (...args: unknown[]) => GsapTimeline;
  to: (...args: unknown[]) => GsapTimeline;
};

type GsapWindow = Window & {
  gsap?: {
    registerPlugin?: (plugin: unknown) => void;
    timeline: (vars?: Record<string, unknown>) => GsapTimeline;
    fromTo: (...args: unknown[]) => unknown;
    set: (...args: unknown[]) => unknown;
  };
  ScrollTrigger?: unknown;
};

type GlobeMotionProps = {
  locale?: "zh-CN" | "zh-Hant";
};

export function GlobeMotion({ locale = "zh-CN" }: GlobeMotionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gsapReady, setGsapReady] = useState(false);
  const cities = useMemo(
    () =>
      cityPoints.map((city) => ({
        name: locale === "zh-Hant" ? city.traditional : city.simplified,
        lat: city.lat,
        lon: city.lon,
        pulse: city.pulse,
        primary: city.primary,
        coral: city.coral,
      })),
    [locale],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rotation = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const project = (lat: number, lon: number, radius: number, centerX: number, centerY: number) => {
      const phi = (lat * Math.PI) / 180;
      const lambda = ((lon + rotation) * Math.PI) / 180;
      return {
        x: centerX + radius * Math.cos(phi) * Math.sin(lambda),
        y: centerY - radius * Math.sin(phi),
        z: Math.cos(phi) * Math.cos(lambda),
      };
    };

    const curvePoint = (
      a: { x: number; y: number },
      c: { x: number; y: number },
      b: { x: number; y: number },
      t: number,
    ) => {
      const mt = 1 - t;
      return {
        x: mt * mt * a.x + 2 * mt * t * c.x + t * t * b.x,
        y: mt * mt * a.y + 2 * mt * t * c.y + t * t * b.y,
      };
    };

    const drawGrid = (radius: number, centerX: number, centerY: number) => {
      context.strokeStyle = "rgba(0, 122, 88, 0.12)";
      context.lineWidth = 1;

      for (let lat = -60; lat <= 60; lat += 20) {
        context.beginPath();
        for (let lon = -180; lon <= 180; lon += 4) {
          const point = project(lat, lon, radius, centerX, centerY);
          if (lon === -180) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        context.stroke();
      }

      for (let lon = -150; lon <= 180; lon += 30) {
        context.beginPath();
        for (let lat = -82; lat <= 82; lat += 3) {
          const point = project(lat, lon, radius, centerX, centerY);
          if (lat === -82) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        context.stroke();
      }
    };

    const drawDottedLand = (radius: number, centerX: number, centerY: number) => {
      context.fillStyle = "rgba(0, 122, 88, 0.11)";
      for (let lat = -48; lat <= 58; lat += 7) {
        for (let lon = -150; lon <= 165; lon += 9) {
          const asia = lon > 55 && lon < 150 && lat > -12 && lat < 55;
          const europe = lon > -12 && lon < 42 && lat > 36 && lat < 62;
          const northAmerica = lon > -132 && lon < -62 && lat > 22 && lat < 56;
          const australia = lon > 112 && lon < 154 && lat > -42 && lat < -12;
          if (!asia && !europe && !northAmerica && !australia) continue;

          const point = project(lat, lon, radius, centerX, centerY);
          if (point.z < -0.15) continue;
          context.globalAlpha = Math.max(0.04, 0.13 + point.z * 0.05);
          context.beginPath();
          context.arc(point.x, point.y, 1.1, 0, Math.PI * 2);
          context.fill();
        }
      }
      context.globalAlpha = 1;
    };

    const drawCityLabel = (
      city: (typeof cities)[number],
      projected: { x: number; y: number; z: number },
      centerX: number,
    ) => {
      if (projected.z < -0.1 || width < 520) return;
      const alignRight = projected.x > centerX;
      const offsetX = alignRight ? 13 : -13;
      const offsetY = city.lat < 0 ? 18 : -14;
      context.font = "600 12px system-ui, sans-serif";
      context.textAlign = alignRight ? "left" : "right";
      context.textBaseline = "middle";
      context.fillStyle = "rgba(17, 22, 20, 0.54)";
      context.fillText(city.name, projected.x + offsetX, projected.y + offsetY);
    };

    const drawConnections = (radius: number, centerX: number, centerY: number, time: number) => {
      const hub = cities[0];
      const hubPoint = project(hub.lat, hub.lon, radius, centerX, centerY);

      cities.forEach((city) => {
        if (city.primary) return;
        const point = project(city.lat, city.lon, radius, centerX, centerY);
        const alpha = point.z > -0.25 ? 0.58 : 0.14;

        context.beginPath();
        context.moveTo(hubPoint.x, hubPoint.y);
        const midX = (hubPoint.x + point.x) / 2 + (point.y - hubPoint.y) * 0.08;
        const midY = (hubPoint.y + point.y) / 2 - 32 - Math.abs(point.x - hubPoint.x) * 0.04;
        context.quadraticCurveTo(midX, midY, point.x, point.y);
        context.strokeStyle = `rgba(0, 122, 88, ${alpha})`;
        context.lineWidth = 1.15;
        context.stroke();

        const traveler = curvePoint(hubPoint, { x: midX, y: midY }, point, (time / 2200 + city.pulse) % 1);
        context.beginPath();
        context.arc(traveler.x, traveler.y, 2.8, 0, Math.PI * 2);
        context.fillStyle = city.coral ? "rgba(240, 120, 103, 0.88)" : "rgba(0, 122, 88, 0.78)";
        context.fill();

        const pulse = 3.6 + Math.sin(time / 520 + city.pulse * 6) * 1.8;
        context.beginPath();
        context.arc(point.x, point.y, Math.max(2.5, pulse), 0, Math.PI * 2);
        context.fillStyle = city.coral ? "rgba(240, 120, 103, 0.82)" : "rgba(0, 122, 88, 0.82)";
        context.fill();
        drawCityLabel(city, point, centerX);
      });

      context.beginPath();
      context.arc(hubPoint.x, hubPoint.y, 8, 0, Math.PI * 2);
      context.fillStyle = "rgba(0, 122, 88, 0.18)";
      context.fill();
      context.beginPath();
      context.arc(hubPoint.x, hubPoint.y, 4.2, 0, Math.PI * 2);
      context.fillStyle = "rgba(0, 122, 88, 0.96)";
      context.fill();
      drawCityLabel(hub, hubPoint, centerX);
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.42;
      const centerX = width * 0.54;
      const centerY = height * 0.5;
      rotation += reduceMotion ? 0 : 0.035;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(238, 246, 243, 0.54)";
      context.fill();

      drawGrid(radius, centerX, centerY);
      drawDottedLand(radius, centerX, centerY);
      drawConnections(radius, centerX, centerY, time);

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.strokeStyle = "rgba(0, 122, 88, 0.18)";
      context.lineWidth = 1;
      context.stroke();

      if (!reduceMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, [cities]);

  useEffect(() => {
    if (!gsapReady) return;

    const win = window as GsapWindow;
    const gsap = win.gsap;
    if (!gsap) return;

    if (win.ScrollTrigger && gsap.registerPlugin) {
      gsap.registerPlugin(win.ScrollTrigger);
    }

    gsap.set("[data-animate]", { opacity: 1 });
    gsap
      .timeline()
      .fromTo(".hero-kicker", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
      .fromTo(".hero-title-line", { y: 38, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 }, "-=0.35")
      .fromTo(".hero-copy", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.25")
      .fromTo(".globe-panel", { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9 }, "-=0.45");

    gsap.fromTo(
      "[data-animate]",
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.72,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: false,
        },
      },
    );
  }, [gsapReady]);

  return (
    <>
      <Script src="/vendor/gsap.min.js" strategy="afterInteractive" onLoad={() => setGsapReady(true)} />
      <Script src="/vendor/ScrollTrigger.min.js" strategy="afterInteractive" />
      <div className="globe-panel" aria-label="全球城市连接示意">
        <canvas ref={canvasRef} className="globe-canvas" aria-hidden="true" />
        <ul className="city-ledger" aria-label="连接城市">
          {cities.map((city) => (
            <li className="city-pin" key={city.name}>
              <span aria-hidden="true" />
              {city.name}
            </li>
          ))}
        </ul>
        <p className="globe-caption">
          <i aria-hidden="true" />
          Global pastoral network
        </p>
      </div>
    </>
  );
}
