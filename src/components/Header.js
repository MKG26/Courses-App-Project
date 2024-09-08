import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg">
      <div className="ml-10">
        <img className="w-[100px] m-3  " src={LOGO_URL} alt="logo" />
      </div>

      <div className="mr-20">
        <ul className="flex m-4">
          <Link to="/">
            <li className="p-3">Home</li>
          </Link>
          <Link to="/dashboard">
            <li className="p-3">My Dashboard</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
