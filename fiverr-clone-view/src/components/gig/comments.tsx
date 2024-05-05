import newRequest from "@/utils/newRequest"
import { Rating } from "@mui/material";
import { Circle, PenIcon, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";


interface Comments {
    _id: string,
    gigId: string,
    userId: string,
    text: string,
    username: string,
    rating: number
}

interface CommentsProps {
    data: Comments[]
    refetch: () => void
}

const Comments = ({ data, refetch }: CommentsProps) => {

    const [images, setImages] = useState<string[]>([]);
    const [_, setCountries] = useState<string[]>([]);
    const [__, setFlagUrls] = useState<(string | undefined | null)[]>([]);
    const [finalFlagUrls, setFinalFlagUrls] = useState<(string)[]>([]);
    const [userId, setUserId] = useState<string>('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const imagePromises = data.map(comment => getImage(comment.userId));
                const countryPromises = data.map(comment => getCountry(comment.userId));

                const fetchedImages = await Promise.all(imagePromises);
                const fetchedCountries = await Promise.all(countryPromises);
                userRequest()

                setUserId(userId)
                setImages(fetchedImages);
                setCountries(fetchedCountries);

                const flagUrlPromises = fetchedCountries.map(country => getCountryFlag(country));
                const fetchedFlagUrls = await Promise.all(flagUrlPromises);
                setFlagUrls(fetchedFlagUrls);
                setFinalFlagUrls(fetchedFlagUrls.filter(flag => flag !== null) as string[]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [data]);

    const userRequest = async () => {
        const userId = await newRequest.get(`/users/userId`).then((res) => res.data)
        setUserId(userId)
    }

    const getImage = async (userId: string) => {
        try {
            const res = await newRequest.get(`/users/${userId}/image`);
            const imageData = res.data;
            return imageData;
        } catch (error) {
            console.error('Error fetching image:', error);
            return null;
        }
    };

    const getCountry = async (userId: string) => {
        try {
            const res = await newRequest.get(`/users/${userId}/country`);
            const country = res.data;
            return country.toUpperCase();
        } catch (error) {
            console.error('Error fetching country:', error);
            return null;
        }
    };

    const getCountryFlag = async (countryName: string | null): Promise<string | null> => {
        try {
            if (countryName) {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=flags`);
                const data = await response.json();
                const flagUrl = data[0].flags.png;
                return flagUrl;
            }
            return null;
        } catch (error) {
            console.error('Error fetching flag URL:', error);
            return null;
        }
    };


    const deleteComment = async (gigId: string, commentId: string) => {
        try {
            await newRequest.delete(`/gigs/single/${gigId}/comment/${commentId}`);
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    }
    const handleDelete = async (gigId: string, commentId: string) => {
        await deleteComment(gigId, commentId)
        refetch()
    }

    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>('');

    const handleEdit = (index: number, text: string) => {
        setEditingIndex(index);
        setEditedText(text);
    };

    const handleSave = async (index: number) => {
        if (editedText.trim() === '') {
            return;
        }
        const commentId = data[index]._id;
        const gigId = data[index].gigId;
        console.log(gigId, commentId)
        try {
            await newRequest.put(`gigs/single/${gigId}/comment/${commentId}`, { text: editedText })
                .catch((error) => { console.error('Error updating comment:', error) });
            setEditingIndex(null);
            setEditedText('');
            refetch();
        } catch (error) {
            console.error('Error updating comment:', error);
        }

    };




    return (
        <div className="space-y-5">
            <span className="font-bold text-xl text-[#404145]">
                Comments
            </span>
            <div className="text-[#404145]">
                {data.map((comment, index: number) => (
                    <div key={index} className="flex gap-x-3 items-start">
                        <div className="pt-1">
                            {images[index] !== '' ? <img src={images[index]} alt="" className="rounded-full" /> : <Circle size={34} />}
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="font-bold text-xl">{comment.username}</span>
                            <div className="flex items-center gap-x-3 text-sm ">
                                <img src={finalFlagUrls[index]} className="w-5 h-3"></img>
                                <div className="flex items-center gap-x-1">
                                    <Rating
                                        name="read-only"
                                        value={comment.rating}
                                        precision={0.5}
                                        readOnly
                                        size="small"
                                    />
                                    <span className="font-bold text-[14px]">{comment.rating}</span>
                                </div>
                            </div>
                            {editingIndex === index && userId === comment.userId ? (
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                    className="max-w-[600px] pb-3 text-lg border-[1px]"
                                />
                            ) : (
                                <span className="max-w-[600px] pb-3 text-lg">{comment.text}</span>
                            )}
                            {userId === comment.userId && (
                                <div className="absolute flex items-center left-[700px] gap-x-3">
                                    <TrashIcon
                                        className="cursor-pointer"
                                        size={13}
                                        color="red"
                                        onClick={() => handleDelete(comment.gigId, comment._id)}
                                    />
                                    {editingIndex === index ? (
                                        <button
                                            className="bg-[#1DBF73] text-white p-1 rounded-lg w-8 h-6 text-xs cursor-pointer"
                                            onClick={() => handleSave(index)}
                                        >
                                            Save
                                        </button>

                                    ) : (
                                        <PenIcon
                                            size={13}
                                            className="cursor-pointer"
                                            color="green"
                                            onClick={() => handleEdit(index, comment.text)}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments