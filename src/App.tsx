import { useCallback, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { useHotkeys } from "react-hotkeys-hook";

function App() {
  const [doc, setDoc] = useState<string>("# Hello world\n");
  const [editorView, setEditorView] = useState<boolean>(true);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  useHotkeys(
    "meta+b",
    () => {
      console.log(editorView);
      setEditorView(!editorView);
    },
    {
      enableOnContentEditable: true,
    },
    [editorView]
  );

  return (
    <div className="font-spaceGrotesk min-h-screen py-4 flex flex-col items-center space-y-10 bg-slate-700 text-white">
      <h1 className="text-6xl">Yet Another Markdown Editor</h1>
      <div className="">
        {!editorView ? (
          <Preview className="px-6 py-1 c-card">{doc}</Preview>
        ) : (
          <Editor
            className="c-card"
            initialDoc={doc}
            onChange={handleDocChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;
