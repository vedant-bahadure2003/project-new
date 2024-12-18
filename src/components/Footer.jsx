import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">
      {/* Top Links */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-700 pb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MBBS Destination</h3>
            <ul className="space-y-2 text-gray-300">
              <li>➤ Study MBBS in Russia</li>
              <li>➤ Study MBBS in Belarus</li>
              <li>➤ Study MBBS in Georgia</li>
              <li>➤ Study MBBS in Mongolia</li>
              <li>➤ Study MBBS in China</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-2 text-gray-300">
              <li>➤ MBA</li>
              <li>➤ MBBS</li>
              <li>➤ Study Abroad</li>
              <li>➤ MBBS Abroad</li>
              <li>➤ MBBS Admission</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">References</h3>
            <ul className="space-y-2 text-gray-300">
              <li>➤ NMC</li>
              <li>➤ NBE</li>
              <li>➤ NEET</li>
              <li>➤ USMLE</li>
              <li>➤ WDOMs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-300">
              <strong>Head Office:</strong> Plot No 8, Block N, Second Floor,
              Opposite Axis Bank, Sector-18, Noida - 201301
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@eklavyaoverseas.com"
                className="text-blue-400"
              >
                contact@eklavyaoverseas.com
              </a>
            </p>
            <p className="text-gray-300">
              <strong>Support:</strong>{" "}
              <a href="tel:+919210120800" className="text-blue-400">
                +91-9210120800
              </a>
            </p>
          </div>
        </div>

        {/* Follow Us and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-3 text-2xl">
              <a href="#" className="hover:text-yellow-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaPinterestP />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Terms & Policies */}
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-gray-300">
            <a href="#" className="hover:text-yellow-500">
              Terms
            </a>
            <a href="#" className="hover:text-yellow-500">
              Disclaimer
            </a>
            <a href="#" className="hover:text-yellow-500">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Blog */}
        <div className="text-center mt-6 text-gray-400">
          <p>
            <strong>Read our Blog:</strong>{" "}
            <a
              href="https://www.eklavyaoverseas.com/blogs/"
              className="text-blue-400 hover:underline"
            >
              https://www.eklavyaoverseas.com/blogs/
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
