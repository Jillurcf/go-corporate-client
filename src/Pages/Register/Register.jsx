import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="max-w-screen-2xl h-[50vh] items-center">
       
        <div className="item-center mt-24">
        <h2 className="text-center text-2xl font-bold">Please Register</h2>
          <form className="card-body w-1/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
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