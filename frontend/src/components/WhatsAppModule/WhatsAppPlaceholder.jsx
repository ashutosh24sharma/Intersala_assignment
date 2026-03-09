import { HiOutlineChatAlt2, HiOutlineSparkles, HiOutlineLightBulb, HiOutlineCode, HiOutlineArrowRight, HiOutlineBell } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppPlaceholder() {
  const features = [
    {
      text: "Order status queries from real database",
      icon: "📦",
      status: "planned",
    },
    {
      text: "Return policy automated responses",
      icon: "🔄",
      status: "planned",
    },
    {
      text: "Auto-escalation for refunds & high-priority issues",
      icon: "🚨",
      status: "planned",
    },
    {
      text: "Full conversation logging & audit trail",
      icon: "📝",
      status: "planned",
    },
    {
      text: "Multi-language support with auto-detection",
      icon: "🌍",
      status: "future",
    },
    {
      text: "Product recommendations via catalog AI",
      icon: "🤖",
      status: "future",
    },
  ];

  const intents = [
    { intent: "order_status", handler: "DB Lookup", color: "from-blue-500 to-indigo-500", icon: "🔍" },
    { intent: "return_policy", handler: "Static Text", color: "from-emerald-500 to-teal-500", icon: "📋" },
    { intent: "refund_request", handler: "→ Escalate", color: "from-red-500 to-rose-500", icon: "⚡" },
    { intent: "product_inquiry", handler: "AI + Catalog", color: "from-violet-500 to-purple-500", icon: "🛍️" },
    { intent: "general_question", handler: "AI Response", color: "from-amber-500 to-orange-500", icon: "💬" },
    { intent: "high_priority", handler: "→ Escalate", color: "from-red-500 to-rose-500", icon: "🔔" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8">

        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-700 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-white/30">
                  <FaWhatsapp className="text-2xl sm:text-3xl lg:text-4xl text-white" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                    <HiOutlineSparkles className="w-3.5 h-3.5" />
                    Module 4
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-400/30 text-amber-100 border border-amber-400/40">
                    <span className="w-1.5 h-1.5 bg-amber-300 rounded-full"></span>
                    Coming Soon
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  WhatsApp Support Bot
                </h1>
                <p className="text-purple-100 mt-2 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                  AI-powered customer support via WhatsApp with order tracking, smart responses, and intelligent escalation
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
                This module is currently in the planning phase. The WhatsApp integration will use the{" "}
                <span className="font-medium text-amber-800">WhatsApp Business API</span> with{" "}
                <span className="font-medium text-amber-800">AI-powered intent classification</span> for automated support.
              </p>
            </div>
          </div>
        </div>

        {/* Planned Features */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-100/50 to-transparent rounded-full"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-lg shadow-purple-500/25">
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
                  className="group flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200/80 hover:border-purple-200 hover:from-purple-50/50 hover:to-violet-50/30 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-purple-100 group-hover:to-violet-100 flex items-center justify-center text-lg transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-700 group-hover:text-purple-700 transition-colors leading-relaxed">
                      {feature.text}
                    </p>
                    <span className={`inline-flex items-center gap-1 mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                      feature.status === "planned"
                        ? "bg-purple-100 text-purple-700 border border-purple-200"
                        : "bg-slate-100 text-slate-500 border border-slate-200"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        feature.status === "planned" ? "bg-purple-500" : "bg-slate-400"
                      }`}></span>
                      {feature.status === "planned" ? "Planned" : "Future"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intent Classification */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-violet-100/50 to-transparent rounded-full"></div>

          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg">
                  <HiOutlineChatAlt2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-800">Intent Classification</h2>
                  <p className="text-xs sm:text-sm text-slate-500">AI-powered message routing</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <HiOutlineSparkles className="w-4 h-4 text-violet-500" />
                <span>6 intent categories</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {intents.map(({ intent, handler, color, icon }, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-r from-slate-50 to-white rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-sm">{icon}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-mono font-medium text-slate-600 truncate">
                          {intent}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <HiOutlineArrowRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className={`text-sm font-medium ${
                        handler.includes("Escalate") 
                          ? "text-red-600" 
                          : handler.includes("AI")
                          ? "text-violet-600"
                          : "text-slate-600"
                      }`}>
                        {handler}
                      </span>
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
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <HiOutlineCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Planned API Endpoint</h3>
                <p className="text-xs text-slate-400">Webhook integration for WhatsApp Business API</p>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono tracking-wider flex-shrink-0">
                  POST
                </span>
                <code className="text-sm sm:text-base text-slate-300 font-mono break-all">
                  /api/v1/whatsapp/webhook
                </code>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Auth", value: "Webhook Verify", icon: "🔐" },
                  { label: "Format", value: "JSON Payload", icon: "📄" },
                  { label: "Response", value: "200 OK", icon: "✅" },
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

        {/* Footer Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: "AI", label: "Powered", color: "from-violet-500 to-purple-600" },
            { value: "6", label: "Intents", color: "from-purple-500 to-fuchsia-600" },
            { value: "24/7", label: "Support", color: "from-emerald-500 to-teal-600" },
            { value: "WA", label: "Platform", color: "from-green-500 to-emerald-600" },
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

        {/* Timeline / Roadmap Preview */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>

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
                { phase: "Phase 1", title: "Intent Classification Engine", status: "In Progress", color: "from-purple-500 to-violet-600", statusColor: "bg-purple-100 text-purple-700 border-purple-200" },
                { phase: "Phase 2", title: "WhatsApp Business API Integration", status: "Planned", color: "from-blue-500 to-indigo-600", statusColor: "bg-blue-100 text-blue-700 border-blue-200" },
                { phase: "Phase 3", title: "Order DB Lookup & Tracking", status: "Planned", color: "from-emerald-500 to-teal-600", statusColor: "bg-slate-100 text-slate-600 border-slate-200" },
                { phase: "Phase 4", title: "Escalation & Human Handoff", status: "Future", color: "from-amber-500 to-orange-600", statusColor: "bg-slate-100 text-slate-500 border-slate-200" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-sm ring-4 ring-white group-hover:scale-125 transition-transform`}></div>
                    {idx < 3 && <div className="w-0.5 h-12 bg-slate-200 mt-1"></div>}
                  </div>

                  {/* Content */}
                  <div className="pb-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className={`text-xs font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                        {item.phase}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${item.statusColor} w-fit`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          item.status === "In Progress" ? "bg-purple-500 animate-pulse" : 
                          item.status === "Planned" ? "bg-blue-400" : "bg-slate-400"
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
      </div>
    </div>
  );
}

export default WhatsAppPlaceholder;