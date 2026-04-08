export interface Student {
  id: number;
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
  weeklyAvg?: {
    sleep: string;
    sleepLevel: "좋음" | "보통" | "나쁨";
    condition: string;
    conditionLevel: "좋음" | "보통" | "나쁨";
    meal: string;
    mealLevel: "좋음" | "보통" | "나쁨";
    attendance: string;
  };
  monthlyAvg?: {
    sleep: string;
    sleepLevel: "좋음" | "보통" | "나쁨";
    condition: string;
    conditionLevel: "좋음" | "보통" | "나쁨";
    meal: string;
    mealLevel: "좋음" | "보통" | "나쁨";
    attendance: string;
  };
}

export const students: Student[] = [
  {
    id: 1,
    name: "김준호",
    date: "2026-05-13",
    sleep: "좋음",
    sleepLevel: "좋음",
    condition: "좋음",
    conditionLevel: "좋음",
    meal: "보통",
    mealLevel: "보통",
    bowel: "없음",
    bowelLevel: "보통",
    note: "어젯밤에 잠을 설친 탓인지 낮잠 시간에 오래 잤고, 종일 칭얼거렸습니다.",
    medication: "유산균 (아침 등원 후)",
    needsAttention: false,
    weeklyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "보통",
      conditionLevel: "보통",
      meal: "보통",
      mealLevel: "보통",
      attendance: "4/5",
    },
    monthlyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "나쁨",
      conditionLevel: "나쁨",
      meal: "보통",
      mealLevel: "보통",
      attendance: "24/25",
    },
  },
  {
    id: 2,
    name: "이서연",
    date: "2026-05-13",
    sleep: "보통",
    sleepLevel: "보통",
    condition: "보통",
    conditionLevel: "보통",
    meal: "좋음",
    mealLevel: "좋음",
    bowel: "정상",
    bowelLevel: "좋음",
    needsAttention: false,
    weeklyAvg: {
      sleep: "보통",
      sleepLevel: "보통",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "좋음",
      mealLevel: "좋음",
      attendance: "5/5",
    },
    monthlyAvg: {
      sleep: "보통",
      sleepLevel: "보통",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "좋음",
      mealLevel: "좋음",
      attendance: "25/25",
    },
  },
  {
    id: 3,
    name: "박민수",
    date: "2026-05-13",
    sleep: "나쁨",
    sleepLevel: "나쁨",
    condition: "나쁨",
    conditionLevel: "나쁨",
    meal: "조금",
    mealLevel: "나쁨",
    bowel: "무른편",
    bowelLevel: "나쁨",
    note: "아침부터 컨디션이 안 좋아 보입니다. 열은 없으나 기운이 없어 보여요.",
    needsAttention: true,
    weeklyAvg: {
      sleep: "나쁨",
      sleepLevel: "나쁨",
      condition: "나쁨",
      conditionLevel: "나쁨",
      meal: "보통",
      mealLevel: "보통",
      attendance: "3/5",
    },
    monthlyAvg: {
      sleep: "보통",
      sleepLevel: "보통",
      condition: "보통",
      conditionLevel: "보통",
      meal: "보통",
      mealLevel: "보통",
      attendance: "20/25",
    },
  },
  {
    id: 4,
    name: "최유진",
    date: "2026-05-13",
    sleep: "좋음",
    sleepLevel: "좋음",
    condition: "좋음",
    conditionLevel: "좋음",
    meal: "좋음",
    mealLevel: "좋음",
    bowel: "정상",
    bowelLevel: "좋음",
    medication: "비타민D (점심 후)",
    weeklyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "좋음",
      mealLevel: "좋음",
      attendance: "5/5",
    },
    monthlyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "좋음",
      mealLevel: "좋음",
      attendance: "24/25",
    },
  },
  {
    id: 5,
    name: "정하은",
    date: "2026-05-13",
    sleep: "보통",
    sleepLevel: "보통",
    condition: "보통",
    conditionLevel: "보통",
    meal: "보통",
    mealLevel: "보통",
    bowel: "정상",
    bowelLevel: "좋음",
    weeklyAvg: {
      sleep: "보통",
      sleepLevel: "보통",
      condition: "보통",
      conditionLevel: "보통",
      meal: "보통",
      mealLevel: "보통",
      attendance: "4/5",
    },
    monthlyAvg: {
      sleep: "보통",
      sleepLevel: "보통",
      condition: "보통",
      conditionLevel: "보통",
      meal: "보통",
      mealLevel: "보통",
      attendance: "22/25",
    },
  },
  {
    id: 6,
    name: "강도윤",
    date: "2026-05-13",
    sleep: "좋음",
    sleepLevel: "좋음",
    condition: "나쁨",
    conditionLevel: "나쁨",
    meal: "조금",
    mealLevel: "나쁨",
    bowel: "딱딱함",
    bowelLevel: "나쁨",
    note: "점심을 거의 먹지 않았습니다. 편식이 심해지고 있어 주의가 필요합니다.",
    needsAttention: true,
    weeklyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "보통",
      conditionLevel: "보통",
      meal: "나쁨",
      mealLevel: "나쁨",
      attendance: "5/5",
    },
    monthlyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "보통",
      conditionLevel: "보통",
      meal: "나쁨",
      mealLevel: "나쁨",
      attendance: "23/25",
    },
  },
  {
    id: 7,
    name: "윤서준",
    date: "2026-05-13",
    sleep: "좋음",
    sleepLevel: "좋음",
    condition: "좋음",
    conditionLevel: "좋음",
    meal: "좋음",
    mealLevel: "좋음",
    bowel: "정상",
    bowelLevel: "좋음",
    weeklyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "좋음",
      mealLevel: "좋음",
      attendance: "5/5",
    },
    monthlyAvg: {
      sleep: "좋음",
      sleepLevel: "좋음",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "좋음",
      mealLevel: "좋음",
      attendance: "25/25",
    },
  },
  {
    id: 8,
    name: "임소율",
    date: "2026-05-13",
    sleep: "보통",
    sleepLevel: "보통",
    condition: "좋음",
    conditionLevel: "좋음",
    meal: "보통",
    mealLevel: "보통",
    bowel: "정상",
    bowelLevel: "좋음",
    medication: "알레르기약 (아침)",
    weeklyAvg: {
      sleep: "보통",
      sleepLevel: "보통",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "보통",
      mealLevel: "보통",
      attendance: "4/5",
    },
    monthlyAvg: {
      sleep: "보통",
      sleepLevel: "보통",
      condition: "좋음",
      conditionLevel: "좋음",
      meal: "보통",
      mealLevel: "보통",
      attendance: "23/25",
    },
  },
];

export interface ChatMessage {
  id: number;
  sender: string;
  senderRole: "teacher" | "parent" | "ai";
  message: string;
  timestamp: string;
  isEditable?: boolean;
}

export const chatMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "김준호 보호자님",
    senderRole: "parent",
    message: "안녕하세요. 선생님 준호가 오늘 아침에 짜증을 많이 내더라고요",
    timestamp: "2026.12.12 18:00",
  },
  {
    id: 2,
    sender: "홍길동 선생님",
    senderRole: "teacher",
    message:
      "네, 등원할 때 표정이 조금 안 좋아 보였어요. 준호가 안정감을 찾을 수 있도록 좋아하는 활동 위주로 지도하겠습니다.",
    timestamp: "2026.12.12 18:00",
  },
  {
    id: 3,
    sender: "캐비쌤",
    senderRole: "ai",
    message: "안녕하세요. 캐비쌤입니다.",
    timestamp: "2026.12.12 18:00",
  },
  {
    id: 4,
    sender: "홍길동 선생님",
    senderRole: "teacher",
    message: "오늘 내용을 요약해줘",
    timestamp: "2026.12.12 18:00",
  },
  {
    id: 5,
    sender: "캐비쌤",
    senderRole: "ai",
    message: "네 요약 해드리겠습니다.",
    timestamp: "2026.12.12 18:00",
  },
  {
    id: 6,
    sender: "캐비쌤",
    senderRole: "ai",
    message:
      "김준호 2026. 3. 12  알림장\n- 수면: 22:00 ~ 07:00 (총 9시간)\n- 배변: 미선택\n- 컨디션: 보통 (3/5)\n- 식사량: 평소처럼 먹음 (2/3)",
    timestamp: "2026.12.12 18:00",
    isEditable: true,
  },
];

export const suggestedMessages = [
  "어제 밤에 잠을 잘 못 잤어요",
  "오늘 아침에 짜증을 많이 내더라고요",
  "오늘 점심 메뉴는 뭔가요?",
];
