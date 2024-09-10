import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="bg-black-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {/* Logo and About Section */}
            <div className="flex-1">
              <Link to="/">
                <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
              </Link>
              <p className="text-sm">
                Providing the best services and products. Connect with us on
                social media!
              </p>
            </div>

            {/* Links Section */}
            <div className="flex-1 grid grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold mb-3 text-white">Quick Links</h5>
                <ul>
                  <li className="mb-2">
                    <Link to="#" className="hover:text-white text-sm">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="hover:text-white text-sm">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="hover:text-white text-sm">
                      Services
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="hover:text-white text-sm">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h5 className="font-semibold mb-3 text-white">Contact Us</h5>
                <p className="text-sm mb-2">123 Main Street, City, Country</p>
                <p className="text-sm mb-2">Email: info@example.com</p>
                <p className="text-sm mb-2">Phone: +123 456 7890</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex-1 flex justify-center md:justify-end gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
