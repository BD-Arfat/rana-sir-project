import React from "react";
import { Link } from "react-router";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F9F3] px-4">
            <div className="text-center max-w-lg">

                <div className="text-[#789B38] text-7xl mb-4 flex justify-center">
                    <HiOutlineExclamationCircle />
                </div>

                <h1 className="text-8xl font-bold text-[#1B2B27]">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B27] mt-4">
                    Page Not Found!
                </h2>

                <p className="text-gray-500 mt-3">
                    Sorry, the page you are looking for doesn't exist
                    or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-7 px-8 py-3 rounded-full bg-[#1B2B27] text-[#C5F36B] font-semibold hover:bg-[#C5F36B] hover:text-[#1B2B27] transition-all duration-300"
                >
                    Back To Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;