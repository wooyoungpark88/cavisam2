import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardShell from "../../components/layout/DashboardShell";
import StatsTabBar from "../../components/common/StatsTabBar";
import StudentCard from "../../components/common/StudentCard";
import { students } from "../../data/demoData";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [filterAttention, setFilterAttention] = useState(false);

  const today = new Date();
  const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 (${["일", "월", "화", "수", "목", "금", "토"][today.getDay()]})`;

  const filtered = filterAttention
    ? students.filter((s) => s.needsAttention)
    : students;

  return (
    <DashboardShell role="teacher">
      <StatsTabBar
        active="daily"
        date={dateStr}
        onFilterAttention={() => setFilterAttention(!filterAttention)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px]">
        {filtered.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            date={student.date}
            sleep={student.sleep}
            sleepLevel={student.sleepLevel}
            condition={student.condition}
            conditionLevel={student.conditionLevel}
            meal={student.meal}
            mealLevel={student.mealLevel}
            bowel={student.bowel}
            bowelLevel={student.bowelLevel}
            note={student.note}
            medication={student.medication}
            needsAttention={student.needsAttention}
            onRecordClick={() => navigate("/teacher/record")}
            onChatClick={() => navigate("/teacher/communication")}
            onNotificationClick={() => navigate("/teacher/notification")}
          />
        ))}
      </div>
    </DashboardShell>
  );
}
