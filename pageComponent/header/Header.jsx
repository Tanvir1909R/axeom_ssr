
import "./header.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="container border">
      <div className="headerWrapper">
        <div className="header_contact">
          <div className="contact">
            <div>
              <FaMapMarkerAlt />
            </div>
            <p>1025 Hollywood Blvd, LA</p>
          </div>
          <div className="contact">
            <div>
              <BsFillTelephoneFill />
            </div>
            <p>+84) 0123 4567 8</p>
          </div>
          <div className="contact">
            <div>
              <AiOutlineMail />
            </div>
            <p>jwsthemes@gmail.com</p>
          </div>
        </div>
        <div className="login_Sec">
            <HiOutlineShoppingBag />
            <CiSearch />
            <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
