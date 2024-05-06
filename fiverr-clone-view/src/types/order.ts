export default interface Order {
    gigId: string;
    img?: string;
    title: string;
    price: number;
    sellerId: string;
    buyerId: string;
    isCompleted: boolean;
    billingInfo: {
        fullName: string;
        companyName?: string;
        stateRegion?: string;
        address?: string;
        city?: string;
        postalCode?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}