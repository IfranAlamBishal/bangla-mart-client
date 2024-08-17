import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {googleLogIn, } = useContext(AuthContext);

    const handleRegister = e => {

        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,email, password)
    }

    const handleGoogle = () => {
        googleLogIn()
        .then(() => {
            Swal.fire({
                title: "Registered!",
                text: "You've successfully registered.",
                icon: "success"
            });
            Navigate('/')

        })
        .catch(() => {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong.",
                icon: "error"
            });
        })
    }
    return (
        <div>
            <div className="hero bg-green-400 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Welcome! Create your account and start you journey.
                        </p>
                    </div>
                    <div className="card bg-red-400 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered bg-gray-100" required />
                            </div>
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
                                    <p>Already have account? <span><Link to='/login' className=" text-blue-600 font-semibold">Log in</Link></span> now to access your account.</p>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary text-lg font-semibold">Register</button>
                            </div>
                        </form>
                        <button onClick={handleGoogle} className="btn btn-primary text-lg font-semibold mx-8 mb-8 ">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;