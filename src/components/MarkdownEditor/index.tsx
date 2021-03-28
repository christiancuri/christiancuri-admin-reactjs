import React, { ReactElement } from 'react';
import MdEditor from 'react-markdown-editor-lite';

import MarkdownIt from 'markdown-it';
// import style manually

const mdParser = new MarkdownIt(/* Markdown-it options */);

export const MarkdownEditor = (): ReactElement => {
  const onChange = ({ html, text }: { html: string; text: string }) => {
    console.log({ html, text });
  };
  return (
    <MdEditor
      style={{ height: '500px' }}
      renderHTML={text => mdParser.render(text)}
      onChange={onChange}
    />
  );
};
