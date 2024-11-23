import Table from "./Table";
import Form from "./Form";
import Background from "./Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ website: "", username: "", password: "" });
  const [passwords, setPasswords] = useState([]);
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);

  //To get saved form data from local storage
  useEffect(() => {
    const savedPasswords = localStorage.getItem("localPasswords");
    if (savedPasswords) {
      setPasswords(JSON.parse(savedPasswords));
    }
  }, []);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function savePassword(id = null) {
    if (form.website === "" || form.username === "" || form.password === "") {
      toast.error("Please Completely Fill the Forum", {
        position: "top-right",
      });

      return;
    }
    setSave(true);

    if (
      passwords.some(
        (password) =>
          password.website === form.website &&
          password.username === form.username
      ) &&
      !edit
    ) {
      toast.warn("Already added", {
        position: "top-right",
      });
      return;
    }

    const unique_id = uuidv4();
    setPasswords([...passwords, { ...form, id: unique_id }]);
    localStorage.setItem(
      "localPasswords",
      JSON.stringify([...passwords, { ...form, id: unique_id }])
    );
    toast.success("Password Saved", { position: "top-right" });
    console.log(unique_id);

    setForm({ website: "", username: "", password: "" });

    if (edit && save) {
      setPasswords(passwords.filter((password) => password.id !== id));
      localStorage.setItem("localPasswords", JSON.stringify(passwords));
      setEdit(false);
    }
    setSave(false);
  }

  return (
    <>
      <ToastContainer />
      <Background />
      <div className="py-20 sm:container sm:mx-auto flex flex-col justify-center w-full items-center gap-10 ">
        <div className="text flex flex-col 2xl:gap-4 items-center">
          <div className=" logo font-semibold text-2xl sm:text-4xl cursor-pointer 2xl:text-6xl">
            <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-red-400">Manager</span>
            <span className="text-green-500"> /&gt;</span>
          </div>
          <p className="text-slate-900 2xl:text-2xl">
            Password Manager for you
          </p>
        </div>
        <Form
          togglePassword={togglePassword}
          form={form}
          handleChange={handleChange}
          showPassword={showPassword}
        />

        <button
          className="flex gap-3 justify-center items-center bg-red-300 px-4 py-2 rounded-full hover:bg-red-400"
          onClick={savePassword}
        >
          <FontAwesomeIcon icon={faPlus} />
          Save Password
        </button>
        <Table
          passwords={passwords}
          setPasswords={setPasswords}
          form={form}
          setForm={setForm}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </>
  );
};

export default Manager;
