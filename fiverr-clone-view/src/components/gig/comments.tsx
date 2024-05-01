import newRequest from "@/utils/newRequest"
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";


interface Comments {
    userId: string,
    text: string,
    username: string
}

interface CommentsProps {
    data: Comments[]
}

const Comments = ({ data }: CommentsProps) => {

    const [images, setImages] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);
    const [flagUrls, setFlagUrls] = useState<(string | undefined | null)[]>([]);
    const [finalFlagUrls, setFinalFlagUrls] = useState<(string)[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const imagePromises = data.map(comment => getImage(comment.userId));
                const countryPromises = data.map(comment => getCountry(comment.userId));

                const fetchedImages = await Promise.all(imagePromises);
                const fetchedCountries = await Promise.all(countryPromises);

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


    return (
        <div className="space-y-5">
            <span className="font-bold text-xl text-[#404145]">
                Comments
            </span>
            <div className="text-[#404145]">
                {data.map((comment, index: number) => (
                    <div key={index} className="flex gap-x-3 items-start">
                        <div className="pt-1">
                            {images[index] !== 'Undefined' ? <img src={images[index]} alt="" className="rounded-full" /> : <Circle size={34} />}
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="font-bold text-xl">{comment.username}</span>
                            <div className="flex items-center gap-x-3 text-sm ">
                                <img src={finalFlagUrls[index]} className="w-5 h-3"></img>
                                <span className="font-bold text-xs">{countries[index]} </span>
                            </div>
                            <span className="max-w-[600px] pb-3 text-lg">{comment.text}</span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments