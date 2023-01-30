import { useCallback, useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [doc, setDoc] = useState<string>("# Hello world\n");

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="App">
      <h1>Editor</h1>
      <Editor initialDoc={doc} onChange={handleDocChange} />
    </div>
  );
}

export default App;
