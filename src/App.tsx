import { useCallback, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [doc, setDoc] = useState<string>("# Hello world\n");

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="font-spaceGrotesk min-h-screen py-4 flex flex-col items-center space-y-10 bg-slate-700 text-white">
      <h1 className="text-6xl">Yet Another Markdown Editor</h1>
      <div className="flex flex-row space-x-6">
        <Editor
          className="c-card"
          initialDoc={doc}
          onChange={handleDocChange}
        />
        <Preview className="px-6 py-1 c-card">{doc}</Preview>
      </div>
    </div>
  );
}

export default App;
