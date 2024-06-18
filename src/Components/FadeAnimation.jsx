import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function FadeAnimation() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 100,
    onRest: () => setFlip(!flip),
  });
  return (
    <animated.div style={props}>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Left Side: Encouragement Message */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="scrol-width-none text-4xl font-bold text-gray-800 mb-4">
            Join Our MERN Stack Course
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Elevate your coding skills by learning the MERN Stack. Build dynamic
            web applications using MongoDB, Express.js, React, and Node.js. This
            course is designed for both beginners and experienced developers
            looking to enhance their skills.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Hands-on projects</li>
            <li>Experienced instructors</li>
            <li>Flexible learning schedule</li>
            <li>Comprehensive course materials</li>
          </ul>
          <p className="text-lg text-gray-600">
            Don't miss this opportunity to advance your career. Enroll now and
            start your journey towards becoming a proficient MERN Stack
            developer!
          </p>
        </div>
        {/* Right Side: Enrollment Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Course Enrollment Form
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
              />
            </div>
            <div className="mb-4">
              <label htmlFor="course" className="block text-gray-700">
                Course Name
              </label>
              <select
                id="course"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
              >
                <option>MERN Stack</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Full Stack Development</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="interest" className="block text-gray-700">
                Why are you interested in this course?
              </label>
              <textarea
                id="interest"
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </animated.div>
  );
}
