import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <div className="text-lg font-bold tracking-wide">BHARADWAJ</div>
            <div className="text-sm text-white/50 mt-1">AI/ML Engineer in the Making</div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/25211a6606-cmyk" target="_blank" rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ane-bharadwaj-b8ab29388/" target="_blank" rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:bharadwajane07@gmail.com"
              className="text-white/50 hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="tel:+919959435111"
              className="text-white/50 hover:text-white transition-colors" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 Bharadwaj. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
