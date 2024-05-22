import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img
          src="https://example.com/logo.png"
          alt="Logo"
          style={{ height: "50px" }}
        />
      </div>
      <div style={styles.rightSection}>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Home</li>
            <li style={styles.navItem}>Services</li>
            <li style={styles.navItem}>Blog</li>
            <li style={styles.navItem}>Support</li>
          </ul>
        </nav>
        <div style={styles.search}>
          <input type="text" placeholder="Search" style={styles.searchInput} />
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "white",
    padding: "20px",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    marginRight: "auto", // Pushes the logo to the left
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  nav: {
    textAlign: "center",
    marginRight: "10px", // Adjust spacing between navigation and search bar
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
  },
  navItem: {
    marginRight: "10px", // Space between navigation items
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    padding: "5px",
    marginRight: "10px",
  },
};

export default Header;
