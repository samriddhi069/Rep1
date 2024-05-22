import React from "react";

function Content() {
  return (
    <main style={styles.content}>
      <div style={styles.section}>
        <div style={styles.left}>
          <h2>Who We Are</h2>
          <p>
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look: Excepteur efficient
            emerging, minim veniam anim aute carefully curated Ginza
            conversation exquisite perfect nostrud nisi intricate Content. Qui
            international first-class nulla ut. Punctual adipisicing, essential
            lovely queen tempor eiusmod irure. Exclusive izakaya charming
            Scandinavian impeccable aute quality of life soft power pariatur
            Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter
            destination Toto remarkable officia Helsinki excepteur Basset hound.
            Zürich sleepy perfect consectetur.
          </p>
        </div>
        <div style={styles.right}>
          <img
            src="https://via.placeholder.com/150"
            alt="Right Aligned Photo"
            style={styles.image}
          />
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.left}>
          <img
            src="https://via.placeholder.com/150"
            alt="Left Aligned Photo"
            style={styles.image}
          />
        </div>
        <div style={styles.right}>
          <h2>Our Vision</h2>
          <p>
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look: Excepteur efficient
            emerging, minim veniam anim aute carefully curated Ginza
            conversation exquisite perfect nostrud nisi intricate Content. Qui
            international first-class nulla ut. Punctual adipisicing, essential
            lovely queen tempor eiusmod irure. Exclusive izakaya charming
            Scandinavian impeccable aute quality of life soft power pariatur
            Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter
            destination Toto remarkable officia Helsinki excepteur Basset hound.
            Zürich sleepy perfect consectetur.
          </p>
        </div>
      </div>
      <div style={styles.team}>
        <h2>OUR TEAM</h2>
        <div style={styles.teamRow}>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              style={styles.circularImage}
            />
            <p>Shourya Bhushan</p>
            <p>CEO</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              style={styles.circularImage}
            />
            <p>Jane Smith</p>
            <p>CTO</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              style={styles.circularImage}
            />
            <p>Michael Johnson</p>
            <p>Developer</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 4"
              style={styles.circularImage}
            />
            <p>Sarah Brown</p>
            <p>Designer</p>
          </div>
        </div>

        <div style={styles.teamRow}>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 5"
              style={styles.circularImage}
            />
            <p>David Lee</p>
            <p>Marketing Manager</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 6"
              style={styles.circularImage}
            />
            <p>Emily Clark</p>
            <p>HR Manager</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 7"
              style={styles.circularImage}
            />
            <p>Rachel Wilson</p>
            <p>Accountant</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 8"
              style={styles.circularImage}
            />
            <p>Tom Anderson</p>
            <p>Support Specialist</p>
          </div>
        </div>
      </div>
      <div style={styles.dropdown}>
        <button style={styles.dropdownButton}>
          <div style={styles.arrow}></div>
        </button>
      </div>
    </main>
  );
}

const styles = {
  content: {
    padding: "20px",
    textAlign: "center",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "20px",
  },
  left: {
    textAlign: "left",
    flex: 1,
    marginRight: "10px",
  },
  right: {
    textAlign: "right",
    flex: 1,
    mariginleft: "10px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  team: {
    marginTop: "40px",
  },
  teamRow: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  teamMember: {
    textAlign: "center",
    marginRight: "20px",
  },
  circularImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  dropdown: {
    marginTop: "40px",
  },
  dropdownButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "5px solid black",
  },
};

export default Content;
