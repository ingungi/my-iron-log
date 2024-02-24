const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-20 shadow-md">
        {/* Logo or App Name */}
        <h1 className="text-3xl">First Last</h1>
      </div>
      <ul className="flex flex-col py-4">
        {/* Navigation Items */}
        <li>
          <a
            href="/profile"
            className="flex items-center p-4 hover:bg-gray-700"
          >
            Profile
          </a>
        </li>
        <li>
          <a href="/goals" className="flex items-center p-4 hover:bg-gray-700">
            Goals
          </a>
        </li>
        <li>
          <a
            href="/schedule"
            className="flex items-center p-4 hover:bg-gray-700"
          >
            Schedule
          </a>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
