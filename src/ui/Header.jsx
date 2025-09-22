import SearchOrder from "@/features/order/SearchOrder";
import UserName from "@/features/user/UserName";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest uppercase">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
