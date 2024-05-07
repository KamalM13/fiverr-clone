export default interface Chat {
    _id: string;
    id: string;
    sellerId: string;
    buyerId: string;
    readBySeller: boolean;
    readByBuyer: boolean;
    lastMessage?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
