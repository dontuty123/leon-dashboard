interface IUser{
    id?:string
    address: string;
    avatar: string;
    createAt: string;
    description: string;
    email: string;
    name: string;
    phone: string;
    role: number;
    zipcode: string;
}

interface IUserSign {
    email: string
    password: string,
    username?:string
}