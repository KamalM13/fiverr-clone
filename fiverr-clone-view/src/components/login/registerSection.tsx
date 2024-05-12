import { useForm, SubmitHandler } from "react-hook-form"
import CountryDropDown from "./countryDropDown"
import newRequest from "@/utils/newRequest"
import { toast } from "sonner"

export type RegisterForm = {
    name: string,
    username: string,
    email: string,
    password: string,
    country: string,
    isSeller: boolean
}
interface RegisterSectionProps {
    setActiveTab: (tab: string) => void
}

const RegisterSection = ({ setActiveTab }: RegisterSectionProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>()

    const onSubmit: SubmitHandler<RegisterForm> = data => {
        try {
            newRequest.post('auth/register', data)
            toast.success('Registration successful')
            setActiveTab('login')
        } catch (err) {
            console.error(err)
        }
    }

    return (

        <form className="flex flex-col gap-y-4 w-[400px] border-x-2 border-b-2 border-green-500 p-3 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="name">Fullname</label>
                <input type="text" placeholder="Name" {...register("name", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" {...register("username", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.username && <span className="text-red-600">Username is required</span>}
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" {...register("email", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" {...register("password", {
                    required: true,
                    minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                    },
                    maxLength: 20,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                        message: "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be between 8 to 20 characters long"
                    }

                })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.password && <span className="text-red-600">{errors.password?.message}</span>}
            </div>
            <CountryDropDown
                handleCountry={register}
            />
            {errors.country && <span className="text-red-600">Country is required</span>}
            <div className="flex items-center gap-x-2 h-10">
                <input type="checkbox" {...register("isSeller")} />
                <label htmlFor="isSeller">Register as a seller</label>
            </div>

            <button type="submit" className="bg-black text-white p-2 rounded-[2px]">Register</button>
        </form>

    )
}

export default RegisterSection