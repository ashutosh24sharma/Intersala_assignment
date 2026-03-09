import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { healthAPI } from "../api/apiClient";
import {
  HiOutlineTag,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineChatAlt2,
  HiOutlineStatusOnline,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

const modules = [
  {
    title: "Auto-Category & Tags",
    description:
      "AI-powered product categorization with SEO tags and sustainability filters.",
    icon: HiOutlineTag,
    path: "/categorize",
    gradient: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/25",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    active: true,
  },
  {
    title: "B2B Proposal Generator",
    description:
      "Generate complete B2B sustainability proposals with product mix and budgets.",
    icon: HiOutlineDocumentText,
    path: "/proposals",
    gradient: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/25",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    active: true,
  },
  {
    title: "Impact Reporting",
    description:
      "Environmental impact reports — plastic saved, carbon avoided, local sourcing.",
    icon: HiOutlineChartBar,
    path: "/impact",
    gradient: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/25",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    active: false,
  },
  {
    title: "WhatsApp Support Bot",
    description:
      "AI customer support via WhatsApp with order tracking and smart escalation.",
    icon: HiOutlineChatAlt2,
    path: "/whatsapp",
    gradient: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/25",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    active: false,
  },
];

const techStack = [
  { label: "Backend", tech: "Node.js + Express", icon: "⚡" },
  { label: "Database", tech: "MongoDB + Mongoose", icon: "🗄️" },
  { label: "AI Engine", tech: "OpenAI GPT-4o", icon: "🤖" },
  { label: "Frontend", tech: "React + Tailwind", icon: "⚛️" },
];

function Dashboard() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    healthAPI
      .check()
      .then(({ data }) => setHealth(data))
      .catch(() => setHealth({ status: "error" }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8 lg:space-y-10">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
            <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-br from-emerald-400 to-teal-500 p-3 sm:p-4 rounded-2xl shadow-lg">
                  <FaLeaf className="text-2xl sm:text-3xl lg:text-4xl text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Sustainable AI Platform
                </h1>
                <p className="text-slate-300 mt-2 text-sm sm:text-base lg:text-lg max-w-2xl">
                  AI-powered modules for sustainable business operations and environmental impact tracking
                </p>
              </div>
            </div>

            {/* Health Status */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-white/10">
              <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full ${
                health?.status === "healthy" 
                  ? "bg-emerald-500/20 border border-emerald-500/30" 
                  : health?.status === "error"
                  ? "bg-red-500/20 border border-red-500/30"
                  : "bg-slate-500/20 border border-slate-500/30"
              }`}>
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  {health?.status === "healthy" && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  )}
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                    health?.status === "healthy" 
                      ? "bg-emerald-400" 
                      : health?.status === "error"
                      ? "bg-red-400"
                      : "bg-slate-400"
                  }`}></span>
                </span>
                <HiOutlineStatusOnline
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    health?.status === "healthy"
                      ? "text-emerald-400"
                      : health?.status === "error"
                      ? "text-red-400"
                      : "text-slate-400"
                  }`}
                />
                <span className="text-xs sm:text-sm text-slate-300">
                  System:{" "}
                  <strong className={`${
                    health?.status === "healthy"
                      ? "text-emerald-400"
                      : health?.status === "error"
                      ? "text-red-400"
                      : "text-white"
                  }`}>
                    {health?.status ? health.status.charAt(0).toUpperCase() + health.status.slice(1) : "Checking..."}
                  </strong>
                </span>
              </div>
              {health?.environment && (
                <span className="text-xs sm:text-sm bg-slate-700/50 backdrop-blur-sm text-slate-300 px-3 py-1.5 rounded-full border border-slate-600/50">
                  🌍 {health.environment}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Module Cards */}
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">
              Platform Modules
            </h2>
            <span className="text-xs sm:text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              {modules.filter(m => m.active).length} of {modules.length} active
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {modules.map((mod) => (
              <Link
                key={mod.path}
                to={mod.path}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-transparent transition-all duration-300 hover:shadow-xl ${mod.shadowColor} hover:-translate-y-1`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} rounded-xl sm:rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                    <div
                      className={`relative bg-gradient-to-br ${mod.gradient} w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <mod.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors text-base sm:text-lg truncate">
                        {mod.title}
                      </h3>
                      {mod.active ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                          Planned
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {mod.description}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className={`flex items-center gap-1 mt-3 ${mod.textColor} text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1`}>
                      <span>Explore</span>
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Architecture Summary */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-slate-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-slate-100 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                  Technical Architecture
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Built with modern, scalable technologies
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                All systems operational
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {techStack.map(({ label, tech, icon }) => (
                <div 
                  key={label} 
                  className="group relative bg-gradient-to-br from-slate-50 to-slate-100/50 hover:from-white hover:to-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    {label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 leading-tight">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: "4", label: "Total Modules", color: "from-blue-500 to-indigo-600" },
            { value: "2", label: "Active Now", color: "from-emerald-500 to-teal-600" },
            { value: "AI", label: "Powered By", color: "from-violet-500 to-purple-600" },
            { value: "24/7", label: "Availability", color: "from-amber-500 to-orange-600" },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block`}>
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;