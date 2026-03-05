import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    name: string;
    description: string;
    imageUrl: string;
    isFeatured: boolean;
    category: string;
    price: bigint;
}
export interface Inquiry {
    name: string;
    productName: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getAllProducts(): Promise<Array<Product>>;
    getFeaturedProducts(): Promise<Array<Product>>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    submitInquiry(name: string, phone: string, message: string, productName: string): Promise<void>;
}
