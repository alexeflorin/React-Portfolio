import React from "react";
import '../styles/style.css';

import resumeTest from '../../assets/resume-test.docx';

function Resume () {
    return (
<div>
    <section id="start" className="resume">

        <div className="flex-row">
            <h2>My Resume</h2>
        </div>

        <div className="flex-row">
            <div>
                <button ref={resumeTest} className="btn" type="download">
                    Download Resume
                </button>
            </div>
        </div>

    </section>


    <article>
            <h2>Developer Proficiencies</h2>
            <div>
                <p>
                    Front End
                </p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Command Line and Git</li>
                    <li>JavaScript</li>
                    <li>Web-APIs</li>
                    <li>Bootstrap</li>
                </ul>

                <p>
                    Back End
                </p>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>ORM - Object Relational Mapping</li>
                    <li>MVC - Model View Controller</li>
                </ul>

                <p>
                    Performance
                </p>
                <ul>
                    <li>NoSQL</li>
                    <li>PWA - Progressive Web Applications</li>
                    <li>MangoDB</li>
                    <li>Mongoose</li>
                    <li>React</li>
                    <li>GraphQL</li>

                </ul>


                <p>
                    A successful web developer is one that knows that there's always room to grow and learn.
                </p>
            </div>
    </article>


</div>
    )

}

export default Resume;

