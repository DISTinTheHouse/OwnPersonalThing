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
      <footer id="contact" className="py-16 bg-black text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg font-semibold">⚡ DIST</div>
          <div className="flex gap-4 text-sm">
            <a className="opacity-90 hover:opacity-100" href="https://open.spotify.com" target="_blank" rel="noreferrer">Spotify</a>
            <a className="opacity-90 hover:opacity-100" href="#" target="_blank" rel="noreferrer">Instagram</a>
            <span className="opacity-60">TikTok (coming soon)</span>
            <a className="opacity-90 hover:opacity-100" href="mailto:contact@dist.audio">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
