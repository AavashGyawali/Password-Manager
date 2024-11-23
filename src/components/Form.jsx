import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const Form = ({ form, handleChange, showPassword, togglePassword }) => {
  return (
    <div className="input flex flex-col gap-6">
      <input
        type="text"
        name="website"
        placeholder="Enter Website URL"
        value={form.website}
        onChange={handleChange}
        className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <div className="flex gap-4  items-center">
        <input
          type="text"
          value={form.username}
          name="username"
          onChange={handleChange}
          placeholder="Enter UserName"
          className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            name="password"
            placeholder="Enter Password"
            className="mt-1 block  px-4 pr-8  py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            className="absolute right-2 top-[0.97rem] cursor-pointer"
            onClick={togglePassword}
          />
        </div>
      </div>
    </div>
  );
};
Form.propTypes = {
  form: PropTypes.shape({
    website: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  togglePassword: PropTypes.func.isRequired,
};

export default Form;
