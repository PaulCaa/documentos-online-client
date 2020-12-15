import { HeaderInterface } from './header.interface';
import { DocumentInterface } from '../document.interface';
import { ResponseInterface } from './response.interface';

export class DocumentResponse implements ResponseInterface {
    header: HeaderInterface;
    data?: DocumentInterface[];
}