import { HeaderInterface } from './header.interface';
import { DocumentInterface } from '../document.interface';

export interface DocumentResponseInterface {
    header: HeaderInterface;
    data?: DocumentInterface[];
}