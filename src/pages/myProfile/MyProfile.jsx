import React, { useContext, useRef } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import toast from "react-hot-toast";
import { useLoading } from "../../Hooks/useLoading";
import Loading from "../../components/Loading/Loading";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ProfileSkeleton from "../../components/Dashboard/ProfileSkeleton";

const MyProfile = () => {
  const { user, updateProfileUser, setLoading } = useContext(AuthContext);
  const { loading1 } = useLoading();
  const modalRef = useRef();
  const handleProfileUpdateUser = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    if (displayName.length < 5)
      return toast.error("Name must be at least 5 characters.");
    updateProfileUser(displayName, photoURL)
      .then(() => {
        setLoading(false);
        toast.success("Update successful");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
    modalRef.current.close();
  };

  if (loading1) {
    return <ProfileSkeleton></ProfileSkeleton>;
  }

  return (
    <div>
      <div className="min-h-screen shadow dark:bg-gray-900">
        <div className="h-48 bg-linear-to-r from-[#0058DD] to-[#F3601A] relative rounded-2xl">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-8 border-white dark:border-gray-900 shadow-2xl"
              />
              <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="text-center mt-20 mb-8">
            <h1 className="text-3xl font-bold text-[#F3601A]">
              {user?.displayName || "User Name"}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="flex items-center text-gray-500">
                <MdMarkEmailUnread className="mr-2" />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user?.emailVerified
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  }`}
                >
                  {user?.emailVerified ? "Verified" : "Not Verified"}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" shadow dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#F3601A] flex items-center gap-2">
                  <div className="w-2 h-6 bg-[#F3601A] rounded-full"></div>
                  Personal Information
                </h2>
                <button
                  onClick={() => modalRef.current.showModal()}
                  className="btn border-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD] px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaEdit size={16} /> Edit
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <p className="text-gray-500 font-medium text-lg">
                    {user?.displayName || "Not set"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <p className="text-gray-500 font-medium">{user?.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <p className="text-gray-500 font-medium">
                    {user?.phoneNumber || "Not provided"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    User Role
                  </label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0058DD]/10 text-[#0058DD] dark:bg-[#0058DD]/20">
                    Default User
                  </span>
                </div>
              </div>
            </div>

            <div className=" dark:bg-gray-800 rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold text-[#0058DD] flex items-center gap-2 mb-6">
                <div className="w-2 h-6 bg-[#0058DD] rounded-full"></div>
                Account Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    User ID
                  </label>
                  <p className="text-gray-500 font-mono text-sm break-all">
                    {user?.uid}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Account Created
                  </label>
                  <p className="text-gray-500 dark:text-white font-medium">
                    {user?.metadata?.creationTime
                      ? new Date(user.metadata.creationTime).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )
                      : "N/A"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Login
                  </label>
                  <p className="text-gray-500 font-medium">
                    {user?.metadata?.lastSignInTime
                      ? new Date(
                          user.metadata.lastSignInTime
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Account Status
                  </label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleProfileUpdateUser}>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                defaultValue={user?.displayName}
                name="name"
                required
                placeholder="Name"
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                className="input w-full"
                defaultValue={user?.photoURL}
                name="photoURL"
                required
                placeholder="Photo URL"
              />

              <button className="btn border-2 mt-3 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">
                Click to confirm Edit
              </button>
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button className="btn w-full">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;
