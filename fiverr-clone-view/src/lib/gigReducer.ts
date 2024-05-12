import { Gig } from "@/types/gig";

type Action =
    | { type: 'UPDATE_FIELD'; field: keyof Gig; value: any }
    | { type: 'RESET' }
    | { type: 'ADD_FEATURE', value: string }
    | { type: 'REMOVE_FEATURE'; index: Number }
    | { type: 'ADD_PLAN'; value: any }


export const initialState: Gig = {
    userId: '',
    title: '',
    imgs: [],
    about: '',
    plans: [],
    shortTitle: '',
    shortDesc: '',
    price: 0,
    delivery: 0,
    revisions: 0,
    features: [],
    category: '',
};
export interface Plan {
    name: string;
    shortDesc: string;
    price: number;
}

export function gigReducer(state: Gig, action: Action): Gig {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'RESET':
            return {
                userId: '',
                title: '',
                imgs: [],
                about: '',
                plans: [],
                shortTitle: '',
                shortDesc: '',
                price: 0,
                delivery: 0,
                revisions: 0,
                features: [],
                category: '',
                totalRating: 0,
                ratingNumber: 0,
                sales: 0,
                comments: [],
            };
        case 'ADD_FEATURE':
            return {
                ...state,
                features: [...state.features, action.value],
            }
        case 'REMOVE_FEATURE':
            return {
                ...state,
                features: state.features.filter((_, i) => i !== Number(action.index)),
            };
        case 'ADD_PLAN':
            return {
                ...state,
                plans: [...state.plans, action.value],
            };
        default:
            return state;
    }
}