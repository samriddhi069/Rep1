import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <h3>AIntelligence Technologies</h3>
        <p style={styles.description}>
          We provide cutting-edge AI and ML solutions to help businesses
          innovate and grow.
        </p>
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
      <div style={styles.middleSection}>
        <div style={styles.services}>
          <h3 style={styles.subheading}>Services</h3>
          <div style={styles.linkList}>
            <a href="/ai-ml" style={styles.link}>
              AI/ML
            </a>
            <a href="/mobile-app-dev" style={styles.link}>
              Mobile App Dev
            </a>
            <a href="/android-app-dev" style={styles.link}>
              Android App Dev
            </a>
            <a href="/web-development" style={styles.link}>
              Web Development
            </a>
            <a href="/wordpress" style={styles.link}>
              Wordpress
            </a>
          </div>
        </div>
        <div style={styles.links}>
          <div style={styles.linkList}>
            <a href="/blogs" style={styles.link}>
              Blogs
            </a>
            <a href="/about-us" style={styles.link}>
              About Us
            </a>
            <a href="/investors" style={styles.link}>
              Investors
            </a>
            <a href="/careers" style={styles.link}>
              Careers
            </a>
          </div>
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
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px",
    flex: 1,
  },
  description: {
    marginBottom: "10px",
  },
  middleSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flex: 2,
    padding: "0 20px",
  },
  services: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  subheading: {
    color: "white",
    marginBottom: "10px",
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginBottom: "10px",
    fontSize: "1.1rem",
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
