import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./touch.scss";

const GetInTouch = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // after put this information the email sending system will be start
    emailjs
      .sendForm(
        "your_service_key",
        "your_template_key",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="form_wrapper">
        <h1>LET'S GET IN TOUCH</h1>
        <div className="contact_form">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="subject_input input_control">
              <input type="text" placeholder="Subject" name="subject" />
              <input type="text" placeholder="Your email" name="user_email" />
            </div>
            <div className="input_control">
              <textarea
                type="text"
                placeholder="How can we help you?"
                name="message"
              />
            </div>
            <div className="input_control">
              <span>What is you budget for this project</span>
              <select name="budget">
                <option value="less then $5000" defaultChecked>
                  less then $5000
                </option>
                <option value="$5000 - $10,000">$5000 - $10,000</option>
                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                <option value="$20,000 - $40,000">$20,000 - $40,000</option>
                <option value="$40,000+">$40,000+</option>
              </select>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
