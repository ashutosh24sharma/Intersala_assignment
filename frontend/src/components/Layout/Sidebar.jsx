import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineTag,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineChatAlt2,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

const navItems = [
  { to: "/", icon: HiOutlineHome, label: "Dashboard" },
  { to: "/categorize", icon: HiOutlineTag, label: "Auto-Category" },
  { to: "/proposals", icon: HiOutlineDocumentText, label: "B2B Proposals" },
  {
    to: "/impact",
    icon: HiOutlineChartBar,
    label: "Impact Reports",
    planned: true,
  },
  {
    to: "/whatsapp",
    icon: HiOutlineChatAlt2,
    label: "WhatsApp Bot",
    planned: true,
  },
];

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileOpen(false);

  const SidebarContent = ({ onNavClick }) => (
    <>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
        <div className="flex items-center">
          <FaLeaf className="text-primary-600 text-2xl mr-3" />
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">
              Sustainable AI
            </h1>
            <p className="text-xs text-gray-500">Platform v1.0</p>
          </div>
        </div>

        {/* Close button — mobile only */}
        <button
          onClick={closeMobile}
          className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
        >
          <HiOutlineX className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label, planned }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavClick}
            className={({ isActive }) =>
              `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-primary-50 text-primary-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
            <span>{label}</span>
            {planned && (
              <span className="ml-auto text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                Planned
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-primary-50 rounded-lg p-3">
          <p className="text-xs text-primary-700 font-medium">
            🌿 Building a greener future
          </p>
          <p className="text-xs text-primary-600 mt-1">
            AI-powered sustainability
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ── Mobile Top Bar ─────────────────────────── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 bg-white/95 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-2.5">
          <FaLeaf className="text-primary-600 text-xl" />
          <span className="text-sm font-bold text-gray-900">Sustainable AI</span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors active:scale-95"
          aria-label="Open navigation"
        >
          <HiOutlineMenu className="w-5 h-5" />
        </button>
      </div>

      {/* ── Mobile Overlay ─────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={closeMobile}
        />
      )}

      {/* ── Mobile Drawer ──────────────────────────── */}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-2xl flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarContent onNavClick={closeMobile} />
      </aside>

      {/* ── Desktop Sidebar (unchanged) ────────────── */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
        <SidebarContent onNavClick={() => {}} />
      </aside>

      {/* ── Mobile Top-bar Spacer ──────────────────── */}
      <div className="lg:hidden h-14" />
    </>
  );
}

export default Sidebar;