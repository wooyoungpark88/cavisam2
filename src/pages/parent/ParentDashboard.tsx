import DashboardShell from "../../components/layout/DashboardShell";
import { students } from "../../data/demoData";
import { useNavigate } from "react-router-dom";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const child = students[0]; // Demo: first student

  const levelColor = {
    "좋음": "text-brand",
    "보통": "text-text-primary",
    "나쁨": "text-red-500",
  };

  return (
    <DashboardShell role="parent">
      {/* Top bar */}
      <div className="bg-white rounded-[8px] flex items-center px-[16px] py-[18px]">
        <div className="bg-brand text-white text-[24px] font-bold px-[20px] py-[6px] rounded-full">
          보호자님 소통방
        </div>
        <span className="ml-[12px] text-[24px] font-bold text-text-primary">
          {child.name} - 오늘의 기록
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {/* Today's stats */}
        <div className="bg-white rounded-[8px] p-[24px] flex flex-col gap-[12px]">
          <h3 className="text-[20px] font-bold text-text-primary">
            오늘의 상태
          </h3>
          <div className="flex flex-col gap-[8px]">
            <div
              className={`text-[16px] ${levelColor[child.sleepLevel]}`}
            >
              수면: {child.sleep}
            </div>
            <div
              className={`text-[16px] ${levelColor[child.conditionLevel]}`}
            >
              컨디션: {child.condition}
            </div>
            <div
              className={`text-[16px] ${levelColor[child.mealLevel]}`}
            >
              식사: {child.meal}
            </div>
            <div
              className={`text-[16px] ${levelColor[child.bowelLevel]}`}
            >
              배변: {child.bowel}
            </div>
          </div>
          {child.note && (
            <div>
              <span className="text-[16px] font-bold">특이사항</span>
              <p className="text-[14px] text-text-primary mt-[4px]">
                {child.note}
              </p>
            </div>
          )}
          {child.medication && (
            <div>
              <span className="text-[16px] font-bold">약복용</span>
              <p className="text-[14px] text-text-primary mt-[4px]">
                {child.medication}
              </p>
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="flex flex-col gap-[16px]">
          <button
            onClick={() => navigate("/parent/communication")}
            className="bg-white rounded-[8px] p-[24px] text-left hover:shadow-md transition-shadow"
          >
            <h3 className="text-[20px] font-bold text-brand">선생님과 소통</h3>
            <p className="text-[14px] text-text-secondary mt-[4px]">
              담당 선생님과 메시지를 주고받으세요
            </p>
          </button>
          <button
            onClick={() => navigate("/parent/album")}
            className="bg-white rounded-[8px] p-[24px] text-left hover:shadow-md transition-shadow"
          >
            <h3 className="text-[20px] font-bold text-brand">사진 앨범</h3>
            <p className="text-[14px] text-text-secondary mt-[4px]">
              우리 아이의 활동 사진을 확인하세요
            </p>
          </button>
          <button
            onClick={() => navigate("/parent/record")}
            className="bg-white rounded-[8px] p-[24px] text-left hover:shadow-md transition-shadow"
          >
            <h3 className="text-[20px] font-bold text-brand">일상 기록</h3>
            <p className="text-[14px] text-text-secondary mt-[4px]">
              아이의 일상 기록을 확인하세요
            </p>
          </button>
        </div>
      </div>
    </DashboardShell>
  );
}
