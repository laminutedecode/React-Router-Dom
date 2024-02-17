import {useState} from 'react'
import { useAuth } from '../components/auth'
import {useNavigate, useLocation} from 'react-router-dom'

export default function Login() {

  const [user, setUser] = useState('')

  const location = useLocation()

  const redirectPath = location.state?.path || '/'



const handleChange = (e)=> {
  const val = e.target.value
  setUser(val)
}

const auth = useAuth()
const navigate = useNavigate()

const handleClick = ()=> {
  auth.login(user)
  // navigate('/dashboard')
  navigate(redirectPath, {replace: true})
}

  return (
    <>
    <label htmlFor="login">login</label>
    <input onChange={handleChange} type="text" id="login" />
    <button onClick={handleClick}>Se connecter</button>
    
    </>
  )
}


//aller dans navbar