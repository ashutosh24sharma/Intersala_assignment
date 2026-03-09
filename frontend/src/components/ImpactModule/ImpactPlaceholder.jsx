import {
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineArrowRight,
  HiOutlineBell,
  HiOutlineGlobe,
} from "react-icons/hi";
import { FaLeaf, FaRecycle } from "react-icons/fa";

function ImpactPlaceholder() {
  const features = [
    {
      text: "Estimated plastic saved (kg) with bottle equivalents",
      icon: "🧴",
      status: "planned",
    },
    {
      text: "Carbon avoided (kg CO₂) with tree-equivalent comparisons",
      icon: "🌳",
      status: "planned",
    },
    {
      text: "Local sourcing impact summary",
      icon: "📍",
      status: "planned",
    },
    {
      text: "Human-readable AI-generated impact statement per order",
      icon: "📝",
      status: "planned",
    },
    {
      text: "Visual charts and infographics for reports",
      icon: "📊",
      status: "future",
    },
    {
      text: "Exportable PDF impact certificates",
      icon: "📄",
      status: "future",
    },
  ];

  const metrics = [
    { metric: "plastic_saved_kg", unit: "Kilograms", color: "from-blue-500 to-cyan-500", icon: "🧴", description: "Plastic waste prevented" },
    { metric: "carbon_avoided_kg", unit: "kg CO₂", color: "from-emerald-500 to-green-500", icon: "🌿", description: "Carbon emissions avoided" },
    { metric: "bottles_equivalent", unit: "Count", color: "from-amber-500 to-orange-500", icon: "🍶", description: "Plastic bottles saved" },
    { metric: "trees_equivalent", unit: "Count", color: "from-green-500 to-teal-500", icon: "🌳", description: "Tree absorption equivalent" },
    { metric: "local_sourcing_%", unit: "Percentage", color: "from-violet-500 to-purple-500", icon: "📍", description: "Locally sourced materials" },
    { metric: "water_saved_liters", unit: "Liters", color: "from-cyan-500 to-blue-500", icon: "💧", description: "Water consumption reduced" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8">

        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-white/30">
                  <HiOutlineChartBar className="text-2xl sm:text-3xl lg:text-4xl text-white" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                    <HiOutlineSparkles className="w-3.5 h-3.5" />
                    Module 3
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-300/30 text-amber-100 border border-amber-300/40">
                    <span className="w-1.5 h-1.5 bg-amber-200 rounded-full"></span>
                    Coming Soon
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Impact Reporting
                </h1>
                <p className="text-amber-100 mt-2 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                  Environmental impact reports per order — plastic saved, carbon avoided, and local sourcing metrics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-amber-200/60 shadow-sm">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
                <HiOutlineBell className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 text-base sm:text-lg flex items-center gap-2">
                <HiOutlineBell className="w-5 h-5 sm:hidden text-amber-600" />
                Under Development
              </h3>
              <p className="text-sm sm:text-base text-amber-700/90 mt-1 leading-relaxed">
                This module is in the planning phase. It will calculate{" "}
                <span className="font-medium text-amber-800">environmental impact metrics</span> using{" "}
                <span className="font-medium text-amber-800">AI-powered analysis</span> for every order placed through the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Preview Impact Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: "0.0", label: "Plastic Saved (kg)", icon: "🧴", color: "from-blue-500 to-cyan-600" },
            { value: "0.0", label: "CO₂ Avoided (kg)", icon: "🌿", color: "from-emerald-500 to-green-600" },
            { value: "0", label: "Bottles Saved", icon: "🍶", color: "from-amber-500 to-orange-600" },
            { value: "0", label: "Trees Equivalent", icon: "🌳", color: "from-green-500 to-teal-600" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              {/* Placeholder shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block`}>
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>

              {/* Awaiting data indicator */}
              <div className="absolute top-2 right-2">
                <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 text-slate-400 border border-slate-200">
                  —
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Planned Features */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
                <HiOutlineLightBulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-800">Planned Features</h2>
                <p className="text-xs sm:text-sm text-slate-500">What's coming in this module</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200/80 hover:border-amber-200 hover:from-amber-50/50 hover:to-orange-50/30 transition-all duration-300 hover:shadow-md hover:shadow-amber-500/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-amber-100 group-hover:to-orange-100 flex items-center justify-center text-lg transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-700 group-hover:text-amber-700 transition-colors leading-relaxed">
                      {feature.text}
                    </p>
                    <span className={`inline-flex items-center gap-1 mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                      feature.status === "planned"
                        ? "bg-amber-100 text-amber-700 border border-amber-200"
                        : "bg-slate-100 text-slate-500 border border-slate-200"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        feature.status === "planned" ? "bg-amber-500" : "bg-slate-400"
                      }`}></span>
                      {feature.status === "planned" ? "Planned" : "Future"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Metrics Schema */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-amber-100/50 to-transparent rounded-full"></div>

          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg">
                  <HiOutlineGlobe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-800">Impact Metrics</h2>
                  <p className="text-xs sm:text-sm text-slate-500">Tracked environmental data points</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <HiOutlineSparkles className="w-4 h-4 text-amber-500" />
                <span>6 metric categories</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {metrics.map(({ metric, unit, color, icon, description }, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-r from-slate-50 to-white rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-sm">{icon}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-mono font-medium text-slate-600 truncate">
                          {metric}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 mb-2">{description}</p>

                    <div className="flex items-center gap-2">
                      <HiOutlineArrowRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-600">{unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* API Endpoint Preview */}
        <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <HiOutlineCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Planned API Endpoint</h3>
                <p className="text-xs text-slate-400">Generate environmental impact reports</p>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono tracking-wider flex-shrink-0">
                  POST
                </span>
                <code className="text-sm sm:text-base text-slate-300 font-mono break-all">
                  /api/v1/impact/generate
                </code>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Input", value: "Order Data", icon: "📦" },
                  { label: "Output", value: "Impact Report", icon: "📊" },
                  { label: "Format", value: "JSON + Text", icon: "📄" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-lg p-2.5">
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-xs font-medium text-slate-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Roadmap */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-800">Development Roadmap</h2>
                <p className="text-xs sm:text-sm text-slate-500">Expected timeline for this module</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { phase: "Phase 1", title: "Impact Calculation Engine", status: "In Progress", color: "from-amber-500 to-orange-600", statusColor: "bg-amber-100 text-amber-700 border-amber-200" },
                { phase: "Phase 2", title: "Per-Order Impact Analysis", status: "Planned", color: "from-emerald-500 to-green-600", statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                { phase: "Phase 3", title: "Visual Reports & Charts", status: "Planned", color: "from-blue-500 to-indigo-600", statusColor: "bg-slate-100 text-slate-600 border-slate-200" },
                { phase: "Phase 4", title: "PDF Export & Certificates", status: "Future", color: "from-violet-500 to-purple-600", statusColor: "bg-slate-100 text-slate-500 border-slate-200" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-sm ring-4 ring-white group-hover:scale-125 transition-transform`}></div>
                    {idx < 3 && <div className="w-0.5 h-12 bg-slate-200 mt-1"></div>}
                  </div>

                  <div className="pb-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className={`text-xs font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                        {item.phase}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${item.statusColor} w-fit`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          item.status === "In Progress" ? "bg-amber-500 animate-pulse" :
                          item.status === "Planned" ? "bg-emerald-400" : "bg-slate-400"
                        }`}></span>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-700 mt-1 group-hover:text-slate-900 transition-colors">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: "6", label: "Metrics", color: "from-amber-500 to-orange-600" },
            { value: "AI", label: "Powered", color: "from-emerald-500 to-teal-600" },
            { value: "CO₂", label: "Tracking", color: "from-green-500 to-emerald-600" },
            { value: "PDF", label: "Export", color: "from-blue-500 to-indigo-600" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:shadow-md transition-all duration-300 text-center group"
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

export default ImpactPlaceholder;