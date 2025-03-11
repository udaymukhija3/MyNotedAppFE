import { useState, useRef } from "react";

const Hero = () => {
  const [input, setInput] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [tocFile, setTocFile] = useState(null);

  const pdfInputRef = useRef();
  const tocInputRef = useRef();

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === "pdf") {
      setPdfFile(file);
    } else if (type === "toc") {
      setTocFile(file);
    }
  };

  return (
    <section className="text-center px-6 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
        Turn PDFs, topics or table of contents into interactive YouTube lessons, quizzes and flashcards easily.
      </h2>

      <div className="max-w-xl mx-auto flex flex-col gap-4 items-center">

        {/* Textbox and Create Button in Same Row */}
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter topic, PDF link, or ToC"
            className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 whitespace-nowrap">
            Create Course
          </button>
        </div>

        {/* Upload Buttons in Same Row */}
        <div className="flex gap-4 mt-4">
          <button
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
            onClick={() => pdfInputRef.current.click()}
          >
            Upload PDF
          </button>
          <input
            type="file"
            accept=".pdf"
            ref={pdfInputRef}
            onChange={(e) => handleFileChange(e, "pdf")}
            className="hidden"
          />

          <button
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
            onClick={() => tocInputRef.current.click()}
          >
            Upload ToC
          </button>
          <input
            type="file"
            accept=".txt,.doc,.docx,.pdf"
            ref={tocInputRef}
            onChange={(e) => handleFileChange(e, "toc")}
            className="hidden"
          />
        </div>

        {/* File Names (if selected) */}
        <div className="mt-2 text-sm text-gray-600 text-left w-full">
          {pdfFile && <p>📄 PDF: {pdfFile.name}</p>}
          {tocFile && <p>📄 ToC: {tocFile.name}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
