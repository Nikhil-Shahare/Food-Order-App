import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {

    const [credentials, setCredentials] = React.useState({ name: "", email: "", password: "", location: "" })

    const handleChange=(e)=>{
       setCredentials({...credentials,[e.target.name]:[e.target.value]})
    //    console.log(credentials)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(credentials)
        console.log("i ran")
        setCredentials({ name: "", email: "", password: "", location: "" })
    }


    return (
        <div className='wrapper '>
            <div className='overlay'></div>
            <form onSubmit={handleSubmit} className='content '>
                <div className='section'>
                    <label htmlFor="name " className='bg-orange-500'>Name</label>
                    <input type='text'id="name" name='name' onChange={handleChange} value={credentials.name} placeholder='enter your name' />
                </div>
                <div className='section'>
                    <label htmlFor="email"  className='bg-orange-500'>email</label>
                    <input type='text' id="email" name='email' onChange={handleChange} value={credentials.email} placeholder='enter your email' />
                </div>
                <div className='section'>
                    <label htmlFor="password"  className='bg-orange-500'>password</label>
                    <input type='text'id="password" name='password' onChange={handleChange} value={credentials.password} placeholder='enter your password' />
                </div>
                <div className='section'>
                    <label htmlFor="location"  className='bg-orange-500'>location</label>
                    <input type='text'id="location" name='location' onChange={handleChange} value={credentials.location} placeholder='enter your location' />
                </div>

                <button type='submit' className='bg-orange-300 text-white' >Submit</button>

            </form>
            <Link to ="/login">Already a user,login</Link>
        </div>
    )
}

export default Register