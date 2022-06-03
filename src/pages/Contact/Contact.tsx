import styles from "./Contact.module.scss";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <div className={styles.main}>
        <div className={styles.img}>
          <img
            src="https://i.pinimg.com/originals/a2/8f/ca/a28fca519b950373570bac68b192c487.jpg"
            alt="ice cream"
          />
        </div>
        <div className={styles.info}>
          <div>
            For any queries or concerns, please email us at{" "}
            <span>
              <a href="mailto:someEmail@gmail.com">someEmail@gmail.com</a>
            </span>{" "}
            or you can call us at{" "}
            <span>
              <a href="tel:+11111111111">+1(111)-111-1111</a>
            </span>
          </div>
          <div>
            <span>Registered Address:</span> C-159 Some State, Phase 1, Some
            Info 111111
          </div>
          <div>09:00 AM - 06:30 PM (Monday to Saturday)</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
