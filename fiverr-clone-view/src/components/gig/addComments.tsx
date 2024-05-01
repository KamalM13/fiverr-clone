import newRequest from '@/utils/newRequest';
import { useState } from 'react';

interface AddCommentsProps {
    refetch: () => void;
    id: string | undefined;
}

const AddComments = ({ refetch,id  }: AddCommentsProps) => {
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleComment();
    };

    const handleComment = async () => {
        await newRequest.post(`/gigs/single/${id}/comment`, { comment: input }).then((res) => { console.log(res) })
        setInput('')
        refetch()
    }

    return (
        <div className="space-y-3">
            <span className="font-bold text-xl text-[#404145]">
                Leave a comment
            </span>
            <form className="flex" onSubmit={handleSubmit}>
                <input
                    placeholder="Add a comment"
                    className="border-[1px] border-[#404145] w-full p-2 rounded-lg"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-[#1DBF73] text-white w-30 p-2 rounded-lg"
                >
                    Comment
                </button>
            </form>
        </div>
    );
};

export default AddComments;
