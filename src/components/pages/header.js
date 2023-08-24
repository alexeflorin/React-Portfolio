import React from 'react';
import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads


const styles = {
    headerStyle: {
        background: 'red',
    },
    headingStyle: {
        fontSize: '100px',
    },
};

// We use JSX curly braces to evaluate the style object

function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Florin Alexe`s Portfolio</h1>

        </header>
    );
}

export default Header;