import { Link } from "@remix-run/react";
import Logo from "../logo";

const Header = ({ variant }: { variant: string }) => {
  return (
    <div className="flex bg-white border-b">
      <nav className="container p-4 lg:p-3 flex items-center justify-start gap-5 mx-auto">
        <Link to="/">
          <Logo variant="mainblack" width={220} height={220} />
        </Link>
        <div className="text-black font-normal text-xl italic">X</div>
        <Logo variant={variant} width={120} height={120} />
      </nav>
    </div>
  );
};

export default Header;
