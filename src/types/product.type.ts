 interface IProduct {
    name: string;
    image: string;
    price: number;
    quantity: number;
    sold?: number;
    description: string;
    category: string;
    id?: string;
    createAt: number
}

interface ITransaction {
    id?: string
    userID:string
    quantity: number
    createAt: number
    product: IProduct
}