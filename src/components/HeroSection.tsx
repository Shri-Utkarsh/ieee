import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const carouselRef = useRef(null);

  const imageSources = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    let startTime = null;
    const speed = 0.04; // smooth scrolling speed

    const scrollCarousel = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const scrollWidth = carousel.scrollWidth / 2;

      carousel.scrollLeft = (elapsedTime * speed) % scrollWidth;
      animationFrameId = requestAnimationFrame(scrollCarousel);
    };

    animationFrameId = requestAnimationFrame(scrollCarousel);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative text-white py-28 overflow-hidden select-none">
      {/* === BACKGROUND CAROUSEL === */}
      <div
        ref={carouselRef}
        className="absolute inset-0 flex overflow-x-hidden opacity-80"
        aria-hidden="true"
      >
        <div className="flex min-w-full w-fit whitespace-nowrap">
          {[...imageSources, ...imageSources].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="min-w-full h-full object-cover flex-shrink-0 transition-transform duration-[3000ms] ease-linear hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* === LIGHT GRADIENT OVERLAY (for readability) === */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-900/20 to-blue-950/60"></div>

      {/* === CONTENT === */}
      <div className="relative z-10 text-center px-6">
        <div className="max-w-4xl mx-auto backdrop-blur-[1px] bg-blue-950/10 p-8 rounded-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] animate-fade-in">
            IEEE Student Branch
            <span className="block text-3xl md:text-4xl font-semibold text-blue-200 mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              SAGE University Indore
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-blue-50 font-light leading-relaxed animate-fade-in max-w-3xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Advancing technology for humanity through innovation, education, and
            professional development. Join a global community of visionary
            engineers and technologists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-blue-400 text-blue-950 font-semibold text-base px-8 py-6 hover:bg-blue-300 transition-all duration-300 hover:scale-[1.04] shadow-md"
            >
              <Link to="/about">Discover Our Mission</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-200 font-semibold text-base px-8 py-6 hover:bg-blue-400 hover:text-blue-950 transition-all duration-300 hover:scale-[1.04] shadow-md"
            >
              <Link to="/events">Explore Events</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* === BOTTOM GRADIENT FADE === */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
    </section>
  );
}
