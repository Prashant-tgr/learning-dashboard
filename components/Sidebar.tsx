"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  Activity,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookOpen,
  },
  {
    id: "activity",
    label: "Activity",
    icon: Activity,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <motion.aside
        animate={{
          width: collapsed ? 80 : 256,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
        }}
        className="
          hidden
          md:flex
          flex-col
          min-h-screen
          bg-[#07060a]
          border-r
          border-zinc-900
          p-4
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <h1 className="text-xl font-bold text-purple-300 whitespace-nowrap">
              NexGen Learn
            </h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
              rounded-lg
              p-2
              hover:bg-zinc-900/50
              transition-colors
            "
          >
            {collapsed ? (
              <PanelLeftOpen
                size={18}
                className="text-zinc-300"
              />
            ) : (
              <PanelLeftClose
                size={18}
                className="text-zinc-300"
              />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="
                  relative
                  flex
                  items-center
                  gap-3
                  w-full
                  rounded-xl
                  px-3
                  py-3
                  overflow-hidden
                "
              >
                {active === item.id && (
                  <motion.div
                    layoutId="sidebar-active"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-purple-600/10
                      border
                      border-purple-500/20
                    "
                  />
                )}

                <Icon
                  size={20}
                  className={`
                    relative z-10
                    ${
                      active === item.id
                        ? "text-purple-300"
                        : "text-zinc-400"
                    }
                  `}
                />

                {!collapsed && (
                  <span
                    className={`
                      relative z-10
                      whitespace-nowrap
                      ${
                        active === item.id
                          ? "text-white"
                          : "text-zinc-300"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </motion.aside>

      {/* Mobile Bottom Navigation */}
      <nav
        className="
          md:hidden
          fixed
          bottom-4
          left-4
          right-4
          z-50
          rounded-2xl
          border
          border-zinc-800
          bg-[#07060a]/90
          backdrop-blur-xl
          p-2
        "
      >
        <ul className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    gap-1
                    px-3
                    py-2
                  "
                >
                  {active === item.id && (
                    <motion.div
                      layoutId="mobile-active"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="
                        absolute
                        -inset-1
                        rounded-xl
                        bg-purple-500/10
                      "
                    />
                  )}

                  <Icon
                    size={20}
                    className={`
                      relative z-10
                      ${
                        active === item.id
                          ? "text-purple-300"
                          : "text-zinc-400"
                      }
                    `}
                  />

                  <span
                    className="
                      relative z-10
                      text-[11px]
                      text-zinc-300
                    "
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}