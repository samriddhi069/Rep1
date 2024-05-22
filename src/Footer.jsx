import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <p>AIntelligence Technologies</p>
        <div style={styles.socialIcons}>
          <a href="https://www.instagram.com">
            <FaInstagram style={styles.icon} />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin style={styles.icon} />
          </a>
          <a href="https://www.youtube.com">
            <FaYoutube style={styles.icon} />
          </a>
        </div>
      </div>
      <div style={styles.rightSection}>
        <p>Email: info@aintelligence.com</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "white",
    padding: "20px",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column", // Align items in a column
    alignItems: "center",
  },
  rightSection: {
    textAlign: "right",
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: "1.5rem",
    margin: "0 5px",
    color: "black",
  },
};

export default Footer;
