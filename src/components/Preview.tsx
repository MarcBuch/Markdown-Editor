import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "github-markdown-css/github-markdown.css";
import "./preview.css";

interface Props {
  children: string;
  className: string;
}

const Preview = ({ children, className }: Props) => {
  return (
    <div className={"preview markdown-body " + className}>
      <ReactMarkdown
        children={children}
        remarkPlugins={[remarkGfm]}
        components={{
          li: ({ className, children, ...props }) => {
            return className?.includes("task-list-item") ? (
              <li className={className} {...props}>
                {children}
              </li>
            ) : (
              <li className={className} {...props}>
                - {children}
              </li>
            );
          },
        }}
      />
    </div>
  );
};

export default Preview;
