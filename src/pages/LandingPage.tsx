import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black justify-center items-center p-[50px]">
      <div className="w-full max-w-[1800px] bg-background rounded-[8px] flex flex-col items-center justify-center py-[80px] px-[40px] gap-[40px]">
        {/* Branding */}
        <div className="flex flex-col items-center gap-[12px]">
          <img
            src="/carevia-logo.svg"
            alt="CareVia"
            className="h-[44px] object-contain"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              el.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <span className="hidden text-[28px] font-bold text-brand">
            CareVia
          </span>
          <h1 className="text-[24px] font-bold text-[#3d3d3d]">
            "어제보다 나은 내일을 만드는, 케어비아"
          </h1>
          <p className="text-[20px] text-text-secondary">
            케어비아의 캐비챗과 함께 체계적인 변화를 경험하세요.
          </p>
        </div>

        {/* CTA button */}
        <button
          className="bg-brand text-white text-[24px] font-bold px-[40px] py-[12px] rounded-full hover:bg-blue-700 transition-colors"
          onClick={() => {}}
        >
          케비쌤 서비스
        </button>

        {/* Cards */}
        <div className="flex gap-[40px]">
          {/* Teacher Card */}
          <div className="w-[300px] h-[300px] bg-white rounded-[8px] flex flex-col items-center justify-center gap-[16px] p-[24px]">
            <div className="w-[64px] h-[64px] bg-blue-50 rounded-full flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#026eff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-[24px] font-bold text-brand">교사용</span>
            <span className="text-[16px] text-text-primary">
              교사용 대시보드
            </span>
            <button
              onClick={() => navigate("/teacher")}
              className="flex items-center gap-[8px] bg-[#3b3b3b] text-white text-[20px] font-medium px-[24px] py-[10px] rounded-[8px] hover:bg-[#2a2a2a] transition-colors"
            >
              바로가기
              <ChevronRight className="w-[16px] h-[16px]" />
            </button>
          </div>

          {/* Parent Card */}
          <div className="w-[300px] h-[300px] bg-white rounded-[8px] flex flex-col items-center justify-center gap-[16px] p-[24px]">
            <div className="w-[64px] h-[64px] bg-blue-50 rounded-full flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#026eff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span className="text-[24px] font-bold text-brand">보호자용</span>
            <span className="text-[16px] text-text-primary">보호자 소통방</span>
            <button
              onClick={() => navigate("/parent")}
              className="flex items-center gap-[8px] bg-[#3b3b3b] text-white text-[20px] font-medium px-[24px] py-[10px] rounded-[8px] hover:bg-[#2a2a2a] transition-colors"
            >
              바로가기
              <ChevronRight className="w-[16px] h-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
