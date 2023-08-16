import React from 'react'
import { useState } from 'react'
import { post_login } from '../Axiot/api'
import { useNavigate } from 'react-router-dom/dist'

export default function Login() {
    const [user,setUser]= useState()
    const [password, setPassword] = useState()
    const navigation = useNavigate()

    const dologin =()=>{
        post_login({
            userName:user,
            passWord:password
        }).then(()=>{ navigation(`/`)})
    }
  return (
    <div>
        <h2>login</h2>

        <label>Tài khoản</label>
        <input type='text' onChange={(value)=>{setUser(value.target.value)}}/>

        <label>password</label>
        <input type='text' onChange={(value)=>{setPassword(value.target.value)}}/>

        <button onClick={dologin}>submit</button>
        
    </div>
  )
}
