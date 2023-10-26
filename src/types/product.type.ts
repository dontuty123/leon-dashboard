export interface IProduct {
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