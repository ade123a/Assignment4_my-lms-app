import React, { useState, useEffect } from "react";
import courses from "../data/courses";
import testimonials from "../data/testimonial";

const MainSection = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);

  useEffect(() => {
    setFeaturedCourses(courses.sort(() => 0.5 - Math.random()).slice(0, 3));
    setDisplayedTestimonials(testimonials.sort(() => 0.5 - Math.random()).slice(0, 2));
  }, []);

  return (
    <main>
      <section>
        <h2>About LMS</h2>
        <p>Welcome to our LMS, where students can explore and enroll in various courses.</p>
      </section>

      <section>
        <h2>Featured Courses</h2>
        <div className="courses-container">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.name} width="50" />
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p><strong>{testimonial.studentName}</strong> - {testimonial.courseName}</p>
              <p>"{testimonial.review}"</p>
              <p>Rating: {"★".repeat(testimonial.rating)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainSection;