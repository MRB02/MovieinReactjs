import '../index.css'
export default function Header() {
  return (
      <nav>
        <div className="nav-wrapper header-nav z-depth-2 #00897b teal darken-1">
          <a href="#logo" className="brand-logo">
             React
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#react">Movie</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
