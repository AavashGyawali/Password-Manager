import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Manager = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>{" "}
      <div className="py-16 container mx-auto flex flex-col items-center gap-6 ">
        <div className="text flex flex-col items-center">
          <div className="logo font-semibold text-4xl cursor-pointer">
            <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-red-400">Manager</span>
            <span className="text-green-500"> /&gt;</span>
          </div>
          <p className="text-slate-900">Password Manager for you</p>
        </div>
        <div className="input flex flex-col gap-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Website URL"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter UserName"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
        </div>
        <div className="button bg-red-300 px-6 py-2 rounded-full hover:bg-red-400 cursor-pointer  outline-red-500 flex gap-2 items-center">
          <FontAwesomeIcon icon={faPlus} />
          Add Password
        </div>
      </div>
    </>
  );
};

export default Manager;
