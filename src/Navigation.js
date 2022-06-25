const Navigation = ({ activeNavigation, setActiveNavigation }) => {
  return (
    <nav className="navigation">
      <ul
        className="navigation__lists"
        onClick={(e) => setActiveNavigation(e.target.dataset.navigationName)}
      >
        <li
          className={`navigation__list ${
            activeNavigation === "users" ? "navigation__list--active" : ""
          }`}
          data-navigation-name="users"
        >
          users
        </li>
        <li
          className={`navigation__list ${
            activeNavigation === "posts" ? "navigation__list--active" : ""
          }`}
          data-navigation-name="posts"
        >
          posts
        </li>
        <li
          className={`navigation__list ${
            activeNavigation === "comments" ? "navigation__list--active" : ""
          }`}
          data-navigation-name="comments"
        >
          comments
        </li>
      </ul>
    </nav>
  );
};

Navigation.defaultProps = {
  activeNavigation: "users",
};

export default Navigation;
