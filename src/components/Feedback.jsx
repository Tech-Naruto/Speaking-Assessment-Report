export default function Feedback({ overallScore }) {
  const getFeedback = (score) => {
    if (score >= 8) return "Excellent performance with strong control.";
    if (score >= 6) return "Good performance with minor inaccuracies.";
    return "Needs improvement.";
  };

  return (
    <div className="p-6 pt-0">
      {" "}
      {/* 1. Feedback Logic Component */}
      <section className="mb-8 p-6 bg-blue-50/50 border border-blue-100 rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Descriptive Feedback
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {/* Function call to handle logic */}
          {getFeedback(overallScore)}
        </p>
      </section>
      <section className="bg-white p-4 border border-gray-100 rounded-xl shadow-sm">
        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4 text-center">
          Score Analysis
        </h3>
      </section>
    </div>
  );
}
