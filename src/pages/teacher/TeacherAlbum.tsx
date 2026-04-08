import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";
import { Camera, Plus, Trash2, Calendar } from "lucide-react";

interface PhotoGroup {
  id: number;
  date: string;
  title: string;
  photos: string[];
}

const demoGroups: PhotoGroup[] = [
  {
    id: 1,
    date: "2026-05-13",
    title: "오전 자유놀이",
    photos: [
      "https://placehold.co/200x200/e8f0ff/026eff?text=1",
      "https://placehold.co/200x200/e8f0ff/026eff?text=2",
      "https://placehold.co/200x200/e8f0ff/026eff?text=3",
    ],
  },
  {
    id: 2,
    date: "2026-05-13",
    title: "점심 시간",
    photos: [
      "https://placehold.co/200x200/fff0e6/ea580c?text=4",
      "https://placehold.co/200x200/fff0e6/ea580c?text=5",
    ],
  },
  {
    id: 3,
    date: "2026-05-12",
    title: "체육 활동",
    photos: [
      "https://placehold.co/200x200/f0fdf4/10b981?text=6",
      "https://placehold.co/200x200/f0fdf4/10b981?text=7",
      "https://placehold.co/200x200/f0fdf4/10b981?text=8",
      "https://placehold.co/200x200/f0fdf4/10b981?text=9",
    ],
  },
];

export default function TeacherAlbum() {
  const [selectedDate, setSelectedDate] = useState("");

  const filtered = selectedDate
    ? demoGroups.filter((g) => g.date === selectedDate)
    : demoGroups;

  return (
    <DashboardShell role="teacher" showBack>
      {/* Top bar */}
      <div className="bg-white rounded-[8px] flex items-center justify-between px-[16px] py-[18px]">
        <div className="flex items-center gap-[12px]">
          <div className="bg-brand text-white text-[24px] font-bold px-[20px] py-[6px] rounded-full">
            사진 앨범
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="flex items-center gap-[6px] border border-border rounded-[6px] px-[12px] py-[6px]">
            <Calendar className="w-[16px] h-[16px] text-text-muted" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-[14px] outline-none"
            />
          </div>
          <button className="flex items-center gap-[6px] bg-brand text-white text-[16px] font-bold px-[16px] py-[8px] rounded-[8px] hover:bg-blue-700">
            <Plus className="w-[18px] h-[18px]" />
            앨범 등록
          </button>
        </div>
      </div>

      {/* Photo groups */}
      <div className="flex flex-col gap-[20px]">
        {filtered.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-[8px] p-[20px] flex flex-col gap-[12px]"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-bold text-text-primary">
                  {group.title}
                </h3>
                <span className="text-[14px] text-text-muted">
                  {group.date}
                </span>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-[18px] h-[18px]" />
              </button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-[8px]">
              {group.photos.map((photo, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[8px] overflow-hidden bg-[#f4f4f4]"
                >
                  <img
                    src={photo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <button className="aspect-square rounded-[8px] border-2 border-dashed border-border flex items-center justify-center hover:bg-[#f4f4f4]">
                <Camera className="w-[24px] h-[24px] text-text-muted" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
