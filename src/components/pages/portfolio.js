import React from "react";
import '../styles/style.css';

import profilePicture from "../../assets/pictureofme.png";
import sportStandings from "../../assets/Sport Standings Tracker.png";
import symphonyApp from "../../assets/Symphony.png";

function Portfolio () {
    return (

    <div className="Cool subtitle here">
    <main className="content">
        <aside id="about me">
            <img src="../../assets/pictureofme.png" alt="profile"/>
            <h2>About me</h2>
            <p> I have been spending about 15 years in the entertainment industry.</p>
        </aside>
        <div>
            <h2>Work</h2>
            <img src="../../assets/Sport%20Standings%20Tracker.png" alt="sport"/>
            <a href="https://juanx198522.github.io/Sport-Standings-Tracker/#">Sport Standing Tracker</a>
            <p>Sport Standings Tracker is an application that is providing live scores and standings from Soccer and Motoring.</p>


            <img src="../../assets/Symphony.png" alt="symphony"/>
            <a href="https://afternoon-beyond-90950-bfb89a24e69c.herokuapp.com/">Symphony2 Music Application</a>
            <p>Symphony is an application that its grants you access to millions of songs.</p>

        </div>
    </main>

        </div>
        );
}

export default Portfolio;