import { HeaderInterface } from './header.interface';

export interface ResponseInterface {
    header: HeaderInterface;
    data?: any[];
}