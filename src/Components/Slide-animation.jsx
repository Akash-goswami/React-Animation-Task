import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function SlideAnimation() {
    const courses = [
        "MERN Stack Development",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Data Science with Python",
        "Machine Learning",
      ];
    
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
      }, []);
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="scrol-width-none text-3xl font-bold text-center text-gray-800 mb-8">Our Courses</h2>
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 ease-in-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-bold text-gray-800">{course}</h3>
          </li>
        ))}
      </ul>
    </div>
  </section>
  )
}
