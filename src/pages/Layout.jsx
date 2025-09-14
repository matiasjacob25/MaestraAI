import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">UserForm</Link>
          </li>
          <li>
            <Link to="/module">ModuleContent</Link>
          </li>
          <li>
            <Link to="/videos">VideoDemo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;