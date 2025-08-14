
function Footer() {
  return (
<footer className="w-full min-h-[300px] mt-20 bg-neutral-900">
  <div className="container mx-auto">
    <div className="block text-center md:text-start md:flex justify-between h-full text-white p-10 content-footer">

      {/* About / Contact Info */}
      <div className="w-full md:w-[30%] h-[100%]">
        <h2 className="text-2xl font-bold block">Our Team Directory</h2>
        <p className="my-3 text-gray-300">
          A platform to showcase our team members in an organized way, including names, emails, and essential details for each member.
        </p>
        <p className="my-3"><span className="font-bold">Phone</span>: +20 123 456 7890</p>
        <p><span className="font-bold">Email</span>: info@company.com</p>
      </div>

      {/* Quick Links */}
      <div className="w-full md:w-[30%] h-[100%] mt-8">
        <h1 className="text-3xl font-bold">Quick Links</h1>
        <p className="my-4"><a href="#team" className="hover:text-blue-400 transition">Team Members</a></p>
        <p className="mb-4"><a href="#about" className="hover:text-blue-400 transition">About Us</a></p>
        <p><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></p>
      </div>

      {/* Additional Info */}
      <div className="w-full md:w-[30%] h-[100%] mt-8">
        <h1 className="text-3xl font-bold">Additional Information</h1>
        <p className="my-4 text-gray-300">
          We are committed to providing accurate and up-to-date information about all our team members to improve communication and collaboration.
        </p>
      </div>

    </div>
  </div>
  <div className="bg-neutral-800 text-white text-center p-4 text-sm copy">
    &copy; 2025 Company Name. All rights reserved.
  </div>
</footer>

  );
}

export default Footer;
