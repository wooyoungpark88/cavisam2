import { useNavigate } from "react-router-dom";

interface StatsTabBarProps {
  active: "daily" | "weekly" | "monthly";
  date: string;
  onFilterAttention?: () => void;
  showAttentionFilter?: boolean;
}

const tabs = [
  { key: "daily" as const, label: "1일", path: "/teacher" },
  { key: "weekly" as const, label: "주간", path: "/teacher/weekly" },
  { key: "monthly" as const, label: "월간", path: "/teacher/monthly" },
];

export default function StatsTabBar({
  active,
  date,
  onFilterAttention,
  showAttentionFilter = true,
}: StatsTabBarProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[8px] flex items-center gap-[12px] px-[16px] py-[18px]">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => navigate(tab.path)}
          className={`px-[20px] py-[6px] rounded-full text-[24px] font-bold transition-colors ${
            active === tab.key
              ? "bg-brand text-white"
              : "bg-white text-text-primary border border-border"
          }`}
        >
          {tab.label}
        </button>
      ))}
      <span className="text-[24px] font-bold text-text-primary ml-[12px]">
        {date}
      </span>
      {showAttentionFilter && (
        <button
          onClick={onFilterAttention}
          className="ml-auto flex items-center gap-[4px] text-[18px] font-medium text-black"
        >
          관심 필요
          <svg
            width="62"
            height="28"
            viewBox="0 0 62 28"
            fill="none"
            className="ml-[4px]"
          >
            <rect width="62" height="28" rx="14" fill="#0075fa" />
            <path
              d="M20 10l11 4-11 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
