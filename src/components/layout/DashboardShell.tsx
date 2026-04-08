import type { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface SidebarItem {
  label: string;
  path: string;
}

interface DashboardShellProps {
  role: "teacher" | "parent";
  children: ReactNode;
  title?: string;
  showBack?: boolean;
}

const teacherMenu: SidebarItem[] = [
  { label: "대시보드", path: "/teacher" },
  { label: "보호자 소통방", path: "/teacher/communication" },
  { label: "교사 소통방", path: "/teacher/notification" },
  { label: "사진 및 일상 기록", path: "/teacher/album" },
];

const parentMenu: SidebarItem[] = [
  { label: "소통방", path: "/parent/communication" },
  { label: "사진 및 일상 기록", path: "/parent/album" },
];

export default function DashboardShell({
  role,
  children,
  showBack = false,
}: DashboardShellProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const menu = role === "teacher" ? teacherMenu : parentMenu;
  const roleLabel = role === "teacher" ? "교사용" : "보호자용";

  return (
    <div className="flex min-h-screen bg-black justify-center items-start p-[50px]">
      <div className="flex w-full max-w-[1823px] bg-background rounded-[8px] min-h-[800px]">
        {/* Sidebar */}
        <aside className="w-[240px] shrink-0 bg-white rounded-l-[8px] p-[28px] flex flex-col gap-[16px]">
          <img
            src="/carevia-logo.svg"
            alt="CareVia"
            className="h-[24px] w-auto object-contain self-start"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Sidebar menu */}
          <div className="flex flex-col gap-[4px] mt-[8px]">
            <div className="text-[16px] text-white font-normal bg-brand rounded-[8px] px-[12px] py-[8px] mb-[4px]">
              {roleLabel}
            </div>
            {menu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`text-left text-[14px] font-bold px-[12px] py-[8px] rounded-[8px] transition-colors ${
                    isActive
                      ? "bg-brand text-white"
                      : "bg-[#f4f4f4] text-[#0b0b0b] hover:bg-[#e8e8e8]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-[20px] flex flex-col gap-[16px] overflow-hidden">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-[8px] text-[20px] font-bold text-black self-start"
            >
              <span className="w-[40px] h-[40px] bg-black rounded-[8px] flex items-center justify-center">
                <ChevronLeft className="w-[20px] h-[20px] text-white" />
              </span>
              뒤로 가기
            </button>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
