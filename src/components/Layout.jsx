import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

// You can move your modal code here too!
export default function Layout({ children }) {
  const [showResumePrompt, setShowResumePrompt] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onResumeClick={() => setShowResumePrompt(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Resume Modal */}
      {showResumePrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#16233a] p-8 rounded-2xl shadow-xl flex flex-col gap-5 items-center min-w-[300px]">
            <h2 className="text-lg font-semibold text-[#49e6fb] mb-2">Select Resume to View</h2>
            <button
              className="w-full px-6 py-2 mb-2 font-semibold text-white transition bg-indigo-500 rounded-lg hover:bg-indigo-600"
              onClick={() => {
                window.open("/Resume_SDE.pdf", "_blank");
                setShowResumePrompt(false);
              }}
            >
              Software Engineer Resume
            </button>
            <button
              className="w-full px-6 py-2 rounded-lg bg-[#00c2dc] hover:bg-[#1dd0ee] text-white font-semibold transition mb-2"
              onClick={() => {
                window.open("/Resume_ML.pdf", "_blank");
                setShowResumePrompt(false);
              }}
            >
              Machine Learning Engineer Resume
            </button>
            <button
              className="w-full px-6 py-2 text-gray-200 transition bg-gray-700 rounded-lg hover:bg-gray-800"
              onClick={() => setShowResumePrompt(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
