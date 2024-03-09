type Gig = {
    userId: string;
    title: string;
    imgs: string[];
    about: string;
    plan: string;
    shortTitle: string;
    shortDesc: string;
    price: number;
    delivery: number;
    revisions: number;
    features: string[];
    category: string;
    totalRating: number;
    ratingNumber: number;
    sales: number;
    comments: any[]; // You might want to define a more specific type for comments
    createdAt?: string; // Added from timestamps
    updatedAt?: string; // Added from timestamps
};

// Define props for the GigCard component
export type GigCardProps = {
    gig: Gig;
};