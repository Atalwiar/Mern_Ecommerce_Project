import { useState } from "react"
import { useNavigate } from "react-router"

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message,setMessage] = useState("");

  return (
    <div>
      Login
    </div>
  )
}

export default Login
