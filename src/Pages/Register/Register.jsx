
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
  
 
  const {createUser, signInWithGoogle} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
}

const handleGoogleSignIn = ()=>{
  signInWithGoogle()
  .then(result => console.log(result.user))
  .catch(error=> console.log(error))
}
    return (
        <div className="max-w-screen-2xl h-auto items-center">
       
        <div className="item-center mt-24">
        <h2 className="text-center text-2xl font-bold">Please Register</h2>
          <form onSubmit={handleRegister} className="card-body w-1/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
              <p onClick={handleGoogleSignIn} href="#" className="label-text-alt link link-hover text-2xl font-semibold text-blue-700">
              <Link to="/">Sign in with Google? </Link>
              </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Alrady have an account Please <Link className="text-green-700 text-xl underline font-semibold" to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    );
};

export default Register;