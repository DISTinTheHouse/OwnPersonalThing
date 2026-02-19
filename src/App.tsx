import Lightning from './components/Lightning';
import { Button } from '@/components/ui/button';
import { Disc3, Waves, Activity, Share2 } from 'lucide-react';
import { StaggeredMenu } from '@/components/StaggeredMenu';

function App() {
  const cards = [
    {
      title: 'Featured track',
      description: 'DIST 003 — OUT NOW. Designed for massive systems.',
      href: '#featured',
      Icon: Disc3,
      accent: 'from-emerald-500/20 to-emerald-500/10',
    },
    {
      title: 'Music',
      description: 'Explore releases by cover, name, and genre.',
      href: '#music',
      Icon: Waves,
      accent: 'from-blue-500/20 to-blue-500/10',
    },
    {
      title: 'Culture',
      description: 'Quotes and influences that shape DIST’s energy.',
      href: '#culture',
      Icon: Activity,
      accent: 'from-purple-500/20 to-purple-500/10',
    },
    {
      title: 'About & Contact',
      description: 'Short story and ways to connect with DIST.',
      href: '#about',
      Icon: Share2,
      accent: 'from-amber-500/20 to-amber-500/10',
    },
  ];

  return (
    <main className="w-full min-h-screen">
      <StaggeredMenu
        position="right"
        className="font-sans"
        items={[
          { label: 'Home', ariaLabel: 'Back to top', link: '/' },
          { label: 'Music', ariaLabel: 'Go to music grid', link: '#music' },
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
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
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

      <section id="featured" className="relative bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-bruno">
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
      </section>

      <section id="explore" className="relative bg-black text-white">
          <div className="max-w-6xl mx-auto px-4 py-24">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map(({ title, description, href, Icon, accent }) => (
              <a
                key={title}
                href={href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 p-8 min-h-[260px]"
              >
                <div className="pointer-events-none absolute inset-px rounded-[1.4rem] bg-gradient-to-b from-white/8 via-white/2 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col h-full">
                  <div className={`h-24 w-full rounded-2xl bg-gradient-to-br ${accent} mb-6`} />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-2xl bg-black/60 border border-white/10 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 flex-1">
                  {description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 group-hover:text-violet-100">
                    Open section
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 font-bruno">
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
      </section>
      <section id="music" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 font-bruno">
            Releases
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'DIST 003', genre: 'Royal Bass', url: 'https://open.spotify.com/track/1EwUrVcbZ3GUHVX3hTbsCp' },
              { name: 'DIST 002', genre: 'House', url: '#' },
              { name: 'DIST 001', genre: 'Dubstep', url: '#' },
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/[0.03] p-4 flex items-center gap-4"
              >
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 border border-white/10" />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{r.name}</h4>
                  <span className="text-xs text-gray-300">{r.genre}</span>
                </div>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                >
                  Listen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold font-bruno">
              About DIST
            </h3>
            <p className="text-gray-300">
              DIST creates music for big systems and late nights. From Miami energy to global bass pressure.
            </p>
            <p className="text-gray-400">
              The goal isn’t just streams — it’s presence: appearing on the same timelines as WorldStar, JUMPER, and the big bass channels.
            </p>
          </div>
          <div className="h-56 md:h-72 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-blue-500/10" />
        </div>
      </section>

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
                <h3 className="font-medium text-sm mb-4 font-bruno">Project</h3>
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
                <h3 className="font-medium text-sm mb-4 font-bruno">Music & content</h3>
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
                <h3 className="font-medium text-sm mb-4 font-bruno">DIST</h3>
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
