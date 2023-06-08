export class Product {
    constructor(
        public sku: string,
        public name: string,
        public description: string,
        public unitPrice: number,
        public imageUrl: string,
        public active: boolean,
        public unitsInStock: 100,
        public dateCreated: Date,
        public lastUpdate: Date
    ) {
    }
}
