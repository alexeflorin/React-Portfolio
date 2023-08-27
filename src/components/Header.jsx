
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
            <nav>
                <a href="/about">About</a>
            </nav>

        </header>
    );
}

export default Header;