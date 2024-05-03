import newRequest from '@/utils/newRequest';
import { useState } from 'react';
import Rating from "@mui/material/Rating"

interface AddCommentsProps {
    refetch: () => void;
    
    id: string | undefined;
}

const AddComments = ({ refetch, id }: AddCommentsProps) => {
    const [input, setInput] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleComment();
    };

    const handleComment = async () => {
        try {
            if (rating === 0) return setError("Please select a rating");
            setError('');
            await newRequest.post(`/gigs/single/${id}/comment`, { comment: input, rating: rating }).then((res) => { console.log(res) });
            setInput('');
            refetch();
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    return (
        <div className="space-y-3">
            <span className="font-bold text-xl text-[#404145]">
                Leave a rating
            </span>
            <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                {error && <span className="text-red-500">{error}</span>}
                <Rating
                    name="simple-controlled"
                    defaultValue={2.5}
                    precision={0.5}
                    value={rating}
                    onChange={(_, newValue) => {
                        setRating(newValue as number);
                    }}
                />
                <div className='flex'>
                    <input
                        placeholder="Add a comment"
                        className="border-[1px] border-[#404145] w-full p-2 rounded-lg"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#1DBF73] text-white w-30 p-2 rounded-lg"
                    >
                        Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddComments;
