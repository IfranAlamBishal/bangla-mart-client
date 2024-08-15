
const brandFilters = <>
    <details>
        <summary>Brand</summary>
        <ul className=" md:w-40 p-2 bg-white ">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
        </ul>
    </details>
</>

const categoryFilters = <>
    <details>
        <summary>Category</summary>
        <ul className=" md:w-40 p-2 bg-white">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
        </ul>
    </details>
</>

const priceRange = <>
    <details>
        <summary>Price Range</summary>
        <ul className=" md:w-40 p-2 bg-white">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
        </ul>
    </details>
</>

const searchField = <div className="form-control">
    <input type="text" placeholder="Search" className="input input-bordered w-auto" />
</div>

const navBtn = <>
    <button className=" btn btn-ghost font-bold text-lg">Log In</button>
</>

const Navbar = () => {
    return (
        <div className=" w-5/6 mx-auto">
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>{brandFilters}</li>
                            <li>{categoryFilters}</li>
                            <li>{priceRange}</li>
                            <li className=" py-3">{searchField}</li>
                            <li>{navBtn}</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl md:text-5xl font-bold text-green-600">Bangla <span className=" text-red-600">Mart</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>{brandFilters}</li>
                        <li>{categoryFilters}</li>
                        <li>{priceRange}</li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div className=" flex gap-5">
                        {searchField}
                        {navBtn}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;