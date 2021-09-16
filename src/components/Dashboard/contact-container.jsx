import "../../css/contact-container.css";
import ContactCard from "./contact-card";
let ContactContainer = () => {
  return (
    <>
      <div className="contact-container">
        <div className="img-container">
          <img src="assSvg.png" alt="" />
        </div>
        <div className="contacts">
          <div className="contacts-intro">
            <h5>New Applicants</h5>
            <span className="material-icons-outlined">chevron_right</span>
          </div>
          <div className="cards-container">
            <ContactCard
              data={{ name: "Rosie Matts", title: "IOS Developer" }}
            />
            <ContactCard
              data={{ name: "James Scott", title: "Node Js Developer" }}
            />
            <ContactCard
              data={{ name: "Jamie Laurenson", title: "Marketing Manager" }}
            />
            <ContactCard
              data={{ name: "Elizabeth Hurton", title: "IOS Developer" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
