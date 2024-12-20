import { Link } from "react-router";


const Header = () => {
    return (
        <div>
            <br /><h2> <Link to={"/"}> Home</Link></h2><br /><br />
            <Link to={"/login"}> LogIn </Link> <br /><br />

        </div>
    );
};

export default Header;