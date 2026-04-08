import { useState } from "react";
import DashboardShell from "../../components/layout/DashboardShell";
import {
  chatMessages,
  suggestedMessages,
} from "../../data/demoData";
import { Search, Send } from "lucide-react";

export default function ParentCommunication() {
  const [input, setInput] = useState("");
  const [showCabiSaem, setShowCabiSaem] = useState(false);

  return (
    <DashboardShell role="parent" showBack>
      {/* Top bar */}
      <div className="bg-white rounded-[8px] flex items-center px-[16px] py-[18px]">
        <div className="bg-brand text-white text-[24px] font-bold px-[20px] py-[6px] rounded-full">
          소통방
        </div>
        <span className="ml-[12px] text-[24px] font-bold text-text-primary">
          홍길동 선생님과의 대화
        </span>
      </div>

      {/* Chat area */}
      <div className="bg-white rounded-[8px] flex flex-1 min-h-[600px] overflow-hidden">
        {/* Chat panel */}
        <div className="flex-1 flex flex-col">
          {/* Search */}
          <div className="flex items-center gap-[8px] px-[16px] py-[10px] border-b border-border">
            <Search className="w-[16px] h-[16px] text-text-muted" />
            <input
              type="text"
              placeholder="통합검색"
              className="flex-1 text-[16px] outline-none"
            />
          </div>

          {/* Chat header */}
          <div className="bg-black text-white px-[16px] py-[8px] text-[16px] font-bold">
            안녕하세요. 김준호 이용인 소통방입니다.
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-[16px] flex flex-col gap-[16px]">
            {chatMessages.map((msg) => (
              <div key={msg.id} className="flex flex-col gap-[4px]">
                <div className="flex items-start gap-[8px]">
                  <div className="flex-1">
                    <span
                      className={`text-[16px] ${
                        msg.senderRole === "ai"
                          ? "font-bold text-brand"
                          : "text-black"
                      }`}
                    >
                      {msg.sender}
                    </span>
                    <p
                      className={`text-[16px] mt-[2px] whitespace-pre-line ${
                        msg.senderRole === "ai"
                          ? "font-bold text-brand"
                          : "text-black"
                      }`}
                    >
                      {msg.message}
                    </p>
                    {msg.isEditable && (
                      <button className="mt-[4px] bg-brand text-white text-[14px] px-[12px] py-[4px] rounded-[4px]">
                        수정
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-[2px] shrink-0">
                    <span className="text-[12px] text-text-muted">
                      {msg.timestamp}
                    </span>
                    <span className="text-[16px] font-bold text-brand">1</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status bar */}
          <div className="px-[16px] py-[8px] border-t border-border flex items-center justify-between">
            <p className="text-[14px] text-text-muted">
              오른쪽 캐비쌤 버튼을 누루세요. 케비쌤과 대화가 가능합니다.
            </p>
            <button
              onClick={() => setShowCabiSaem(!showCabiSaem)}
              className="bg-brand text-white text-[16px] font-bold px-[16px] py-[6px] rounded-[8px]"
            >
              케비쌤
            </button>
          </div>

          {/* Suggested messages */}
          <div className="px-[16px] py-[8px] flex flex-wrap gap-[8px] border-t border-border">
            {suggestedMessages.map((msg, i) => (
              <button
                key={i}
                onClick={() => setInput(msg)}
                className="text-[16px] text-text-muted border border-border rounded-[8px] px-[12px] py-[6px] hover:bg-gray-50"
              >
                {msg}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-[8px] px-[16px] py-[12px] border-t border-border">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="flex-1 text-[16px] outline-none bg-[#f4f4f4] px-[12px] py-[8px] rounded-[8px]"
            />
            <button className="bg-brand text-white p-[8px] rounded-[8px]">
              <Send className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>

        {/* CabiSaem panel */}
        {showCabiSaem && (
          <div className="w-[300px] border-l border-border p-[16px] flex flex-col gap-[12px]">
            <h3 className="text-[18px] font-bold text-brand">케비쌤 AI</h3>
            <p className="text-[14px] text-text-secondary">
              케비쌤이 대화 내용을 분석하고 요약해 드립니다.
            </p>
            <div className="flex flex-col gap-[8px]">
              {suggestedMessages.map((msg, i) => (
                <button
                  key={i}
                  className="text-left text-[14px] text-text-muted bg-[#f4f4f4] rounded-[8px] px-[12px] py-[8px] hover:bg-[#e8e8e8]"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
