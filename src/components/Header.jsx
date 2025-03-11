const Header = () => {
    return (
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">EduTech</h1>
        <div className="space-x-4">
          <button className="text-blue-600 hover:underline">Log In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  