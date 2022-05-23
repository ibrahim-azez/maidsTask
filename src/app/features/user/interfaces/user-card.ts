import { IUser } from './user';

export interface IUserCard {
  data: IUser;

  support: { url: string; text: string };
}
