import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import CountryDropDown from "@/components/login/countryDropDown"
import newRequest from "@/utils/newRequest"
import { useNavigate } from "react-router-dom"
import {validateForm } from "@/utils/validateForm"



const Login = () => {

  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    country: '',
  });

  const [error, setError] = useState<string[]>();
  const [backError,setBackError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCountryChange = (country: string) => {
    setFormState(prevState => ({
      ...prevState,
      country,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    error && setError([]);
    backError && setBackError('');
    const target = e.target as HTMLInputElement;
    const { id, value } = target;
    setFormState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, username, email, password, country } = formState;
    const newErrors = validateForm(formState);
    if (newErrors.length>0) {
      setError(newErrors);
      return;
    } 
    try {
      await newRequest.post('auth/register', {
        name,
        username,
        country,
        email,
        password,
      }, {
        withCredentials: true,
      });
      setIsSuccess(true);
      setFormState({ name: '', username: '', email: '', password: '', country: '' });

    } catch (error: any) {
      setBackError(error.response.data);
      console.log(backError)
      setIsSuccess(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = formState;
    const newErrors = validateForm(formState);
    
    try {
      await newRequest.post('auth/login', {
        username,
        password,
      }, {
        withCredentials: true,
      });
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      setIsSuccess(true);
      setFormState({ name: '', username: '', email: '', password: '', country: '' });
      navigate('/gigs');
    } catch (error: any) {
      setError(error.response.data);
      console.log(error)
      setIsSuccess(false);
    }
  };

  return (
    <div className="h-[740px] flex  justify-center ">
      <Tabs defaultValue="register" className="w-[400px]">
        <br />
        <br />
        <TabsList className="grid w-full grid-cols-2 bg-black text-white rounded shadow-md shadow-green-100" >
          <TabsTrigger value="register" className="rounded">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <form className="rounded shadow-md shadow-green-100" onSubmit={handleRegisterSubmit}>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Fill the sections below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Full Name" className="opacity-70" onChange={handleInputChange} value={formState.name} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Unique username" className="opacity-70" onChange={handleInputChange} value={formState.username} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="example@gmail.com" className="opacity-70" onChange={handleInputChange} value={formState.email} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" className="opacity-70" onChange={handleInputChange} value={formState.password} />
              </div>
              <div>
                <p className="text-red-500 text-sm">{error?.length!>0 ? (error![0]) : (backError)}</p>
              </div>
              <div className="space-y-1">
                <CountryDropDown handleCountry={handleCountryChange} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-green-500 text-white rounded shadow-lg hover:bg-green-400" >Save changes</Button>
            </CardFooter>
          </form>
        </TabsContent>
        <TabsContent value="login">
          <form className="rounded shadow-md shadow-green-100" onSubmit={handleLoginSubmit}>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter Your Credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username" className="opacity-70" onChange={handleInputChange} value={formState.username} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="****" className="opacity-70" onChange={handleInputChange} value={formState.password} />
              </div>
              <div>
                <p className="text-red-500 text-sm">{error?.length! > 0 ? (error![0]) : (backError)}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="bg-green-500 text-white rounded shadow-lg hover:bg-green-400" >
                Save changes
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Login