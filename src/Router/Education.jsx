import React from 'react';


export default function Education() {
  return (
    <div className="education-page">
      <h1>EDUCATION</h1>

      <div className="edu-box">
        <span className="edu-title">SSLC - 93%</span>
        <span className="edu-school">Sri Ramakrishna Matric Higher Secondary School</span>
        <span className="edu-year">2016 - 2017</span>
      </div>

      <div className="edu-box">
        <span className="edu-title">HSC - 64%</span>
        <span className="edu-school">Sri Ramakrishna Matric Higher Secondary School</span>
        <span className="edu-year">2018 - 2019</span>
      </div>

      <div className="edu-box">
        <span className="edu-title">B.Tech CSE - 8.15 CGPA</span>
        <span className="edu-school">Dr. M.G.R. University</span>
        <span className="edu-year">2019 - 2023</span>
      </div>
      <div className="certificates">
  <h2>CERTIFICATES</h2>

  <ul className="cert-list">
    <li>
      <h3><u>Core</u> <u>Java</u></h3>
      <p>
        Learned object-oriented programming concepts, exception handling, collections, and JDBC.
        Built small console-based applications and practiced real-time project scenarios.
      </p>
    </li>

    <li>
      <h3><u>SQL</u></h3>
      <p>
        Gained strong knowledge of database design, normalization, and writing complex queries using MySQL.
        Worked with joins, subqueries, and CRUD operations.
      </p>
    </li>

    <li>
      <h3><u>HTML</u> & <u>CSS</u> </h3>
      <p>
        Designed and developed responsive static web pages with semantic HTML and modern CSS styling techniques.
        Implemented layouts using Flexbox and Grid.
      </p>
    </li>
  </ul>
</div>
    </div>
  );
}
