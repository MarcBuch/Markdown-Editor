import { useCallback, useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [doc, setDoc] = useState<string>("# Hello world\n");

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="font-spaceGrotesk py-4 min-h-screen flex flex-col items-center bg-slate-700 text-white">
      <h1 className="text-6xl mb-8">Editor</h1>
      <Editor initialDoc={doc} onChange={handleDocChange} />
    </div>
  );
}

export default App;
