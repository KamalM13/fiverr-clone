export interface Gig {
    userId: string;
    title: string;
    imgs: string[];
    about: string;
    plans: {
        name: string;
        shortDesc: string;
        price: number;
    }[];
    shortTitle: string;
    shortDesc: string;
    price: number;
    delivery: number;
    revisions: number;
    features: string[];
    category: string;
    totalRating?: number;
    ratingNumber?: number;
    sales?: number;
    comments?: any[]; // You can refine the type of comments if you have a specific structure
    createdAt?: Date;
    updatedAt?: Date;
}