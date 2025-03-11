const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 border-t mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        
        {/* Left Column — Empty spacer */}
        <div></div>

        {/* Center Column — Resources */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Sign Up</a>
            <a href="#" className="hover:underline">FAQ</a>
          </div>
        </div>

        {/* Right Column — Company */}
        <div className="flex flex-col items-end">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Teams</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Take Down Notice</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} EduTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
