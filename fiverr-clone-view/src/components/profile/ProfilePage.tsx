
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CountryDropDown from '../login/countryDropDown';
import { RegisterForm } from '../login/registerSection';
import newRequest from '@/utils/newRequest';

interface ProfileFormProps {
    profileData: {
        username: string;
        email: string;
        name: string;
        image: string;
        country: string;
        isSeller: boolean;
    };
    isEditing: boolean;
    refetch: () => void;
    setIsEditing: (isEditing: boolean) => void;
}



const ProfilePage = ({ profileData, isEditing, refetch, setIsEditing }: ProfileFormProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
        defaultValues: profileData,
    });
    useEffect(() => {
        if (profileData) {
            reset(profileData);
        }
    }, [profileData, reset]);

    const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
        try {
            await newRequest.put('auth/update', data);
            refetch();
            setIsEditing(false);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-10">
            <div className='space-y-2'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full drop-shadow-sm border-[1px] border-black rounded-[5px] p-2 text-black "
                    readOnly={!isEditing}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div className='space-y-2'>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    id="username"
                    {...register('username', { required: 'Username is required' })}
                    className="w-full drop-shadow-sm border-[1px] border-black rounded-[5px] p-2 text-black "
                    readOnly={!isEditing}
                />
                {errors.username && <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>}
            </div>
            <div className='space-y-2'>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full drop-shadow-sm border-[1px] border-black rounded-[5px] p-2 text-black"
                    readOnly={!isEditing}
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div className='space-y-2'>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                {!isEditing ?
                    <input
                        type="text"
                        id="country"
                        {...register('country', { required: 'Country is required' })}
                        className="w-full drop-shadow-sm border-[1px] border-black rounded-[5px] p-2 text-black"
                        readOnly={!isEditing}
                    /> :
                    <CountryDropDown
                        handleCountry={register}
                    />
                }
                {errors.country && <p className="mt-2 text-sm text-red-600">{errors.country.message}</p>}
            </div>


            {isEditing && (
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full drop-shadow-sm border-[1px] border-black rounded-[5px] p-2 text-black" />
                </div>
            )}

            {isEditing && (
                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-[5px] bg-green-500 text-white"
                    >
                        Save
                    </button>
                </div>
            )}
        </form>
    )
}

export default ProfilePage