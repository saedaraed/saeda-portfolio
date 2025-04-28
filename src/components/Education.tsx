const Education:React.FC =()=>{
    return(
<section id="education" className="py-20 px-8 md:px-16 bg-[#121212]">
        <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>

        <div className="max-w-3xl mx-auto bg-[#1A1A1A] p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="w-24 h-24 bg-[#232323] rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-4xl text-white"></i>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold">BSc Software Engineering</h3>
              <p className="text-gray-400 mt-2">University of Palestine</p>
              <p className="text-gray-500 font-mono mt-1">09/2017 – 02/2022</p>
              <p className="text-gray-400 italic mt-1">Gaza Strip, Palestine</p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#232323] px-3 py-2 rounded text-sm text-gray-300">
                    Web Development
                  </div>
                  <div className="bg-[#232323] px-3 py-2 rounded text-sm text-gray-300">
                    UI/UX Design
                  </div>
                  <div className="bg-[#232323] px-3 py-2 rounded text-sm text-gray-300">
                    Data Structures
                  </div>
                  <div className="bg-[#232323] px-3 py-2 rounded text-sm text-gray-300">
                    Algorithms
                  </div>
                  <div className="bg-[#232323] px-3 py-2 rounded text-sm text-gray-300">
                    Software Engineering
                  </div>
                  <div className="bg-[#232323] px-3 py-2 rounded text-sm text-gray-300">
                    Database Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Education;