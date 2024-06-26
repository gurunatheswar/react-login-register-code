import React ,{useState}from 'react'
import { Link ,useParams, useNavigate } from 'react-router-dom'
import validation from './signupValidation'
import axios from 'axios'
export function Signup(props) {
    const navigate =useNavigate();
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:''
     })
     const [error, setErrors] = useState({}) 
    const handleInput =(event)=>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        console.log(error);
        if(error.username === "" && error.password === "" && error.email === ""){
            axios.post('http://localhost:8081/signup',values)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
        }
    }

    return (
        <>
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className="bg-white p-3 rounded w-25">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='username' onChange={handleInput} className='form-control rounded-0'/>
                        {error.username && <span className='text-danger'>{error.username}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                        {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} className='form-control rounded-0'/>
                        {error.password && <span className='text-danger'>{error.password}</span>}
                    </div>
                    <button className='btn btn-success w-100 rounded-0'>Signup</button>
                    <p>You are agree to aour terms and policies</p>
                    <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
        </>
    )
}
