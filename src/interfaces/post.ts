export type IPost = {
  _id: string;
  uri: string;
  picture: string;
  title: string;
  description: string;
  body: string;
  author?: {
    name?: string;
    picture?: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type MarkdownPayload = {
  title: string;
  picture: string;
  description: string;
  body: string;
};
