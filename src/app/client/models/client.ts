import { Grade } from './grade';
import { Month } from './month';

export interface Client {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  grade: Grade;
  status: boolean;
  subDate: Date;
  months: Month[];
}
