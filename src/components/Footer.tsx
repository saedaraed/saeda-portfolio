import Link from "next/link";

interface FooterProps {
    scrollToSection: (section: string) => void;
  }
  
const Footer:React.FC<FooterProps> = ({ scrollToSection })=>{
    return(
        <footer className="py-8 px-8 md:px-16 bg-[#090909] text-center">
        <div className="max-w-5xl mx-auto">
          <div className="text-2xl font-light text-gray-300 mb-6">
            <span className="font-bold text-white">S</span>M
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <Link
              href="https://www.linkedin.com/in/saeda-mgharee/"   target="_blank"

              className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer !rounded-button"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </Link>
            <Link
              href="https://github.com/saedaraed"   target="_blank"

              className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer !rounded-button"
            >
              <i className="fab fa-github text-lg"></i>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100008132744205"   target="_blank"

              className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer !rounded-button"
            >
       <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>            </Link>
       
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Saeda Mughari. All rights
            reserved.
          </p>
        </div>

        <button
          onClick={() => scrollToSection("home")}
          className="fixed bottom-8 right-8 w-10 h-10 bg-[#232323] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300 cursor-pointer !rounded-button"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </footer>
    )

}
export default Footer;