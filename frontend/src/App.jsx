import AudioPlayer from './components/AudioPlayer';
import StreakBadge from './components/StreakBadge';
import { Activity, Shield, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-curzy-neon/30">
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-curzy-neon/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="border-b border-white/5 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-curzy-neon rounded-xl flex items-center justify-center shadow-lg shadow-curzy-neon/20">
                <Activity className="text-black" size={24} />
              </div>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">
                C <span className="text-curzy-neon">Flow</span>
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
              <StreakBadge />
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Shield size={16} className="text-curzy-neon" /> 
                Secure Hub
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Cpu size={16} className="text-curzy-neon" />
                Backend: 3004
              </span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="pt-16 pb-12 text-center px-6">
          <div className="inline-block px-4 py-1.5 bg-curzy-neon/10 border border-curzy-neon/20 rounded-full mb-6">
            <span className="text-xs font-bold text-curzy-neon uppercase tracking-widest">Premium Audio Experience</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-curzy-neon to-emerald-400">Audio Hub.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed">
            A high-performance, security-first modular architecture for your local music collection. 
            Experience zero-latency playback with a professional glassmorphism interface.
          </p>
        </header>

        {/* Audio Player Section */}
        <main className="pb-24">
          <AudioPlayer />
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 bg-black/40 text-center">
          <p className="text-white/20 text-sm">
            &copy; 2026 C Flow Architecture. Built for Speed and Security.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
