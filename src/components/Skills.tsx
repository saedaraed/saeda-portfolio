import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Skills: React.FC = () => {
  const skillsChartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (skillsChartRef.current) {
      const chart = echarts.init(skillsChartRef.current);
      const option = {
        radar: {
          indicator: [
            { name: "React", max: 100 },
            { name: "Next.js", max: 100 },
            { name: "TypeScript", max: 100 },
            { name: "CSS/Tailwind", max: 100 },
            { name: "UI/UX", max: 100 },
            { name: "Performance", max: 100 },
          ],
          radius: "65%",
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [95, 90, 85, 95, 80, 85],
                name: "Skills",
                areaStyle: {
                  color: "rgba(99, 102, 241, 0.6)",
                },
                lineStyle: {
                  color: "#a78bfa",
                },
              },
            ],
          },
        ],
        animation: false,
      };
      chart.setOption(option);
      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        chart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <section id="skills" className="py-20 px-8 md:px-16 bg-[#0F0F0F]">
      <h2 className="text-4xl font-bold mb-16 text-center">Technical Skills</h2>

      {/* <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> */}
      {/* Frontend */}
      {/* <div className="bg-[#1A1A1A] p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">
              Frontend
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">React.js</span>
                  <span className="text-gray-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-white h-1.5 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Next.js</span>
                  <span className="text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-white h-1.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">React Native</span>
                  <span className="text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-white h-1.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">JavaScript/TypeScript</span>
                  <span className="text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-white h-1.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div ref={skillsChartRef} className="w-full h-80 md:h-96"></div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "React", icon: "fab fa-react", level: 95 },
            { name: "Next.js", icon: "fab fa-js-square", level: 90 },
            { name: "TypeScript", icon: "fab fa-js", level: 85 },
            { name: "Tailwind CSS", icon: "fab fa-css3", level: 95 },
            { name: "UI/UX Design", icon: "fas fa-paint-brush", level: 80 },
            {
              name: "Performance",
              icon: "fas fa-tachometer-alt",
              level: 85,
            },
          ].map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transform transition-all duration-300 hover:scale-105 "bg-gray-800 hover:bg-gray-700" `}
            >
              <div className="flex items-center mb-4">
                <i
                  className={`${skill.icon} text-2xl mr-3 "text-gray-400" `}
                ></i>
                <h3 className={`font-semibold "text-white"`}>{skill.name}</h3>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-700">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm font-medium">
                <span className="text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* </div> */}

      {/* Technologies Icons */}
      {/* <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-200">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-react text-4xl mb-2"></i>
              <span className="text-sm">React</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-js text-4xl mb-2"></i>
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-html5 text-4xl mb-2"></i>
              <span className="text-sm">HTML5</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-css3-alt text-4xl mb-2"></i>
              <span className="text-sm">CSS3</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-sass text-4xl mb-2"></i>
              <span className="text-sm">Sass</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-git-alt text-4xl mb-2"></i>
              <span className="text-sm">Git</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-npm text-4xl mb-2"></i>
              <span className="text-sm">npm</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-node-js text-4xl mb-2"></i>
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fab fa-figma text-4xl mb-2"></i>
              <span className="text-sm">Figma</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fas fa-mobile-alt text-4xl mb-2"></i>
              <span className="text-sm">React Native</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fas fa-code text-4xl mb-2"></i>
              <span className="text-sm">TypeScript</span>
            </div>
            <div className="flex flex-col items-center transition-all duration-300 hover:text-white text-gray-400">
              <i className="fas fa-palette text-4xl mb-2"></i>
              <span className="text-sm">UI/UX</span>
            </div>
          </div>
        </div> */}
    </section>
  );
};
export default Skills;
