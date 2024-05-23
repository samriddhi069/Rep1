import React, { useState } from "react";

function Header() {
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!moreDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

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
            <li style={styles.navItem}>About Us</li>
            <li
              style={{ ...styles.navItem, position: "relative" }}
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={toggleServicesDropdown}
            >
              Services
              {servicesDropdownOpen && (
                <ul style={styles.dropdown}>
                  <li style={styles.dropdownItem}>
                    <a href="/ai-ml" style={styles.dropdownLink}>
                      AI/ML
                    </a>
                  </li>
                  <li style={styles.dropdownItem}>
                    <a href="/mobile-app-dev" style={styles.dropdownLink}>
                      Mobile App Dev
                    </a>
                  </li>
                  <li style={styles.dropdownItem}>
                    <a href="/web-development" style={styles.dropdownLink}>
                      Web Development
                    </a>
                  </li>
                  <li style={styles.dropdownItem}>
                    <a href="/wordpress" style={styles.dropdownLink}>
                      Wordpress
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <a href="#footer" style={styles.contactLink}>
              Contact Us
            </a>
            <li
              style={{ ...styles.navItem, position: "relative" }}
              onMouseEnter={toggleMoreDropdown}
              onMouseLeave={toggleMoreDropdown}
            >
              More
              {moreDropdownOpen && (
                <ul style={styles.dropdown}>
                  <li style={styles.dropdownItem}>
                    <a href="/blog" style={styles.dropdownLink}>
                      Blog
                    </a>
                  </li>
                  <li style={styles.dropdownItem}>
                    <a href="/pitch" style={styles.dropdownLink}>
                      Pitch
                    </a>
                  </li>
                  <li style={styles.dropdownItem}>
                    <a href="/investor" style={styles.dropdownLink}>
                      Investor
                    </a>
                  </li>
                  <li style={styles.dropdownItem}>
                    <a href="/careers" style={styles.dropdownLink}>
                      Careers
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
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
  logo: {},
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  nav: {},
  navList: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
  },
  navItem: {
    marginRight: "10px", // Space between navigation items
    position: "relative",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "black", // Background color of the dropdown
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: 0,
    minWidth: "150px",
    zIndex: 1,
    display: "block", // Updated display property to show the dropdown
    listStyleType: "none", // Remove bullet points
  },
  dropdownItem: {
    padding: "10px",
  },
  dropdownLink: {
    color: "white",
    textDecoration: "none",
  },
  contactLink: {
    color: "black", // Change color to black
    textDecoration: "none",
    marginRight: "10px",
  },
};

export default Header;
