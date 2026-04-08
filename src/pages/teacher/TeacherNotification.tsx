import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";
import { students } from "../../data/demoData";
import { Search, Send } from "lucide-react";

export default function TeacherNotification() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  return (
    <DashboardShell role="teacher" showBack>
      {/* Top bar */}
      <div className="bg-white rounded-[8px] flex items-center px-[16px] py-[18px]">
        <div className="bg-brand text-white text-[24px] font-bold px-[20px] py-[6px] rounded-full">
          알림장
        </div>
        <span className="ml-[12px] text-[24px] font-bold text-text-primary">
          {selectedStudent.name} - 알림장 작성
        </span>
      </div>

      <div className="bg-white rounded-[8px] flex flex-1 min-h-[600px] overflow-hidden">
        {/* Student list */}
        <div className="w-[195px] border-r border-border p-[12px] flex flex-col gap-[8px] overflow-y-auto">
          <div className="flex items-center gap-[8px] px-[8px] py-[6px] bg-[#f4f4f4] rounded-[8px]">
            <Search className="w-[14px] h-[14px] text-text-muted" />
            <input
              type="text"
              placeholder="검색"
              className="flex-1 text-[14px] outline-none bg-transparent"
            />
          </div>
          {students.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStudent(s)}
              className={`text-left px-[10px] py-[8px] rounded-[8px] text-[14px] font-bold transition-colors ${
                selectedStudent.id === s.id
                  ? "bg-brand text-white"
                  : "bg-[#f4f4f4] text-text-primary hover:bg-[#e8e8e8]"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Notification form */}
        <div className="flex-1 p-[24px] flex flex-col gap-[20px]">
          <h2 className="text-[20px] font-bold text-text-primary">
            {selectedStudent.name} 알림장
          </h2>

          {/* Form fields */}
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-bold text-text-primary">
                수면
              </label>
              <select className="border border-border rounded-[8px] px-[12px] py-[8px] text-[16px]">
                <option>충분</option>
                <option>보통</option>
                <option>부족</option>
              </select>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-bold text-text-primary">
                컨디션
              </label>
              <select className="border border-border rounded-[8px] px-[12px] py-[8px] text-[16px]">
                <option>좋음</option>
                <option>보통</option>
                <option>나쁨</option>
              </select>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-bold text-text-primary">
                식사
              </label>
              <select className="border border-border rounded-[8px] px-[12px] py-[8px] text-[16px]">
                <option>완식</option>
                <option>보통</option>
                <option>조금</option>
                <option>안먹음</option>
              </select>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[16px] font-bold text-text-primary">
                배변
              </label>
              <select className="border border-border rounded-[8px] px-[12px] py-[8px] text-[16px]">
                <option>정상</option>
                <option>무른편</option>
                <option>딱딱함</option>
                <option>없음</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-bold text-text-primary">
              특이사항
            </label>
            <textarea
              placeholder="특이사항을 입력하세요..."
              className="border border-border rounded-[8px] px-[12px] py-[8px] text-[16px] min-h-[120px] resize-none outline-none"
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-bold text-text-primary">
              약복용
            </label>
            <input
              type="text"
              placeholder="약복용 정보를 입력하세요..."
              className="border border-border rounded-[8px] px-[12px] py-[8px] text-[16px] outline-none"
            />
          </div>

          <button className="self-end flex items-center gap-[8px] bg-brand text-white text-[18px] font-bold px-[24px] py-[10px] rounded-[8px] hover:bg-blue-700 transition-colors">
            <Send className="w-[18px] h-[18px]" />
            전송
          </button>
        </div>
      </div>
    </DashboardShell>
  );
}
