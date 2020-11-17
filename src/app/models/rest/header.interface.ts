import { ErrorInterface } from './error.interface';

export interface HeaderInterface {
    resultCode: string;
    message: string;
    errors: ErrorInterface[];
}