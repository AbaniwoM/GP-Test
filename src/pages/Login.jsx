import React from 'react';
import { useNavigate } from "react-router-dom";
import googleImg from "../assets/google_13170545.png";

const Login = () => {
    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    // const [error, setError] = useState(null)
    // const {login} = useAuth()
    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await axios.post("http://localhost:3000/api/auth/login", {name, password});
    //         if(response.data.success) {
    //             login(response.data.user)
    //             localStorage.setItem("token", response.data.token)
    //             if(response.data.user.name === "Admin") {
    //                 navigate('/admin-dashboard')
    //             } else {
    //                 navigate('/employee-dashboard')
    //             }
    //         }
    //     } catch(error) {
    //         if(error.response && !error.response.data.success) {
    //             setError(error.response.data.error)
    //         } else {
    //             setError("Server Error")
    //         }
    //     }
    // }

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-r from-blue-900 to-blue-900 space-y-6">
        <div className='border shadow p-6 w-[30%] lg:w-[46%] sm:w-[80%] md:w-[58%] bg-white rounded-md'>
        <h2 className='hidden md:flex md:text-lg md:font-medium md:mb-4 md:justify-center sm:flex sm:justify-center sm:font-normal sm:text-md'>Login</h2>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        <form>
            <div className="flex sm:flex-col sm:text-center justify-center text-xs gap-1 mt-4 mb-7">
                <div>Don't have an account yet?</div> 
                <div className="text-blue-900 font-medium">Create an account</div>
            </div>
            <button className="border flex justify-center w-full py-2 rounded-sm text-sm mb-5 cursor-pointer">
                <div><img src={googleImg} className="w-7"/></div>
                <div className="py-1">Sign up with Google</div>
            </button>
            <div className="flex gap-3 mb-6">
                <div className="border-t w-[50%] mt-2"></div>
                <div className="text-gray-400 text-xs">OR</div>
                <div className="border-t w-[50%] mt-2"></div>
            </div>
            <div className='mb-4'>
                <label htmlFor="username" className='block text-gray-700 text-sm mb-2'>Username</label>
                <input type="text" className='w-full px-3 py-2 border text-sm' placeholder='Enter Username' required />
            </div>
            <div className='mb-4'>
                <div className="flex justify-between">
                <label htmlFor="password" className='block text-gray-700 text-sm mb-2'>Password</label>
                <a href="#" className="text-blue-900 text-sm font-light mb-2">
                Remember me
                </a>
                </div>
                <input type="password" className='w-full px-3 py-2 border' placeholder='*******' required />
            </div>
            <div className='md-4 mb-7 flex items-center justify-between'>
               <label className='inline-flex items-center'>
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-700 text-sm">Keep me logged in</span>
               </label>
            </div>
            <div className='mb-3'>
            <button className="w-full bg-gradient-to-r from-blue-900 to-blue-900 text-white py-2 rounded-md" onClick={() => navigate('admin-dashboard')}>Login</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login