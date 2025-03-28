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
      <section></section>
      <section>
        <h2 style={{ textAlign: "center" }}>Featured Courses</h2>
        <div className="courses-container">
          <hr />
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Course Name</th>
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              {featuredCourses.map((course) => (
                <tr key={course.id}>
                  <td><img src={course.image} alt={course.name} width="100" /></td>
                  <td>{course.name}</td>
                  <td>{course.instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: "center" }}>Testimonials</h2>
        <div className="testimonials-container" style={{ textAlign: "center" }}>
          <hr />
          
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ margin: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", display: "inline-block" }}>
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