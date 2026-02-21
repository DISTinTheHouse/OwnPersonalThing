import React, { useEffect, useRef, useState } from 'react';
import Lightning from './components/Lightning';
import { Button } from '@/components/ui/button';
import { StaggeredMenu } from '@/components/StaggeredMenu';

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className={className}>
      <div
        ref={ref}
        className={`transform transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {children}
      </div>
    </section>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTopClass = showBanner && !scrolled ? 'top-10' : 'top-0';

  return (
    <main className="w-full min-h-screen">
      <div
        className={`fixed inset-x-0 ${navTopClass} z-30 h-16 md:h-20 transition-colors duration-300 pointer-events-none ${
          scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'
        }`}
      />
      <StaggeredMenu
        position="right"
        className="font-sans"
        items={[
          { label: 'Home', ariaLabel: 'Back to top', link: '/' },
          { label: 'Music', ariaLabel: 'Go to featured track', link: '#featured' },
          { label: 'Culture', ariaLabel: 'Go to culture feed', link: '#culture' },
          { label: 'About', ariaLabel: 'About DIST', link: '#about' },
          { label: 'Contact', ariaLabel: 'Contact', link: '#contact' }
        ]}
        socialItems={[
          { label: 'Twitter', link: 'https://twitter.com' },
          { label: 'GitHub', link: 'https://github.com' },
          { label: 'LinkedIn', link: 'https://linkedin.com' }
        ]}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/vite.svg"
        accentColor="#5227FF"
        isFixed={true}
        fixedTopClassName={navTopClass}
      />
      {showBanner && (
        <div className="w-full bg-gradient-to-b from-orange-500 to-orange-600 text-white">
          <div className="max-w-6xl mx-auto relative px-4 py-2 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <p className="font-doto font-medium text-center">
                Hotest News | WorldStarHiphop + Jumper and more...
              </p>
              <a
                href="https://prebuiltui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 text-xs rounded-md text-orange-600 bg-white hover:bg-slate-200 transition active:scale-95"
              >
                Check it out
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.91797 7H11.0846"
                    stroke="#F54900"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 2.9165L11.0833 6.99984L7 11.0832"
                    stroke="#F54900"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <button
              type="button"
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/40 bg-black/10 hover:bg-black/25 transition-colors h-7 w-7 text-[11px] font-medium"
              aria-label="Close banner"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <section className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center pt-24">
        <div className="absolute inset-0 w-full h-full">
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Lightning
              hue={260}
              xOffset={0}
              speed={0.5}
              intensity={1}
              size={1}
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 font-bruno">
              DIST
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-doto">
              Miami energy. Global sound.
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Bass‑heavy house, royal trap energy, and dubstep pressure built for timelines and big systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-white text-black hover:bg-gray-200">
                Listen on Spotify
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg h-14 px-8 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                Follow the journey
              </Button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-black/80 to-black z-20" />

        {/* Navbar ahora se maneja con StaggeredMenu (overlay fijo) */}
      </section>

      <SectionWrapper id="featured" className="relative bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 py-28 md:py-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 font-bruno bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Featured track
          </h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/track/1EwUrVcbZ3GUHVX3hTbsCp?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Featured track"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="culture" className="py-28 md:py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-10 font-bruno bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            DIST culture
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { q: '“Energy never lies.” – Skrillex', s: 'DIST: That’s the mindset that shaped this track.' },
              { q: '“Bass is a feeling.”', s: 'DIST: Big systems first. Everything else follows.' },
              { q: '“No filler, just energy.”', s: 'DIST: Clips, reposts, heavy rotation.' },
            ].map((it, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.9)] transition-all"
              >
                <p className="text-lg font-medium leading-relaxed">{it.q}</p>
                <p className="text-sm text-gray-300 mt-3">{it.s}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="about" className="py-28 md:py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
              <img
                className="max-w-md w-full object-cover rounded-2xl"
                src="/mddvvm.jpg"
                alt="MDDVVM pyramid mark in the dark"
              />
              <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                <div className="flex -space-x-4 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                    alt="Listener avatar 1"
                    className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[1]"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                    alt="Listener avatar 2"
                    className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                    alt="Listener avatar 3"
                    className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
                  />
                  <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                    50+
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-800">Clips, reposts and late‑night listeners</p>
              </div>
            </div>
            <div className="text-sm text-slate-200 max-w-lg">
              <h3 className="text-xl uppercase font-semibold text-slate-100 font-bruno">About DIST</h3>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-[#DDD9FF]" />
              <p className="mt-8 text-slate-200">
                DIST is a bass‑driven project built for real systems: warehouse stacks, club rigs and the
                headphones that stay on until 4AM.
              </p>
              <p className="mt-4 text-slate-300">
                The sound lives where Miami energy, trap pressure and dubstep weight overlap — designed to sit
                on the same feeds as WorldStar, JUMPER and the internet’s loudest channels.
              </p>
              <p className="mt-4 text-slate-400">
                DIST is housed inside MDDVVM, a fictional imprint built to experiment with visuals, lore and
                rollout ideas before they hit the real world.
              </p>
              <a
                href="#contact"
                className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white text-xs sm:text-sm"
              >
                <span>Contact the project</span>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="bg-black pt-20 px-4">
        <footer
          id="contact"
          className="bg-[#131314] w-full max-w-[1350px] mx-auto text-white pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
            <div className="lg:col-span-3 space-y-6">
              <a href="/" className="block">
                <svg
                  width="157"
                  height="40"
                  viewBox="0 0 157 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <p className="text-sm/6 text-neutral-300 max-w-96 font-doto">
                MDDVVM is the experimental home of DIST — a fictional imprint where club anthems, internet folklore, and late‑night sound design all live in the same timeline.
              </p>
              <div className="flex gap-5 md:gap-6">
                <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300" aria-label="GitHub">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300" aria-label="YouTube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
              <div>
                <h3 className="font-medium text-sm mb-4 font-bruno bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                  Project
                </h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Concept deck
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Release roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Visual identity
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-sm mb-4 font-bruno bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                  Music & content
                </h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      MDDVVM sessions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Live recordings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Behind the scenes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Field notes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Merch drops
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h3 className="font-medium text-sm mb-4 font-bruno bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                  DIST
                </h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Vision
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a href="#" className="hover:text-neutral-400">
                      Collaborations
                    </a>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-violet-950 border border-violet-300 text-violet-300">
                      HIRING
                    </span>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Demo policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-700 flex justify-between items-center">
            <p className="text-neutral-400 text-sm font-doto">© 2025 MDDVVM / DIST — concept project.</p>
            <p className="text-sm text-neutral-400 font-doto">All rights reserved in our heads.</p>
          </div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-violet-500 rounded-full blur-[170px] pointer-events-none" />
            <h1 className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#4C1D95] mt-6 font-bruno">
              DIST
            </h1>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
