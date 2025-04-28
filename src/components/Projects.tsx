import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-8 md:px-16 bg-[#1A1A1A]">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Project 1 */}
        <div className="bg-[#232323] rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
          <div className="h-48 overflow-hidden">
            <Image
              src="/project1.jpeg"
              alt="fakenetflix"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Fakenetflix Movies Platform
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Next.js
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Stripe
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Netflix-inspired movie streaming platform built using Next.js and
              TypeScript. It provides users with an immersive experience to
              browse and explore movies and TV shows with seamless
              authentication and a personalized watchlist.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://fakenetflix-ten.vercel.app/login"
                className="bg-white text-black px-4 py-2 rounded text-sm font-medium transition-colors duration-300 hover:bg-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/saedaraed/fakenetflix"
                className="border border-gray-600 px-4 py-2 rounded text-sm font-medium transition-colors duration-300 hover:border-white cursor-pointer !rounded-button whitespace-nowrap"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-[#232323] rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
          <div className="h-48 overflow-hidden">
            <Image
              src="/project2.jpeg"
              alt="dashboard"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Hotel management dashboard
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Html
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Css
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Javascript
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Hotel Management Dashboard Using Static Bootstrap.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://nzl.vercel.app/indexEn.html"
                className="bg-white text-black px-4 py-2 rounded text-sm font-medium transition-colors duration-300 hover:bg-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="border border-gray-600 px-4 py-2 rounded text-sm font-medium transition-colors duration-300 hover:border-white cursor-pointer !rounded-button whitespace-nowrap"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-[#232323] rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
          <div className="h-48 overflow-hidden">
            <Image
              src="/project3.jpeg"
              alt="blog site"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">FreePen Blog</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Next.js
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                Firebase
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Medium-style blog where users can write, edit, and read articles
              with rich-text markdown support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded text-sm font-medium transition-colors duration-300 hover:bg-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="border border-gray-600 px-4 py-2 rounded text-sm font-medium transition-colors duration-300 hover:border-white cursor-pointer !rounded-button whitespace-nowrap"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="border border-gray-600 hover:border-white px-6 py-3 text-sm tracking-wider transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap">
          VIEW ALL PROJECTS
        </button>
      </div>
    </section>
  );
};

export default Projects;
