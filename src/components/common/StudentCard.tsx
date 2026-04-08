interface StudentCardProps {
  name: string;
  date: string;
  sleep: string;
  sleepLevel: "좋음" | "보통" | "나쁨";
  condition: string;
  conditionLevel: "좋음" | "보통" | "나쁨";
  meal: string;
  mealLevel: "좋음" | "보통" | "나쁨";
  bowel: string;
  bowelLevel: "좋음" | "보통" | "나쁨";
  note?: string;
  medication?: string;
  needsAttention?: boolean;
  onRecordClick?: () => void;
  onChatClick?: () => void;
  onNotificationClick?: () => void;
}

const levelColor = {
  "좋음": "text-brand",
  "보통": "text-text-primary",
  "나쁨": "text-red-500",
};

const avatarColors = [
  "#026eff", "#10b981", "#f59e0b", "#8b5cf6",
  "#ef4444", "#06b6d4", "#e879f9",
];

export default function StudentCard({
  name,
  date,
  sleep,
  sleepLevel,
  condition,
  conditionLevel,
  meal,
  mealLevel,
  bowel,
  bowelLevel,
  note,
  medication,
  needsAttention,
  onRecordClick,
  onChatClick,
  onNotificationClick,
}: StudentCardProps) {
  const colorIdx = name.charCodeAt(0) % avatarColors.length;
  const avatarColor = avatarColors[colorIdx];
  const initial = name.charAt(0);

  return (
    <div className="bg-white rounded-[8px] overflow-hidden flex flex-col">
      {/* Header */}
      <div
        className="px-[16px] py-[12px] flex items-center gap-[12px]"
        style={{ backgroundColor: avatarColor }}
      >
        <div className="w-[36px] h-[36px] rounded-full bg-white/30 flex items-center justify-center text-white text-[16px] font-bold">
          {initial}
        </div>
        <div className="flex flex-col">
          <span className="text-[20px] font-bold text-white">{name}</span>
          <span className="text-[12px] font-bold text-brand bg-white/20 px-[6px] py-[1px] rounded">
            {date}
          </span>
        </div>
        {needsAttention && (
          <span className="ml-auto bg-red-500 text-white text-[12px] font-bold px-[8px] py-[2px] rounded-full">
            관심 필요
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="px-[16px] py-[12px] flex flex-col gap-[6px]">
        <div className={`text-[16px] ${levelColor[sleepLevel]}`}>
          수면: {sleep}
        </div>
        <div className={`text-[16px] ${levelColor[conditionLevel]}`}>
          컨디션: {condition}
        </div>
        <div className={`text-[16px] ${levelColor[mealLevel]}`}>
          식사: {meal}
        </div>
        <div className={`text-[16px] ${levelColor[bowelLevel]}`}>
          배변: {bowel}
        </div>
      </div>

      {/* Note */}
      {note && (
        <div className="px-[16px] pb-[8px]">
          <div className="text-[16px] font-bold text-text-primary">
            특이사항
          </div>
          <p className="text-[14px] text-text-primary mt-[4px]">{note}</p>
        </div>
      )}

      {/* Medication */}
      {medication && (
        <div className="px-[16px] pb-[12px]">
          <div className="text-[16px] font-bold text-text-primary">약복용</div>
          <p className="text-[14px] text-text-primary mt-[4px]">{medication}</p>
        </div>
      )}

      {/* Action buttons */}
      <div className="mt-auto flex">
        <button
          onClick={onRecordClick}
          className="flex-1 bg-[#3b3b3b] text-white text-[16px] font-bold py-[10px] hover:bg-[#2a2a2a] transition-colors"
        >
          일상 기록
        </button>
        <button
          onClick={onChatClick}
          className="flex-1 bg-[#4a4a4a] text-white text-[16px] font-bold py-[10px] hover:bg-[#3a3a3a] transition-colors"
        >
          소통방
        </button>
        <button
          onClick={onNotificationClick}
          className="flex-1 bg-[#5a5a5a] text-white text-[16px] font-bold py-[10px] hover:bg-[#4a4a4a] transition-colors"
        >
          알림장 작성
        </button>
      </div>
    </div>
  );
}
