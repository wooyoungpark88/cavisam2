import { useNavigate } from "react-router-dom";
import DashboardShell from "../../components/layout/DashboardShell";
import StatsTabBar from "../../components/common/StatsTabBar";
import { students } from "../../data/demoData";

const levelColor = {
  "좋음": "text-brand",
  "보통": "text-text-primary",
  "나쁨": "text-red-500",
};

const avatarColors = [
  "#026eff", "#10b981", "#f59e0b", "#8b5cf6",
  "#ef4444", "#06b6d4", "#e879f9",
];

export default function TeacherWeeklyStats() {
  const navigate = useNavigate();

  return (
    <DashboardShell role="teacher" showBack>
      <StatsTabBar
        active="weekly"
        date="2026년 5월 13일 (수) ~ 2026년 5월 30일 (화)"
        showAttentionFilter={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px]">
        {students.map((student) => {
          const avg = student.weeklyAvg;
          if (!avg) return null;
          const colorIdx = student.name.charCodeAt(0) % avatarColors.length;
          const avatarColor = avatarColors[colorIdx];
          return (
            <div
              key={student.id}
              className="bg-white rounded-[8px] overflow-hidden flex flex-col"
            >
              <div
                className="px-[16px] py-[12px] flex items-center gap-[12px]"
                style={{ backgroundColor: avatarColor }}
              >
                <div className="w-[36px] h-[36px] rounded-full bg-white/30 flex items-center justify-center text-white text-[16px] font-bold">
                  {student.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] font-bold text-white">
                    {student.name}
                  </span>
                  <span className="text-[12px] font-bold text-brand bg-white/20 px-[6px] py-[1px] rounded">
                    주간 통계
                  </span>
                </div>
              </div>
              <div className="px-[16px] py-[12px] flex flex-col gap-[6px]">
                <div className={`text-[16px] ${levelColor[avg.sleepLevel]}`}>
                  평균 수면: {avg.sleep}
                </div>
                <div className={`text-[16px] ${levelColor[avg.conditionLevel]}`}>
                  평균 컨디션: {avg.condition}
                </div>
                <div className={`text-[16px] ${levelColor[avg.mealLevel]}`}>
                  평균 식사: {avg.meal}
                </div>
                <div className="text-[16px] text-text-primary">
                  출결 사항: {avg.attendance}
                </div>
              </div>
              <div className="mt-auto flex">
                <button
                  onClick={() => navigate("/teacher/record")}
                  className="flex-1 bg-[#3b3b3b] text-white text-[16px] font-bold py-[10px] hover:bg-[#2a2a2a] transition-colors"
                >
                  일상 기록
                </button>
                <button
                  onClick={() => navigate("/teacher/communication")}
                  className="flex-1 bg-[#4a4a4a] text-white text-[16px] font-bold py-[10px] hover:bg-[#3a3a3a] transition-colors"
                >
                  소통방
                </button>
                <button
                  onClick={() => navigate("/teacher/notification")}
                  className="flex-1 bg-[#5a5a5a] text-white text-[16px] font-bold py-[10px] hover:bg-[#4a4a4a] transition-colors"
                >
                  알림장 작성
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardShell>
  );
}
