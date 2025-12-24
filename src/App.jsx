import "./App.css";
import { useEffect, useState } from "react";
import { getAssessmentData } from "./fetch/fetch.js";
import { ScoreAndProgress, Feedback } from "./components/index.js";

function App() {
  const [reportData, setReportData] = useState(null);
  const [overallScore, setOverallScore] = useState(0);

  useEffect(() => {
    getAssessmentData().then((data) => {
      setReportData(data);
      setOverallScore(
        (
          Object.entries(data.skills)
            .map(([_, score]) => score)
            .reduce((a, b) => a + b, 0) / 4
        ).toFixed(1)
      );
    });
  }, []);

  if (!reportData)
    return <div className="p-10 text-center">Loading Report...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section */}
        <header className="p-6 border-b border-gray-100 flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Speaking Assessment Report
          </h1>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">
              Student: {reportData.studentName}
            </p>
            <p className="text-sm font-semibold text-gray-700">
              Date: {reportData.assessmentDate}
            </p>
          </div>
        </header>

        <ScoreAndProgress overallScore={overallScore} reportData={reportData} />

        <Feedback overallScore={overallScore} />
      </div>
    </div>
  );
}

export default App;
