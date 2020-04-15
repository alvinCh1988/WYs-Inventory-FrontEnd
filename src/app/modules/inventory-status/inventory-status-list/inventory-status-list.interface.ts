export interface Series {
    series: string;
    products: Inventory[];
}

export interface Inventory {
    item: string;
    inventory: number;
    storageLoc: Storage[];
}

export interface Storage {
    loc: string;
    quantity: number;
    update: string;
}