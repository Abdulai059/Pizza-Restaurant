import SearchOrder from "@/features/order/SearchOrder";
import UserName from "@/features/user/UserName";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest uppercase md:text-3xl">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
