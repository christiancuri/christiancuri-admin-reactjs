export interface IPost {
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
}
