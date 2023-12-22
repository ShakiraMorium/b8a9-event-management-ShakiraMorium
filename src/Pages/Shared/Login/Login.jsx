import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";



const Login = () => {
    const {signIn} = useContext(AuthContext)
    const { googleSignIn } = useContext(AuthContext);
    const {facebookSignIn} = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);

        signIn(email,password)
        .then(result =>{console.log(result.user)})
        .catch(error => {console.error(error)})
    }

        const handleGoogle = () => {
            googleSignIn()
            .then(result => {console.log(result.user)})
            .catch(error => {console.error(error)})
    }
        const handleFacebook = () => {
           facebookSignIn()
            .then(result => {console.log(result.user)})
            .catch(error => {console.error(error)})
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-pink-200 p-0 ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl mb-4 font-bold">Login now!</h1>

                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                        <form onSubmit={handleLogin}className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn bg-red-400">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogle} className="btn bg-red-200 text-slate-600"> <FcGoogle className="text-2xl" />Google Login </button>
                                <button onClick={handleFacebook} className="btn bg-red-200 text-slate-600"> <FaFacebook className="text-2xl"/>Facebook Login </button>
                            </div>
                        </form>
                        <p className="text-center mb-4">Do not have an account? <Link className="text-red-400 font-bold" to="/register">Register</Link></p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login;