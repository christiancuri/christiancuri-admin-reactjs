export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  bio: string;
  website?: string;
  picture?: string;
  banner?: string;
  permissions?: {
    isAdmin: boolean;
  };
  createdAt?: string;
  updatedAt?: string;
  active?: boolean;
}
