import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-green-400">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                        Welcome back! Please log in to access your account.
                        </p>
                    </div>
                    <div className="card bg-red-400 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-gray-100" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-gray-100" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p>New here? <span><Link to='/register' className=" text-blue-600 font-semibold">Register</Link></span> now to get full access.</p>
                                    
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary text-lg font-semibold">Login</button>
                            </div>
                        </form>
                        <button className="btn btn-primary text-lg font-semibold mx-8 mb-8 ">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;