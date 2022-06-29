import styles from './index.module.css';

function ProfilePage() {
  return (
    <>

    <div className={styles.contact}>
      <div>
        <h3 className={styles.contactSubtitle}>
        Hubungi kami jika Anda melihat kesalahan dalam penulisan hadist-hadist.
        </h3>
      </div>
      <div className={styles.cardContact}>
        <h4 className={styles.contactTitle}>Contact Us</h4>
        <input type="text" className={styles.inputName} placeholder="Name" />
        <input type="text" className={styles.inputEmail} placeholder="Email" />
        <input type="text" className={styles.inputMessage} placeholder="Message" />

        <button className={styles.buttonSend}>Send Message</button>
      </div>
    </div>

    </>
)
}

export default ProfilePage