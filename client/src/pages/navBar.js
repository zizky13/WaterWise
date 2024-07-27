const navBar = () => {
  return (
    <nav className="bg-white w-full p-5 flex items-center justify-between">
      <div className="flex-shrink-0">
        <a href="/">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </a>
      </div>
      <ul className="flex-1 flex space-x-4 items-center justify-center">
        <li>
          <a href="/" className="navLabel">Home</a>
        </li>
        <li>
          <a href="/about" className="navLabel">About</a>
        </li>
        <li>
          <a href="/dashboard" className="navLabel">Guide</a>
        </li>
      </ul>
      <div className="flex items-center">
        <a href="/SignIn" className="navLabel">Log In</a>
        <a href="/SignUp" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md no-underline font-sansab">Sign Up</a>
      </div>
    </nav>
  );
};

export default navBar;