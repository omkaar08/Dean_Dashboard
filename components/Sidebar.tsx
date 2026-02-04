"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  FileText,
  ScrollText,
  Wrench,
  Users,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const BRAND_BLUE = "#026892";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  children?: { id: string; label: string }[];
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Executive Dashboard", icon: LayoutDashboard, active: true },
  { id: "departments", label: "Departments", icon: Building2 },
  { id: "grade-submissions", label: "Grade Submissions", icon: FileText },
  { id: "transcripts", label: "Transcripts", icon: ScrollText },
  { id: "service-requests", label: "Service Requests", icon: Wrench },
  { id: "students-performance", label: "Students Performance", icon: Users },
  { id: "reports", label: "Reports", icon: BarChart3 },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ isOpen, onToggle, activeTab, setActiveTab }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Navigation */}
        <nav className="p-3 space-y-1 mt-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            const isExpanded = expandedItems.includes(item.id);
            const hasChildren = item.children?.length;

            return (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (hasChildren) {
                      toggleExpanded(item.id);
                    } else {
                      setActiveTab(item.id);
                      if (isOpen) onToggle();
                    }
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#EAF7F1] text-[#026892]"
                      : "text-gray-600 hover:bg-blue-50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {hasChildren &&
                    (isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    ))}
                </button>

                {/* Sub-items */}
                {hasChildren && isExpanded && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.children!.map((child) => (
                      <button
                        key={child.id}
                        className="w-full text-left px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-blue-50 hover:text-[#026892] transition-colors"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={onToggle}
        className="fixed top-20 left-4 z-30 p-2 bg-white rounded-lg shadow border border-gray-200 lg:hidden"
      >
        <Menu className="w-5 h-5 text-gray-900" />
      </button>
    </>
  );
};

export default Sidebar;