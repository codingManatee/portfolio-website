const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CodingManatee 🫧🦭</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Contact Me</a>
          </li>
          <li>
            <details>
              <summary>More</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Project</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
