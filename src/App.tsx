import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherWeeklyStats from "./pages/teacher/TeacherWeeklyStats";
import TeacherMonthlyStats from "./pages/teacher/TeacherMonthlyStats";
import TeacherCommunication from "./pages/teacher/TeacherCommunication";
import TeacherNotification from "./pages/teacher/TeacherNotification";
import TeacherAlbum from "./pages/teacher/TeacherAlbum";
import TeacherDailyRecord from "./pages/teacher/TeacherDailyRecord";
import ParentDashboard from "./pages/parent/ParentDashboard";
import ParentCommunication from "./pages/parent/ParentCommunication";
import ParentAlbum from "./pages/parent/ParentAlbum";
import ParentDailyRecord from "./pages/parent/ParentDailyRecord";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/teacher/weekly" element={<TeacherWeeklyStats />} />
      <Route path="/teacher/monthly" element={<TeacherMonthlyStats />} />
      <Route path="/teacher/communication" element={<TeacherCommunication />} />
      <Route path="/teacher/notification" element={<TeacherNotification />} />
      <Route path="/teacher/album" element={<TeacherAlbum />} />
      <Route path="/teacher/record" element={<TeacherDailyRecord />} />
      <Route path="/parent" element={<ParentDashboard />} />
      <Route path="/parent/communication" element={<ParentCommunication />} />
      <Route path="/parent/album" element={<ParentAlbum />} />
      <Route path="/parent/record" element={<ParentDailyRecord />} />
    </Routes>
  );
}
