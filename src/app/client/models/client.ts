import { Grade } from './grade';

export interface Client {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  grade: Grade;
  status: boolean;
  subDate: Date;
}
