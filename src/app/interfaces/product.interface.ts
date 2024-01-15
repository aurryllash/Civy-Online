export interface Product {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating: { 
        rate:number,
        count:number
    },
    userId: string,
    active: boolean
}
export interface User {
    id: string,
    name: string,
    lastName: string,
    email: string,
    username: string,
    password: string
}