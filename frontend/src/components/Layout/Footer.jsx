import { FaLeaf, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import {
  HiOutlineCode,
  HiOutlineGlobe,
  HiOutlineMail,
} from "react-icons/hi";

function Footer() {
  const currentYear = new Date().getFullYear();

  const techStack = [
    { name: "React", color: "text-cyan-400" },
    { name: "Node.js", color: "text-emerald-400" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "OpenAI", color: "text-violet-400" },
  ];

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Categories", href: "/categorize" },
    { label: "Proposals", href: "/proposals" },
    { label: "Impact", href: "/impact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/80">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl blur-md opacity-40"></div>
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <FaLeaf className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Sustainable AI</h3>
                  <p className="text-xs text-slate-500">Platform</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                AI-powered modules for sustainable business operations and environmental impact tracking.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-5">
                {[
                  { icon: FaGithub, label: "GitHub", href: "#" },
                  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
                  { icon: HiOutlineMail, label: "Email", href: "#" },
                  { icon: HiOutlineGlobe, label: "Website", href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="group w-9 h-9 rounded-lg bg-slate-100 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5"
                  >
                    <social.icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                Modules
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-emerald-500 group-hover:w-1.5 group-hover:h-1.5 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                Tech Stack
              </h4>
              <ul className="space-y-2.5">
                {techStack.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${tech.color.replace("text-", "bg-")}`}></span>
                    <span className="text-sm text-slate-500">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status */}
            <div>
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                Platform Status
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-lg border border-emerald-200/60">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium text-emerald-700">All systems operational</span>
                </div>

                <div className="px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-500">Active Modules</span>
                    <span className="text-xs font-semibold text-slate-700">2 / 4</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
                  <HiOutlineCode className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-500">v1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/80 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-sm text-slate-500">
              <span>&copy; {currentYear}</span>
              <span className="font-medium text-slate-700">Sustainable AI Platform</span>
              <span className="hidden sm:inline">—</span>
              <span className="flex items-center gap-1">
                Built with
                <FaHeart className="w-3 h-3 text-red-400 animate-pulse" />
                &
                <FaLeaf className="w-3 h-3 text-emerald-500" />
              </span>
            </div>

            {/* Eco Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200/60">
                <span className="text-xs">🌍</span>
                <span className="text-xs font-medium text-emerald-700">Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/60">
                <span className="text-xs">⚡</span>
                <span className="text-xs font-medium text-blue-700">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;