import { Link, Outlet } from "react-router";
import { useContext, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { NavLink } from "react-router";
import { AuthContext } from "../authContext/AuthContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignoutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className="px-3 py-3 md:px-0 md:max-w-10/12 mx-auto">
        <main className="flex gap-5 min-h-screen relative">
          <aside
            className={`fixed lg:static inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="flex flex-col shadow bg-white/5 h-full py-5 rounded-2xl lg:rounded-2xl">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-white lg:hidden"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex items-center w-full justify-center pb-6 border-b border-gray-200 mb-8">
                <Link to={"/"} className="flex items-center">
                  <IoIosHome className="md:text-2xl text-[20px] font-bold text-[#F3601A]" />
                  <a className="md:text-2xl text-[20px] font-bold text-[#F3601A]">
                    Home Hero
                  </a>
                </Link>
              </div>

              <nav className="flex-1 px-6 overflow-y-auto">
                <div className="mb-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Menu
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <NavLink
                        to="/dashboard/my_services"
                        className={({ isActive }) =>
                          `flex items-center space-x-4 text-gray-500 hover:text-white hover:bg-[#F3601A] px-4 py-3 rounded-lg ${
                            isActive ? "bg-[#F3601A] text-white" : ""
                          }`
                        }
                      >
                        <div className="flex items-center space-x-4">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>My Services</span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/add_services"
                        className={({ isActive }) =>
                          `flex items-center space-x-4 text-gray-500 hover:text-white hover:bg-[#F3601A] px-4 py-3 rounded-lg ${
                            isActive ? "bg-[#F3601A] text-white" : ""
                          }`
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Add Services</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/my_bookings"
                        className={({ isActive }) =>
                          `flex items-center space-x-4 text-gray-500 hover:text-white hover:bg-[#F3601A] px-4 py-3 rounded-lg ${
                            isActive ? "bg-[#F3601A] text-white" : ""
                          }`
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>My Bookings</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>
          <div className="space-y-5 w-full">
            <div className="flex items-center justify-between p-5 rounded-2xl shadow bg-white/5">
              <div>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 text-gray-500 hover:text-white hover:bg-gray-100 rounded-lg lg:hidden"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {loading ? (
                <div class="loader">
                  <span class="loader-text">loading</span>
                  <span class="load"></span>
                </div>
              ) : (
                <div className="flex items-center space-x-6">
                  <div className="relative group">
                    <button className="flex items-center space-x-3 focus:outline-none cursor-pointer">
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-500">
                          {user?.displayName}
                        </p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={
                            user?.photoURL || "https://via.placeholder.com/40"
                          }
                          alt={user?.displayName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-600 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div className="absolute right-0 mt-2 w-56 bg-white/10 z-50 rounded-lg shadow p-2 invisible group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-200 pointer-events-none">
                      <ul className="space-y-1">
                        <li>
                          <NavLink
                            to="/dashboard/my_profile"
                            className={({ isActive }) =>
                              `flex items-center space-x-4 text-gray-500 hover:text-white hover:bg-[#F3601A] px-4 py-3 rounded-lg ${
                                isActive ? "bg-[#F3601A] text-white" : ""
                              }`
                            }
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span>My Profile</span>
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to="/dashboard/home"
                            className={({ isActive }) =>
                              `flex items-center space-x-4 text-gray-500 hover:text-white hover:bg-[#F3601A] px-4 py-3 rounded-lg ${
                                isActive ? "bg-[#F3601A] text-white" : ""
                              }`
                            }
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            <span>Dashboard Home</span>
                          </NavLink>
                        </li>

                        <li>
                          <button
                            onClick={handleSignoutUser}
                            className="flex cursor-pointer items-center space-x-4 w-full text-gray-500 hover:text-white hover:bg-[#F3601A] px-4 py-3 rounded-lg text-left"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1"
                              />
                            </svg>
                            <span>Logout</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white/5 w-full min-h-screen shadow p-5 rounded-2xl">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
