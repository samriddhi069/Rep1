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
        <div style={styles.contactInfo}>
          <p>Email: info@aintelligence.com</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>
      <div style={styles.rightSection}>
        <div style={styles.contactSection}>
          <h3>Contact Us</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Full Name" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="tel" placeholder="Phone No." style={styles.input} />
            <input type="text" placeholder="Address" style={styles.input} />
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "black",
    padding: "20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px",
    flex: 1,
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
    marginBottom: "20px",
    flex: 1,
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "1.5rem",
    margin: "0 5px",
    color: "white", // Change icon color to white
  },
  contactInfo: {
    textAlign: "left",
  },
  contactSection: {
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  input: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "100%",
  },
  button: {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
  },
};

export default Footer;
