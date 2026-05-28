export interface Product {
    id:          number;
    barcode:     string;
    name:        string;
    description: string | null;
    price:       number;
    cost:        number;
    stock:       number;
    categoryId:  number;
    createdAt:   Date;
    updatedAt:   Date;
    category:    Category;
}

export interface Category {
    id:          number;
    name:        string;
    description: string;
    createdAt:   Date;
    updatedAt:   Date;
}
