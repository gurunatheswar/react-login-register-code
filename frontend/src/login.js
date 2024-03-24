import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './LoginValidation'
import axios from 'axios'
export function Login(props) {
    const navigate =useNavigate();
    const [values, setValues] = useState({
        email:'',
        password:''
     })
     const [error, setErrors] = useState({}) 
    const handleInput =(event)=>{
        console.log(event.target.value)
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        axios.post('http://localhost:8081/signin',values)
        .then(res => navigate('/homepage'))
        .catch(err => console.log(err))
        
    }
    return (
        <>
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className="bg-white p-3 rounded w-25">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Sign-In</h2>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleInput} name="email" placeholder='Enter Email'  className='form-control rounded-0'/>
                       {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"  placeholder="Enter Password" className='form-control rounded-0' onChange={handleInput}/>
                        {error.password && <span className='text-danger'>{error.password}</span>}
                    </div>
                    <button className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You are agree to aour terms and policies</p>
                    <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0'>Create Account</Link>
                </form>
            </div>
        </div>
            
        </>
    )
}
