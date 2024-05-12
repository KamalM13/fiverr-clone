import newRequest from "@/utils/newRequest"
import { useForm } from "react-hook-form"


type LoginForm = {
    username: string,
    password: string
}

const LoginSection = () => {

    const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginForm>()
    const onSubmit = (data: LoginForm) => {
        try {
            newRequest.post('auth/login', data).catch(err => { 
                setError('username', { message: err.response.data })
                setError('password', { message: err.response.data})
            })
        } catch (err) { 
            setError('username', { message: 'Invalid username or password' })
            console.log()
            setError('password', { message: 'Invalid username or password' })
        }
    }

    return (
        <form className="flex flex-col gap-y-4 w-[400px] border-x-2 border-b-2 border-green-500 p-3 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" {...register("username", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.username && <span className="text-red-600">{errors.username?.message }</span>}
            </div>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" {...register("password", { required: true })}
                    className="border border-gray-300 p-2 focus:outline-none focus:border-green-500 rounded-[2px]"
                />
                {errors.password && <span className="text-red-600">{errors.password?.message}</span>}
            </div>
            <button type="submit" className="bg-green-500 text-white p-2 rounded-[2px]">Login</button>
        </form>
    )
}

export default LoginSection