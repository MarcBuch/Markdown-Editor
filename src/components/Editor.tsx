import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useCodeMirror } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { tokyoNightStormInit } from "@uiw/codemirror-theme-tokyo-night-storm";
import { tags as t } from "@lezer/highlight";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );

  const customTheme = tokyoNightStormInit({
    settings: {
      fontFamily: "Space Grotesk",
    },
    styles: [
      {
        tag: t.heading1,
        fontSize: "1.6em",
        fontWeight: "bold",
        color: "#c0caf5",
      },
      {
        tag: t.heading2,
        fontSize: "1.4em",
        fontWeight: "bold",
        color: "#c0caf5",
      },
      {
        tag: t.heading3,
        fontSize: "1.2em",
        fontWeight: "bold",
        color: "#c0caf5",
      },
    ],
  });

  const editor = useRef(null);
  const { setContainer } = useCodeMirror({
    value: initialDoc,
    container: editor.current,
    height: "400px",
    width: "800px",
    extensions: [
      markdown({
        base: markdownLanguage,
        codeLanguages: languages,
        addKeymap: true,
      }),
    ],
    theme: customTheme,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return <div className="editor-wrapper" ref={editor} />;
};

export default Editor;
