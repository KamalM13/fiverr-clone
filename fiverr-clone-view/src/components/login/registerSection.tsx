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

    const { register, handleSubmit, formState: { errors,isSubmitting }, setError,  } = useForm<RegisterForm>()

    const onSubmit: SubmitHandler<RegisterForm> = async data => {
        try {
            await newRequest.post('auth/register', data).catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                    console.log(err.response.data)
                    if(err.response.data === 'Username already exists') {
                        setError('username', { message: 'Username already exists' })
                    }
                    if (err.response.data === 'Email already exists') {
                        setError('email', { message: 'Email already exists' })
                    }
                }
            })
            toast.success('Account created successfully')
            setActiveTab('login')
        } catch (err) {
            console.error(err)
        }
    }

    return (

        <form className="flex flex-col gap-y-4 w-[400px] p-3 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-2">
                {errors.root && <span className="text-red-600">{errors.root.message}</span>}
                <label htmlFor="name">Fullname</label>
                <input type="text" placeholder="Name" {...register("name", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.name && <span className="text-red-600">{ errors.name.message }</span>}
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" {...register("username", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.username && <span className="text-red-600">{errors.username.message }</span>}
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" {...register("email", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.email && <span className="text-red-600">{errors.email.message} </span>}
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

            <button type="submit" className="bg-green-500 text-white p-2 rounded-[2px]" disabled={isSubmitting}>Register</button>
        </form>

    )
}

export default RegisterSection