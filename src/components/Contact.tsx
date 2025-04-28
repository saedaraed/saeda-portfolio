import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-8 md:px-16 bg-[#0F0F0F]">
      <h2 className="text-4xl font-bold mb-16 text-center">Get In Touch</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#232323] rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-mono">Saedaraed19@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#232323] rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>{" "}
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-mono">+970 595474936</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#232323] rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Gaza Strip, Palestine</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/saeda-mgharee/"   target="_blank"

              className="w-10 h-10 bg-[#232323] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300 cursor-pointer !rounded-button"
            >
                         <i className="fab fa-linkedin-in"></i>

            </Link>
            <Link
              href="https://github.com/saedaraed"   target="_blank"

              className="w-10 h-10 bg-[#232323] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300 cursor-pointer !rounded-button"
            >
                       <i className="fab fa-github"></i>

            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100008132744205"   target="_blank"

              className="w-10 h-10 bg-[#232323] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300 cursor-pointer !rounded-button"
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
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#232323] border-none rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#232323] border-none rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-[#232323] border-none rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#232323] border-none rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-300 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
