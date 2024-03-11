type Plan = {
    name: string;
    shortDesc: string;
};

type Gig = {
    _id: string;
    userId: string;
    title: string;
    imgs: string[];
    about: string;
    plans: Plan[]; // Adjusted to use an array of Plan objects
    shortTitle: string;
    shortDesc: string; // Note: This exists outside of plans, consider if it's specific enough or too general compared to the per-plan shortDesc
    price: number;
    delivery: number;
    revisions: number;
    features: string[];
    category: string;
    totalRating: number;
    ratingNumber: number;
    sales: number;
    comments: any[];
    createdAt?: string;
    updatedAt?: string;
};

// Define props for the GigCard component
export type GigCardProps = {
    gig: Gig;
};
