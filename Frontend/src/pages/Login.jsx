import { useState } from "react"
import { useNavigate } from "react-router"
import api from "../api/axios";
function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = async (e) =>{
     e.preventDefault();
     try{
  const response = await api.post("/auth/login",form);
  localStorage.setItem("token",response.data.token);
  setMessage("Login Successful");
  setInterval(()=>{
    navigate("/");
  },1000);
     }catch(error){
       setMessage(error.response.data.message || "ann error occured");
      
     }
  }

  const [message,setMessage] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

    {



      message && (
        <div className=" mb-4 text-center text-sm  text-blue-600 font-medium ">
          {message}
        </div>
      )
    }
      
      

    

    <form onSubmit={handelSubmit} className="space-y-4">
     
      <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handelChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none" required/>
      <input type="password" name="password" placeholder="Enter Password" value={form.password} onChange={handelChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none" required/>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ">Login</button>
    </form>

      </div>
      
    </div>
  )
}

export default Login
