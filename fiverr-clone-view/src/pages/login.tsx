
import { useState } from "react"
import RegisterSection from "@/components/login/registerSection"
import LoginSection from "@/components/login/loginSection"



const Login = () => {



  const [activeTab, setActiveTab] = useState('register');

  return (
    <div className="h-[740px]  flex flex-col items-center drop-shadow-sm ">
      <div className="w-[400px] flex justify-between border-2 border-green-500">
        <div className={`w-full p-2 flex justify-center ${activeTab === 'login' ? 'bg-green-500 text-white' : ''}`}>
          <button onClick={() => setActiveTab('login')} className="w-full">
            Login
          </button>
        </div>
        <div className={`w-full p-2 flex justify-center ${activeTab === 'register' ? 'bg-green-500 text-white' : ''}`}>
          <button onClick={() => setActiveTab('register')} className="w-full">
            Register
          </button>
        </div>
      </div>
      {
        activeTab === 'register' ? (
          <RegisterSection
            setActiveTab={setActiveTab}
          />
        ) : activeTab === 'login' ? (
          <LoginSection />
        ) : (<div> error 404 </div>)
      }


    </div >
  )
}

export default Login