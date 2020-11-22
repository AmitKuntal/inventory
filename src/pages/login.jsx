import React from 'react';

export default function Login(props){
    const [user_name, setName] = React.useState("")
    const [user_email, setEmail] = React.useState("")

    const handleName = (name)=>{
        setName(name)
    }

    const handleEmail = (email) =>{
        setEmail(email)
    }

    return(
        <div>
            <input type="email" value={user_email} placeholder="Email" onChange={e=>handleEmail(e.target.value)}/>
            <input type="text" value={user_name} placeholder="Name" onChange={e=>handleName(e.target.value)}/>
            <button onClick={()=>props.login_user({name:user_name, email:user_email})}>Login</button>
        </div>
    )
}