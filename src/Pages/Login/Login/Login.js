import React, { useEffect } from 'react';
import SocialLogin from './SocialLogin';
import Loading from '../../Shared/Loading/Loading'
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const location = useLocation();
      const navigate = useNavigate();
      let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token] = useToken(user);

    useEffect(() => {
        if(token){
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if(loading){
        return <Loading></Loading>
    }

    let ErrorMessage;
    if(error){
        ErrorMessage = <p className='text-red-500'>{error.message}</p>
    }

    


    const onSubmit = data => {
        console.log(data)
    
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">

                <div className="card w-full max-w-md  shadow-2xl bg-base-100 pb-5">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Login now!</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-md">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder='Your Email'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                                        }
                                    })}
                                    className="input input-bordered w-full max-w-md"
                                />
                                <label className="label">
                                    {
                                        errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                    {
                                        errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                </label>
                            </div>
                            <div className="form-control w-full max-w-md">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                        }
                                    })}
                                    className="input input-bordered w-full max-w-md"
                                />
                                <label className="label">
                                    {
                                        errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                    }
                                </label>
                            </div>

                                    {ErrorMessage}

                            <input className='btn w-full max-w-md text-white font-bold' type="submit" value='Login' />
                        </form>
                        <p>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create new account</Link></p>


                    </div>

                    <div className="divider">OR</div>

                    <SocialLogin />

                </div>
            </div>
        </div>
    );
};

export default Login;