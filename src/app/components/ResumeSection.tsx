import Image from "next/image";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        
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
          
          {/* Education */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Binghamton University, SUNY | School of Computing</h4>
                <p className="text-sm text-gray-300 mb-2">Graduated Spring 2025</p>
                <p className="text-white">Bachelor of Science in Computer Science</p>
                <p className="text-white mt-2">Relevant Coursework: Artificial Intelligence, High Performance Computing, Discrete Mathematics, Computer Vision, Operating Systems, Linear Algebra, Software Engineering, Design Patterns</p>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Technical Skills
            </h3>
            <div className="bg-white/10 p-4 rounded-md border border-gray-200 space-y-2">
              <p className="text-white"><span className="font-semibold">Languages:</span> Java, Python, C, C++, SQL, HTML</p>
              <p className="text-white"><span className="font-semibold">Frameworks and Software:</span> Next.js, AWS, React, Git, Docker, Linux, Windows, MacOS, Microsoft</p>
            </div>
          </div>
          
          {/* Work Experience */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Work Experience
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">McCaffrey's Food Market</h4>
                <p className="text-sm text-gray-300 mb-2">New Hope, PA • Cashier • June 2022 – Present</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Managed financial transactions and processed customer payments to execute the sale of goods in an efficient manner</li>
                  <li>Recognized for exceptional customer service and consistently exceeding customer satisfaction goals</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Dickinson Area Office</h4>
                <p className="text-sm text-gray-300 mb-2">Binghamton, NY • Front Desk Position • September 2021 - May 2025</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Maintained and organized keys for residents of the Dickinson Community at Binghamton University</li>
                  <li>Answered phone calls from students and parents concerning questions or problems about residential life</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Technical Experience */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path>
              </svg>
              Technical Experience
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Software Development and Systems</h4>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Proficient in Java, Python, C++, and SQL with experience in full-stack development</li>
                  <li>Strong foundation in data structures (lists, stacks, queues, trees, heaps, hash tables) and algorithm design</li>
                  <li>Skilled in memory management, instruction set architecture, and cache optimization</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Artificial Intelligence and Machine Learning</h4>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Studied AI agent design, search algorithms, knowledge representation, and planning techniques</li>
                  <li>Gained hands-on experience with natural language processing, computer vision, and robotics</li>
                  <li>Implemented Markov Decision Processes (MDPs), Q-learning agents, and Expectimax-based AI in adversarial games</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Projects section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5 text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Project Experience
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Portfolio Website</h4>
                <p className="text-sm text-gray-300 mb-2">Technologies: Next.js, TypeScript, TailwindCSS • March 2025 – Present</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Designed and developed a responsive portfolio website to showcase projects and skills</li>
                  <li>Implemented interactive UI elements and animations to enhance user experience and engagement</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">College Housing Platform</h4>
                <p className="text-sm text-gray-300 mb-2">Technologies: Docker, Node.js, React.js • January 2025 – May 2025</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Developed a platform to streamline the housing and roommate search process for college students, providing an all-in-one solution for listings and roommate connections</li>
                  <li>Implemented an intuitive user interface featuring an interactive map, enabling users to explore housing options by location, price, and amenities</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Exoplanet Database</h4>
                <p className="text-sm text-gray-300 mb-2">Technologies: Python, SQL/Databases • October 2024 – December 2024</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Developed a Flask-based web application to display, search, and explore a database of exoplanets with pagination and detailed views for each planet</li>
                  <li>Designed and implemented an SQLite database schema to store exoplanet information, including discovery details, host star data, and image URLs</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Ideal Glycemic Control in Type 1 Diabetics</h4>
                <p className="text-sm text-gray-300 mb-2">Watson College of Engineering • January 2023 – May 2023</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Authored a comprehensive research paper on improving glycemic control in Type 1 Diabetics</li>
                  <li>Analyzed and compared two prominent control algorithms, specifically focusing on model predictive control and proportional integral derivative</li>
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
              Activities
            </h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">JDRF Participant Advisory Council</h4>
                <p className="text-sm text-gray-300 mb-2">Binghamton, NY • Member • March 2024 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Championed broader awareness and education of Type 1 Diabetes, galvanizing support for groundbreaking research, and fostering a deeper understanding of life as a Type 1 Diabetic</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-1.5 top-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <h4 className="text-xl font-semibold">Centenary United Methodist Church</h4>
                <p className="text-sm text-gray-300 mb-2">Lambertville, NJ • Volunteer • April 2023 – August 2023</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Dedicated volunteer work at the soup kitchen, providing essential support to individuals facing food insecurity within the community</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
} 