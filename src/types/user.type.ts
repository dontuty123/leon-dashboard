interface IUser{
    id?:string
    address: string;
    avatar: string;
    createAt: number;
    description: string;
    email: string;
    name: string;
    phone: string;
    role: string;
    zipcode: string;
    country: string
}

interface IUserSign {
    email: string
    password: string,
    username?:string
}