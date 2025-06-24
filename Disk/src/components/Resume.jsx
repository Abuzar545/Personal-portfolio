import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-2">ABUZAR GHAFFARI</h1>
      <p className="mb-2">📞 +92-313-9505529 | 📧 aghafari545@gmail.com</p>
      <p className="mb-4">
        🔗 <a href="https://www.linkedin.com/in/abuzar-ghaffari-2a050927b/" className="text-blue-600" target="_blank" rel="noreferrer">LinkedIn</a> | 💻 <a href="https://github.com/Abuzar545" className="text-blue-600" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Profile</h2>
        <p>
          Passionate <strong>ReactJS Developer</strong> with a strong background in front-end web development. Proficient in creating dynamic and responsive user interfaces using <strong>ReactJS</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. Quick learner, highly motivated, and committed to writing clean and efficient code. Known for attention to detail, collaboration skills, and eagerness to adopt the latest industry trends and best practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <h3 className="text-xl font-bold">Web Development Intern</h3>
        <p className="italic">National Center of Artificial Intelligence, Peshawar | Sep 2022 – Apr 2023</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Collaborated with UI/UX designers to build clean and intuitive interfaces.</li>
          <li>Maintained optimal development workflow for various web projects.</li>
          <li>Assisted senior developers with large-scale design projects.</li>
          <li>Completed front-end and back-end development tasks.</li>
          <li>Implemented responsive design principles for cross-device compatibility.</li>
          <li>Contributed to testing, debugging, and optimization for performance.</li>
          <li>Integrated third-party APIs and developed dynamic content.</li>
          <li>Conducted quality assurance tests to enhance usability.</li>
          <li>Built a ReactJS-based project: <a href="https://realestatebyafnan.pages.dev/" className="text-blue-600" target="_blank" rel="noreferrer">Real Estate Project</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc ml-6">
          <li><strong>BS Information Technology</strong> – The University of Agriculture, Peshawar (2021 – 2025)</li>
          <li><strong>FSc Pre-Engineering</strong> – The Pearl College, Nowshera (2018 – 2020)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc ml-6 grid grid-cols-2 gap-x-6">
          <li>ReactJS</li>
          <li>Tailwind CSS</li>
          <li>HTML & CSS</li>
          <li>JavaScript & Bootstrap 5</li>
          <li>Git & GitHub</li>
          <li>PHP</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc ml-6">
          <li>Web Development Certificate – ENCODER @ BYTES</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Workshops & Awards</h2>
        <ul className="list-disc ml-6">
          <li>Cyber Security for IoT and Devices</li>
          <li>Emerging Cyber Security Threats</li>
          <li>Industrial Trends in Web Development</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
