import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";




const Register = () => {
  const { createUser } = useContext(AuthContext);


  const handleRegister = e => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password);


    createUser(email, password)
    .then(result=>{
      console.log(result.user)
    })
    .catch (error =>{
      console.error(error)
    })

  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-pink-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold mb-2">Please Register</h1>

          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" required />
              </div>
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
              <div className="form-control mt-6">
                <button className="btn bg-red-400">Login</button>
              </div>
            
            </form>
          
            <p className="text-center mb-4 mt-2">Already have an account?  <Link className="text-red-400 font-bold" to="/login">Login</Link> </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Register;