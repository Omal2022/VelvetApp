import React from "react";
import Image from "next/image";

const SearchBar = () => {
    return (
        <div className="flex  max-w-full">
            <form
                action="/api/subscribe"
                method="get"
                className="z-10 w-[90%] max-w-[747px]"
            >
                <div className="flex items-center bg-white rounded-full shadow-md h-12 sm:h-14 px-4">
                    {/* Search Icon */}
                    <Image
                        src="/search.svg"
                        alt="Search Icon"
                        width={20}
                        height={20}
                        className="opacity-70"
                    />

                    {/* Input */}
                    <input
                        type="search"
                        name="search"
                        placeholder="Search VelvetCore for available items"
                        className="flex-grow px-3 bg-transparent outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400"
                    />

                    {/* Arrow Icon inside circle */}
                    <button
                        type="submit"
                        className="flex items-center justify-center bg-[#f8f8f8] rounded-full p-2 hover:bg-gray-200 transition"
                    >
                        <Image
                            src="/arrow.svg"
                            alt="Arrow Icon"
                            width={20}
                            height={20}
                            className="opacity-80"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
