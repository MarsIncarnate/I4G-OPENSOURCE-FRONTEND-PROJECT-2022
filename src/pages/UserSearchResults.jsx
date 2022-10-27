import React from "react";
import NavbarAdmin from "../components/molecules/NavbarAdmin";
import userAvatar from "../assets/icons/avatar.png";
import { userData } from "../assets/data/AdminDashboardData";
import optionsIcon from "../assets/icons/optionsIcon.svg";
import chevronDown from "../assets/icons/chevron-down.svg";


function UserSearchResults() {

    return(
        <div className="md:ml-[230px] md:mt-[40px]">
            <NavbarAdmin/>
            <div className="md:flex items-center justify-between">
                <div className="px-6 md:px-0">
                    {/* opening text */}
                    <div className="font-cabinetGrotesk ">
                        <p className="font-medium text-[20px]">Welcome Back, Admin👋🏾</p>
                        <h1 className="font-bold text-[28px]">Dashboard</h1>
                    </div>
                </div>
                {/* SEARCH BAR */}
                <div className="md:flex items-center">
                    <div className="flex gap-2 h-10 p-5 mx-6 my-4 border-2 hover:border-black rounded-md items-center ">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.17502 16.6833C13.3218 16.6833 16.6834 13.3217 16.6834 9.17496C16.6834 5.02822 13.3218 1.66663 9.17502 1.66663C5.02828 1.66663 1.66669 5.02822 1.66669 9.17496C1.66669 13.3217 5.02828 16.6833 9.17502 16.6833Z" fill="#717591"/>
                            <path d="M18.325 15.7917C18.05 15.2833 17.4667 15 16.6834 15C16.0917 15 15.5834 15.2417 15.2834 15.6583C14.9834 16.075 14.9167 16.6333 15.1 17.1917C15.4584 18.275 16.0834 18.5167 16.425 18.5583C16.475 18.5667 16.525 18.5667 16.5834 18.5667C16.95 18.5667 17.5167 18.4083 18.0667 17.5833C18.5084 16.9417 18.5917 16.3 18.325 15.7917Z" fill="#717591"/>
                        </svg>
                        <form action="">
                            <input className="font-cabinetGrotesk outline-none" type="text" placeholder="Search for gadgets" />
                        </form>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <div className=" bg-gray-300 rounded-full p-3">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.9516 15.6975L19.8683 13.8991C19.6408 13.4983 19.435 12.74 19.435 12.2958V9.55496C19.435 7.00912 17.94 4.80996 15.7841 3.78079C15.2208 2.78413 14.1808 2.16663 12.9891 2.16663C11.8083 2.16663 10.7466 2.80579 10.1833 3.81329C8.07081 4.86413 6.60831 7.04163 6.60831 9.55496V12.2958C6.60831 12.74 6.40248 13.4983 6.17498 13.8883L5.08081 15.6975C4.64748 16.4233 4.54998 17.225 4.82081 17.9616C5.08081 18.6875 5.69831 19.2508 6.49998 19.5216C8.60165 20.2366 10.8116 20.5833 13.0216 20.5833C15.2316 20.5833 17.4416 20.2366 19.5433 19.5325C20.3016 19.2833 20.8866 18.7091 21.1683 17.9616C21.45 17.2141 21.3741 16.3908 20.9516 15.6975Z" fill="#717591"/>
                                <path d="M16.0658 21.6775C15.6108 22.9341 14.4083 23.8333 13 23.8333C12.1442 23.8333 11.2992 23.4866 10.7033 22.8691C10.3567 22.5441 10.0967 22.1108 9.94501 21.6666C10.0858 21.6883 10.2267 21.6991 10.3783 21.7208C10.6275 21.7533 10.8875 21.7858 11.1475 21.8075C11.765 21.8616 12.3933 21.8941 13.0217 21.8941C13.6392 21.8941 14.2567 21.8616 14.8633 21.8075C15.0908 21.7858 15.3183 21.775 15.535 21.7425C15.7083 21.7208 15.8817 21.6991 16.0658 21.6775Z" fill="#717591"/>
                            </svg>
                        </div>
                        <img src={userAvatar} alt="user avatar" width={50}/>
                    </div>
                </div>
            </div>
            {/* TABLE */}
            <div className="font-cabinetGrotesk border-2 border-collapse rounded-lg w-[90%] md:w-[100%] mt-16 mx-auto md:mx-0 text-center">
                <div className="flex items-center justify-between px-6 py-4 bg-blue-50">
                    <p className=" font-bold text-[18px]">24 Result(s)</p>
                    <p className="flex items-center gap-2">
                        Sort by: <span className=" text-blue-700">Latest</span><img src={chevronDown} alt="" />
                    </p>
                </div>
                <table className="w-[100%]">
                        <tr className="border-b-2 rounded-t-lg">
                            <th className="text-left px-2 py-4">Name</th>
                            <div className="hidden md:contents">
                                <th className="px-2 py-4">Email Address</th>
                                <th className="px-2 py-4">Phone Number</th>
                            </div>
                            <div className="hidden lg:contents">
                                <th className="px-2 py-4">Date Registered</th>
                            </div>
                        </tr>
                        {userData.map((user)=>{
                            return (
                                <tr key={user.id} className="border-b-2 items-center">
                                    <td className="border-b px-2 py-4 flex gap-6 items-center">
                                        <img src={user.image} alt="avatar" />
                                        <div className="flex items-center gap-2  w-[100%] justify-between mr-6">
                                            <p>{user.name}</p>
                                            <img className="md:hidden" src={optionsIcon} alt="icon" />
                                        </div>
                                    </td>
                                    <div className="hidden md:contents">
                                        <td className="px-2 relative bottom-5">
                                            <p className="text-gray-600">{user.email}</p>
                                        </td>
                                        <td className="px-2 relative bottom-5">
                                            <p className="text-gray-600">{user.phone}</p>
                                        </td>
                                    </div>
                                    <div className="hidden lg:contents">
                                        <td className="px-2 relative bottom-5">
                                            <div className="flex items-center justify-between mr-4">
                                                <p className="text-gray-600">{user.registered}</p>
                                                <img src={optionsIcon} alt="icon" />
                                            </div>
                                        </td>
                                    </div>
                                </tr>
                            )
                        })}
                        
                </table>
            </div>
            
            <div className="flex items-center justify-between px-6 md:px-0 mt-10 mb-10">
                <p>Showing 7 of 24 results</p>
                <p className="flex items-center gap-3">
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.06167 4.869C1.11833 4.811 1.33228 4.563 1.53158 4.359C2.7 3.076 5.74807 0.976 7.34342 0.335C7.5857 0.232 8.19824 0.014 8.52552 0C8.83912 0 9.13806 0.072 9.42333 0.218C9.77894 0.422 10.0642 0.743 10.2205 1.122C10.3211 1.385 10.4775 2.172 10.4775 2.186C10.6338 3.047 10.7197 4.446 10.7197 5.992C10.7197 7.465 10.6338 8.807 10.5058 9.681C10.4911 9.695 10.3348 10.673 10.1639 11.008C9.85025 11.62 9.23771 12 8.58218 12H8.52552C8.09859 11.985 7.20078 11.605 7.20078 11.591C5.6914 10.949 2.71368 8.952 1.51692 7.625C1.51692 7.625 1.17988 7.284 1.03334 7.071C0.804732 6.765 0.691406 6.386 0.691406 6.007C0.691406 5.584 0.819386 5.19 1.06167 4.869Z" fill="#252730"/>
                    </svg>
                    <span className=" bg-blue-700 p-2 rounded-md text-white">01</span>
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6092 7.131C10.5526 7.189 10.3386 7.437 10.1393 7.641C8.9709 8.924 5.92284 11.024 4.32749 11.665C4.08521 11.768 3.47266 11.986 3.14539 12C2.83179 12 2.53284 11.928 2.24758 11.782C1.89197 11.578 1.6067 11.257 1.45039 10.878C1.34976 10.615 1.19345 9.828 1.19345 9.814C1.03714 8.953 0.951172 7.554 0.951172 6.008C0.951172 4.535 1.03714 3.193 1.16512 2.319C1.17978 2.305 1.33609 1.327 1.50705 0.992C1.82065 0.38 2.4332 0 3.08872 0H3.14539C3.57231 0.015 4.47012 0.395 4.47012 0.409C5.9795 1.051 8.95723 3.048 10.154 4.375C10.154 4.375 10.491 4.716 10.6376 4.929C10.8662 5.235 10.9795 5.614 10.9795 5.993C10.9795 6.416 10.8515 6.81 10.6092 7.131Z" fill="#252730"/>
                    </svg>
                </p>
            </div>
            <div className="hidden fixed top-[180px] left-0 md:flex gap-3 bg-white p-4 items-center w-[230px]">
                <img className="ml-9" src="" alt="icon" />
                <p className=" font-cabinetGrotesk text-blue-700 font-semibold text-[18px]">Dashboard</p>
            </div>
        </div>
    )
}

export default UserSearchResults;