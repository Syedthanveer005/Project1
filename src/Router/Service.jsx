import React from 'react';
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="service-container">
      
      <ul className="service-list">

        <li className="service-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2721/2721269.png" alt="frontend" />
          <h3>Front-End Projects</h3>
          <p>
            We create responsive, interactive, and beautiful user interfaces using React, HTML, CSS, and JavaScript.
          </p>
        </li>

        <li className="service-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2721/2721304.png" alt="backend" />
          <h3>Back-End Projects</h3>
          <p>
            Our backend solutions are secure and scalable, built with Node.js, Express, or Java-based frameworks.
          </p>
        </li>

        <li className="service-box">
          <img src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" alt="database" />
          <h3>Database Projects</h3>
          <p>
            We manage and optimize data with MySQL, MongoDB, and PostgreSQL, ensuring speed and reliability.
          </p>
        </li>

        <li className="service-box">
          <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" alt="fullstack" />
          <h3>Full Stack Projects</h3>
          <p>
            From front-end to back-end, we build complete full-stack applications that deliver end-to-end functionality.
          </p>
        </li>

      </ul>
      <Link to="/contact" className="contact-btn">
        Go to Contact Page
      </Link>
    </div>
  );
}
