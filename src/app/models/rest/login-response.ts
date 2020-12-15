import { UserInterface } from '../user.interface';
import { HeaderInterface } from './header.interface';
import { ResponseInterface } from './response.interface';

export class LoginResponse implements ResponseInterface {
    header: HeaderInterface;
    data?: any[];
}