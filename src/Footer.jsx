import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./styles.css";
function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.leftSection}>
        <p>AIntelligence Technologies</p>
        <p style={styles.description}>
          We provide cutting-edge AI and ML solutions to help businesses
          innovate and grow.
        </p>
        <div style={styles.socialIcons}>
          <a href="https://www.instagram.com">
            <FaInstagram className="icon-animation" style={styles.icon} />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook className="icon-animation" style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin className="icon-animation" style={styles.icon} />
          </a>
          <a href="https://www.youtube.com">
            <FaYoutube className="icon-animation" style={styles.icon} />
          </a>
        </div>
        <div style={styles.contactInfo}>
          <p>Email: aintelligencetechnologies@gmail.com</p>
          <p>Address: Ahmedabad, Gujrat, India</p>
        </div>
      </div>
      <div style={styles.middleSection}>
        <div style={styles.services}>
          <h3 style={styles.subheading}>Services</h3>
          <div style={styles.linkList}>
            <a href="/ai-ml" className="link-animation" style={styles.link}>
              AI/ML
            </a>
            <a
              href="/mobile-app-dev"
              className="link-animation"
              style={styles.link}
            >
              Mobile App Dev
            </a>
            <a
              href="/android-app-dev"
              className="link-animation"
              style={styles.link}
            >
              Android App Dev
            </a>
            <a
              href="/web-development"
              className="link-animation"
              style={styles.link}
            >
              Web Development
            </a>
            <a
              href="/web-development"
              className="link-animation"
              style={styles.link}
            >
              Wordpress
            </a>
          </div>
        </div>
        <div style={styles.links}>
          <div style={styles.linkList}>
            <a href="/blogs" className="link-animation" style={styles.link}>
              Blogs
            </a>
            <a href="/about-us" className="link-animation" style={styles.link}>
              About Us
            </a>
            <a href="/investors" className="link-animation" style={styles.link}>
              Investors
            </a>
            <a href="/careers" className="link-animation" style={styles.link}>
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
            <button
              type="submit"
              className="button-animation"
              style={styles.button}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr style={styles.divider} />
      <div style={styles.copyright}>
        <div style={styles.copyrightLeft}>
          <p>
            Copyright 2024 &copy; AIntelligenceTechnologies.com | All Rights
            Reserved
          </p>
        </div>
        <div style={styles.copyrightRight}>
          <a href="/privacy-policy" style={styles.link}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-and-conditions" style={styles.link}>
            Terms and Conditions
          </a>
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
    color: "white",
    transition: "transform 0.3s ease", // Change icon color to white
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
    width: "50%",
  },
  divider: {
    width: "100%",
    borderTop: "1px solid white",
  },
  copyright: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "10px",
  },
  copyrightLeft: {
    textAlign: "left",
    flex: 1,
    marginTop: "10px",
  },
  copyrightRight: {
    textAlign: "right",
    flex: 1,
    marginTop: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Footer;
