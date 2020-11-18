import { HeaderInterface } from './header.interface';
import { ResponseInterface } from './response.interface';
import { CompanyInterface } from '../company.interface';

export interface CompanyResponse{
    header: HeaderInterface,
    data: CompanyInterface[]
}