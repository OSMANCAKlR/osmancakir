import { useRef } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        // Set loading state
        const button = form.current.querySelector("button");
        button.disabled = true;
        button.innerText = "Sending...";
      
        emailjs
          .sendForm(
            "service_d24xmnr",
            "template_xcftorr",
            form.current,
            "l92zBaPAM3dsPR_Sd"
          )
          .then(
            (result) => {
              console.log(result.text);
              form.current.reset();
              // Clear loading state and show success message
              button.disabled = false;
              button.innerText = "Send Message";
            },
            (error) => {
              console.log(error.text);
              // Clear loading state and show error message
              button.disabled = false;
              button.innerText = "Send Message";
            }
          );
      };


  return (
    <div className={styles.form__container}>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
              <div className={styles.form__wrapper}>
                
                  <div className={styles.input__box}>
                    <span className={styles.input__header}>Name</span>
                    <input className={styles.input} type="text" placeholder="Name"  name="user_name" required />
                  </div>
                  <div className={styles.input__box}>
                    <span className={styles.input__header}>Email</span>
                    <input className={styles.input} type="email" placeholder="Email"  name="user_email"  />
                  </div>

                <span className={styles.input__header}>Message</span>
                <textarea className={styles.textarea}  required placeholder="Message" name="message"></textarea>
                <button className={styles.button}>Send Message</button>
              </div>
            </form>
          </div>
  )
}

export default Contact