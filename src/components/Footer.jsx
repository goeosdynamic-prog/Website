import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[rgb(248,249,252)] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo + Description */}
          <div className="space-y-4">
            <img
              src="/Logo.png"
              alt="Company Logo"
              className="h-12 w-auto"
            />

            <p className="text-sm  leading-relaxed max-w-xs">
              Building modern, scalable, and intelligent EV technology
              that powers the future of mobility.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="transition">About</Link></li>
                <li><Link to="/services" className="transition">Services</Link></li>
                <li><Link to="/careers" className="transition">Careers</Link></li>
                <li><Link to="/contact" className="transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="transition">Home</Link></li>
                <li><a href="#" className="transition">Privacy Policy</a></li>
                <li><a href="#" className="transition">Terms & Conditions</a></li>
                <li><a href="#" className="transition">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium mb-3">Stay Updated</h3>
            <p className="text-sm mb-4">
              Get the latest updates about our EV technology.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Dynamic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
