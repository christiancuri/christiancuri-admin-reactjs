import React, { ReactElement } from 'react';
import MdEditor from 'react-markdown-editor-lite';

import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt({});

type Props = {
  text: string;
  setText(str: string): void;
};

export const MarkdownEditor = ({ text, setText }: Props): ReactElement => {
  const onChange = ({ text: mdText }: { html: string; text: string }) => {
    setText(mdText);
  };
  return (
    <MdEditor
      style={{ height: '100%' }}
      value={text}
      renderHTML={mdText => mdParser.render(mdText)}
      onChange={onChange}
    />
  );
};
