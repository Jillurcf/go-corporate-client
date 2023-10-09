import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signInByEmailAndPassword, signInWithGoogle } =
   useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null)
  const [userPasswrod, setUserPassword] = useState(null);
  // const [registerError, setRegisterError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // setRegisterError("");
   if(!userEmail){
    swal("Email or passwrod does not match")
  
   }
   else if(!userPasswrod){
    swal("Email or passwrod does not match")
   }
  
    signInByEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user);
      e.target.reset();
      let userEmail = result.user.email;
      setUserEmail(userEmail)
      let userPassword = result.user.passord;
      setUserPassword(userPassword)
      console.log("success", userEmail, userPassword);
      swal("Login Success")
      
    })
    .catch((error) => {
      console.log(error);
      let errorCode = error.code;
      let errorMessage = error.message
      console.log("error", errorCode, errorMessage);
    });
  navigate(location?.state ? location.state : "/");
  // swal("Success Login");
  
   
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="max-w-screen-2xl h-[50vh] items-center">
      <div className="item-center mt-24">
        <h2 className="text-center text-2xl font-bold">Login Here</h2>
        <form
          onSubmit={handleSignIn}
          className="card-body w-96 md:w-1/4 mx-auto"
        >
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
              <p
                onClick={handleGoogleSignIn}
                href="#"
                className="label-text-alt link link-hover text-2xl font-semibold text-blue-700"
              >
                <Link to="/">Sign in with Google? </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              <Link to="/">Login</Link>
            </button>
          </div>
          <p>
            Do not have account? Please
            <Link
              className="text-green-700 text-xl underline font-semibold"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>
        {/* {registerError && <p className="text-red-700">{registerError}</p>} */}
      </div>
    </div>
  );
};

export default Login;
