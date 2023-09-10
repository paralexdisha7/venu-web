import React ,{ useState } from "react";

import "./contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setMessage] = useState("");
  let currentDate = new Date()+10; // Current date and time
  const submitData = async (event) => {
    event.preventDefault();
    if (name && phone && email && address) {
      const res = await fetch(
        "https://contact-form-react-f0336-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            address,
            currentDate,
            
          }),
        }
      );
      if (res) {
        alert("Message Sent");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error");
      }
    } else {
      alert("Enter your Data");
    }
  };
  return (
    <div className="contacts container">
      <h2>Contact Us</h2>
      <div className="form-main">
        <div className="form-sub">
          <form>
            <div>
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)} //toupdate
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number : </label>
              <input
                type="num"
                name="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
           
            <div>
              <label htmlFor="text">Address : </label>
              <textarea
                name="address"
                placeholder="Enter your Address"
                value={address}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="sub-btn" onClick={submitData}>
                {/* */}
                Submit
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
