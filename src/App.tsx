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
      <div className="flex flex-row space-x-5">
        <div className="flex flex-col space-y-4 bg-slate-800/50 h-min text-slate-200 p-2 rounded">
          <p className="">Press CMD + B to switch view</p>
          <div className="flex space-x-4">
            <a href="https://github.com/MarcBuch/Markdown-Editor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://twitter.com/MarcBuchardt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
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
