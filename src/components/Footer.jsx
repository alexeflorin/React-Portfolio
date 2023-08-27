// import React from 'react';
// import '../styles/Footer.css';
// import {VscGithubAlt} from "react-icons/vsc";
// import {AiOutlineLinkedin} from "react-icons/ai";

// By importing the Section.css file, it is added to the DOM whenever this component loads


const styles = {
    sectionStyles: {
        background: 'orange',
    },
};


function Footer() {
    return (
        <footer>
            <h2>Florin Alexe</h2>
            <p>
                <ul>
                    <a href="https://github.com/alexeflorin/React-Portfolio">
                        <li className="logo">
                            {/* <VscGithubAlt /> */}
                        </li>
                    </a>
                    <a href="www.linkedin.com/in/florin-alexe-6105aab8">
                        <li className="logo">
                            {/* <AiOutlineLinkedin /> */}
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}

export default Footer;