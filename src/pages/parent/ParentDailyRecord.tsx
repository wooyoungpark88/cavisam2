import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";

interface RecordEntry {
  id: number;
  date: string;
  content: string;
  category: string;
}

const demoRecords: RecordEntry[] = [
  {
    id: 1,
    date: "2026-05-13",
    content:
      "오전 자유놀이 시간에 블록 놀이를 즐겼습니다. 친구들과 함께 높은 탑을 쌓으며 협동하는 모습을 보였습니다.",
    category: "활동",
  },
  {
    id: 2,
    date: "2026-05-13",
    content:
      "점심을 평소보다 조금 적게 먹었습니다. 반찬 중 시금치를 거부했지만, 다른 반찬은 잘 먹었습니다.",
    category: "식사",
  },
  {
    id: 3,
    date: "2026-05-13",
    content:
      "낮잠 시간에 30분 정도 잠을 잤습니다. 깨어난 후 기분이 좋아 보였습니다.",
    category: "수면",
  },
  {
    id: 4,
    date: "2026-05-12",
    content:
      "미술 활동에서 가족 그림을 그렸습니다. 색감이 밝고 표현력이 좋아지고 있습니다.",
    category: "활동",
  },
];

const categories = ["전체", "활동", "식사", "수면", "건강", "기타"];

export default function ParentDailyRecord() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filtered =
    selectedCategory === "전체"
      ? demoRecords
      : demoRecords.filter((r) => r.category === selectedCategory);

  return (
    <DashboardShell role="parent" showBack>
      {/* Top bar */}
      <div className="bg-white rounded-[8px] flex items-center px-[16px] py-[18px]">
        <div className="bg-brand text-white text-[24px] font-bold px-[20px] py-[6px] rounded-full">
          일상 기록
        </div>
        <span className="ml-[12px] text-[24px] font-bold text-text-primary">
          김준호
        </span>
      </div>

      {/* Category filter */}
      <div className="flex gap-[8px]">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={`px-[16px] py-[6px] rounded-full text-[14px] font-bold transition-colors ${
              selectedCategory === c
                ? "bg-brand text-white"
                : "bg-white text-text-primary border border-border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Records */}
      <div className="flex flex-col gap-[12px]">
        {filtered.map((record) => (
          <div
            key={record.id}
            className="bg-white rounded-[8px] p-[20px] flex flex-col gap-[8px]"
          >
            <div className="flex items-center gap-[8px]">
              <span className="bg-brand/10 text-brand text-[14px] font-bold px-[10px] py-[2px] rounded-full">
                {record.category}
              </span>
              <span className="text-[14px] text-text-muted">{record.date}</span>
            </div>
            <p className="text-[16px] text-text-primary">{record.content}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
