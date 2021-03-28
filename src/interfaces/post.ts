export type IPost = {
  author: {
    createdAt: string | Date;
    name: string;
    updatedAt: string;
    _id: string;
  };
  createdAt: string;
  description: string;
  picture: string;
  title: string;
  updatedAt: string | Date;
  uri: string;
  _id: string;
};

export type MarkdownPayload = {
  title: string;
  picture: string;
  description: string;
  value: string;
};
