import { Container } from "./styles";
import linkedinIcon from "../../assets/linkedin.svg"
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="https://www.linkedin.com/in/afzal-mansuri-a34428174" target="_blank">
          <img src={linkedinIcon} alt="Email" /></a> 
          <a href="https://www.linkedin.com/in/afzal-mansuri-a34428174" target="_blank">Hello@Afzal-Mansuri</a>
        </div>
        {/* <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+91) 9630576848</a>
        </div>   */}
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}