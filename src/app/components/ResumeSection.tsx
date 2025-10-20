import Image from "next/image";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        
        <div className="max-w-4xl mx-auto bg-background/20 p-8 rounded-lg border border-gray-200 transition-all duration-300">
          {/* Resume Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="/SpencerMines_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-md border border-solid border-blue-600 transition-colors bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 font-medium text-base h-12 px-6 sm:px-8"
            >
              <div className="w-5 h-5 relative">
                <Image 
                  src="/download.svg" 
                  alt="Download" 
                  width={24} 
                  height={24} 
                  className="w-full h-full" 
                />
              </div>
              Download Resume
            </a>
            <a
              href="/SpencerMines_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-solid border-blue-600 transition-colors bg-transparent text-blue-600 hover:bg-blue-50 font-medium text-base h-12 px-6 sm:px-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              View Resume
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-12 pb-8 border-b border-gray-300">
            <h1 className="text-5xl font-bold text-white mb-4">Spencer Mines</h1>
            <div className="text-gray-300 text-lg flex flex-wrap justify-center items-center gap-2">
              <span>Huntington, NY</span>
              <span className="text-gray-500">•</span>
              <span>(631) 479-8088</span>
              <span className="text-gray-500">•</span>
              <span>spencermines1@gmail.com</span>
              <span className="text-gray-500">•</span>
              <a href="https://www.linkedin.com/in/spencer-mines/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>
              <span className="text-gray-500">•</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Portfolio</a>
            </div>
          </div>
          
          {/* Education */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              EDUCATION
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <div className="mb-3">
                  <h4 className="text-xl font-semibold text-white mb-2">Binghamton University, SUNY | School of Computing</h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-blue-400 font-medium">Bachelor of Science in Computer Science</p>
                    <p className="text-gray-300 text-sm font-medium">Graduated Spring 2025</p>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed"><span className="font-semibold text-white">Relevant Coursework:</span> High Performance Computing, Discrete Mathematics, Computer Vision, Operating Systems, Linear Algebra, Software Engineering, Design Patterns</p>
              </div>
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              TECHNICAL SKILLS
            </h3>
            <div className="bg-white/10 p-6 rounded-lg border border-gray-200 space-y-3">
              <div className="space-y-2">
                <p className="text-gray-200 leading-relaxed"><span className="font-semibold text-white">Languages:</span> Python, Java, C/C++, SQL, JavaScript/TypeScript, HTML/CSS</p>
                <p className="text-gray-200 leading-relaxed"><span className="font-semibold text-white">Frameworks and Software:</span> React, Next.js, Tailwind, Flask, AWS, Docker, Git, Linux</p>
              </div>
            </div>
          </div>
          
          {/* Software Engineering Experience */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              SOFTWARE ENGINEERING EXPERIENCE
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">Teidore</h4>
                    <p className="text-gray-300 text-sm font-medium">Chicago, IL (Remote)</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-400 text-sm font-medium"><em>Software Engineer Intern</em></p>
                    <p className="text-gray-300 text-sm font-medium">July 2025 – September 2025</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Developed a web-based platform to automate e-commerce product categorization and data integration, using React and Tailwind CSS for front-end development</li>
                  <li>Implemented AI-powered tools improving product filtering and recommendations across 50+ partner retailers</li>
                  <li>Collaborated with the founder to enhance data accuracy and platform scalability through Supabase and PostgresSQL schema optimizations</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Technical Experience */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              TECHNICAL EXPERIENCE
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Software Development and Systems</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Proficient in Java, Python, C++, and SQL with experience in full-stack development</li>
                  <li>Strong foundation in data structures (lists, stacks, queues, trees, heaps, hash tables) and algorithm design</li>
                  <li>Skilled in memory management, instruction set architecture, and cache optimization</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Artificial Intelligence and Machine Learning</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Studied AI agent design, search algorithms, knowledge representation, and planning techniques</li>
                  <li>Gained hands-on experience with natural language processing, computer vision, and robotics</li>
                  <li>Implemented Markov Decision Processes (MDPs), Q-learning agents, and Expectimax-based AI in adversarial games</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Project Experience */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              PROJECT EXPERIENCE
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">College Housing Platform</h4>
                    <p className="text-gray-300 text-sm font-medium">January 2025 – May 2025</p>
                  </div>
                  <p className="text-blue-400 text-sm font-medium">Technologies: Python, Node.js, React.js</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Developed a platform to streamline the housing and roommate search process for college students, providing an all-in-one solution for listings and roommate connections</li>
                  <li>Implemented an intuitive user interface featuring an interactive map, enabling users to explore housing options by location, price, and amenities</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">Exoplanet Database</h4>
                    <p className="text-gray-300 text-sm font-medium">October 2024 – December 2024</p>
                  </div>
                  <p className="text-blue-400 text-sm font-medium">Technologies: Python, SQL/Databases</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Developed a Flask-based web application to display, search, and explore a database of exoplanets with pagination and detailed views for each planet</li>
                  <li>Designed and implemented an SQLite database schema to store exoplanet information, including discovery details, host star data, and image URLs</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">Ideal Glycemic Control in Type 1 Diabetics</h4>
                    <p className="text-gray-300 text-sm font-medium">January 2023 – May 2023</p>
                  </div>
                  <p className="text-blue-400 text-sm font-medium">Watson College of Engineering</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Authored a comprehensive research paper on improving glycemic control in Type 1 Diabetics</li>
                  <li>Analyzed and compared two prominent control algorithms, specifically focusing on model predictive control and proportional integral derivative</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Additional Experience */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              ADDITIONAL EXPERIENCE
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">McCaffrey's Food Market</h4>
                    <p className="text-gray-300 text-sm font-medium">New Hope, PA</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-400 text-sm font-medium"><em>Supervisor</em></p>
                    <p className="text-gray-300 text-sm font-medium">June 2022 – Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Promoted from cashier to supervisor for consistently high performance and reliability; recognized as Employee of the Month while overseeing daily front-end operations and ensuring excellent customer service</li>
                  <li>Trained and managed a team of 5-10 cashiers, resolved escalated customer concerns, and maintained smooth store operations during peak hours</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              ACTIVITIES
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300 pb-6">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">JDRF Participant Advisory Council</h4>
                    <p className="text-gray-300 text-sm font-medium">Binghamton, NY</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-400 text-sm font-medium"><em>Member</em></p>
                    <p className="text-gray-300 text-sm font-medium">March 2024 - Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-200 leading-relaxed">
                  <li>Championed broader awareness and education of Type 1 Diabetes, galvanizing support for groundbreaking research, and fostering a deeper understanding of life as a Type 1 Diabetic</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
} 