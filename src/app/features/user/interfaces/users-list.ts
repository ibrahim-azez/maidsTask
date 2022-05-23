import { IUser } from './user';

export interface IUsersList {
  data: IUser[];
  page: number;
  per_page: number;
  support: { url: string; text: string };
  total: number;
  total_pages: number;
}
