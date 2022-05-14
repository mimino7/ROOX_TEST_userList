
export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}
export interface ICompany {
    name: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    company: ICompany;
    phone: string;
    website: string;
}

export interface IUsFormData {
    Name?: string;
    Username?: string;
    Email?: string;
    Street?: string;
    City?: string;
    Zipcode?: any;
    Phone?: any;
    Website?: any;
    [k: string]: any;
}