import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import "react-toastify/dist/ReactToastify.css";
const Table = ({ passwords, setPasswords, setForm }) => {
  function deletePassword(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const updatedPasswords = passwords.filter(
          (passwords) => passwords.id !== id
        );
        setPasswords(updatedPasswords);
        localStorage.setItem(
          "localPasswords",
          JSON.stringify(updatedPasswords)
        );
      } else return;
    });
  }

  function editPassword(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const passwordToEdit = passwords.find((password) => password.id === id);
        setForm(passwordToEdit);
        setPasswords(passwords.filter((password) => password.id !== id));
        localStorage.setItem("localPasswords", JSON.stringify(passwords));
      } else return;
    });
  }

  return (
    <>
      {passwords && passwords.length > 0 ? (
        <div className="relative overflow-x-auto rounded-md flex flex-row mx-2">
          <table className=" w-full sm:w-full text-sm text-left rtl:text-right text-black dark:text-black">
            <thead className=" text-xs text-white uppercase bg-white dark:bg-[#484848] dark:text-white">
              <tr>
                <th
                  scope="col"
                  className="px-2 sm:px-6 py-3 border border-gray-400"
                >
                  Website Name
                </th>
                <th
                  scope="col"
                  className="px-2 sm:px-6 py-3 border border-gray-400"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  className="px-2 sm:px-6 py-3 border border-gray-400"
                >
                  Password
                </th>
                <th
                  scope="col"
                  className="px-2 sm:px-6 py-3 border border-gray-400"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {passwords.map((passwords, index) => {
                return (
                  <tr
                    key={index}
                    className="border bg-white  dark:bg-gray-50 dark:border-gray-100"
                  >
                    <td className="px-2 sm:px-6 py-4 border border-gray-200">
                      <div className="flex flex-wrap items-center sm:justify-between gap-2">
                        <a
                          href={passwords.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-gray-500"
                        >
                          {passwords.website}
                        </a>

                        <FontAwesomeIcon
                          icon={faCopy}
                          size="lg"
                          className="cursor-pointer"
                          onClick={() => {
                            navigator.clipboard.writeText(passwords.website);
                            toast.success("Copied to Clipboard", {
                              position: "top-right",
                              icon: (
                                <FontAwesomeIcon
                                  icon={faCopy}
                                  size="xl"
                                  color="#07bc0c"
                                />
                              ),
                            });
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-4 border border-gray-200 ">
                      <div className="flex flex-wrap items-center sm:justify-between gap-2">
                        {passwords.username}
                        <FontAwesomeIcon
                          icon={faCopy}
                          className="cursor-pointer"
                          size="lg"
                          onClick={() => {
                            navigator.clipboard.writeText(passwords.username);
                            toast.success("Copied to Clipboard", {
                              position: "top-right",
                              icon: (
                                <FontAwesomeIcon
                                  icon={faCopy}
                                  size="xl"
                                  color="#07bc0c"
                                />
                              ),
                            });
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-4 border border-gray-200">
                      <div className="flex flex-wrap items-center sm:justify-between gap-2">
                        {passwords.password}
                        <FontAwesomeIcon
                          icon={faCopy}
                          size="lg"
                          className="cursor-pointer"
                          onClick={() => {
                            navigator.clipboard.writeText(passwords.password);
                            toast.success("Copied to Clipboard", {
                              position: "top-right",
                              icon: (
                                <FontAwesomeIcon
                                  icon={faCopy}
                                  size="xl"
                                  color="#07bc0c"
                                />
                              ),
                            });
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-4 border border-gray-200">
                      <div className="flex flex-wrap items-center sm:justify-between gap-2">
                        <FontAwesomeIcon
                          icon={faEdit}
                          size="lg"
                          className="cursor-pointer"
                          onClick={() => {
                            editPassword(passwords.id);
                          }}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="lg"
                          className="cursor-pointer"
                          onClick={() => {
                            deletePassword(passwords.id);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1>No Saved Password</h1>
        </div>
      )}
    </>
  );
};
Table.propTypes = {
  passwords: PropTypes.arrayOf(
    PropTypes.shape({
      website: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
  setPasswords: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
};

export default Table;
