import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("Front-End");
  const [isSending, setIsSending] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [sentMessage, setSentMessage] = useState("");

  const handleSend = () => {
    setIsSending(true);
    const id = setTimeout(() => {
      setSentMessage(
        `✅ Sent successfully! 
        Name: ${name}, 
        Email: ${email}, 
        Mobile: ${mobile}, 
        Service: ${service}`
      );
      setIsSending(false);
    }, 5000); // ⏱ fixed 5-second delay
    setTimerId(id);
  };

  const handleCancel = () => {
    clearTimeout(timerId);
    setIsSending(false);
  };

  return (
    <div className="contact-page">
      <div className="chatApp">
        <h2>Contact Us</h2>
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label>Select Service:</label>
          <div className="service-options">
            {["Front-End", "Back-End", "Database", "Full Stack"].map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="service"
                  value={item}
                  checked={service === item}
                  onChange={(e) => setService(e.target.value)}
                />
                {item}
              </label>
            ))}
          </div>

          {!isSending ? (
            <button type="button" onClick={handleSend}>
              Send
            </button>
          ) : (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </form>

        {sentMessage && (
          <p style={{ marginTop: "15px", color: "black" }}>{sentMessage}</p>
        )}
      </div>

      {/* ✅ Social Links */}
      <div className="social-links">
        <div className="Gmail">
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
            alt="Gmail_logo"
          />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=syedthanveer005@gmail.com&su=Hello%20from%20site&body=Hi%20there"
            target="_blank"
            rel="noopener noreferrer"
          >
            syedthanveer005@gmail.com
          </a>
        </div>

        <div className="LinkedIn">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
            alt="LinkedIn_logo"
          />
          <a
            href="https://www.linkedin.com/in/syed-thanveer-s-937b2b19a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SYED THANVEER S
          </a>
        </div>

        <div className="Insta">
          <img
            src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
            alt="Insta_logo"
          />
          <a
            href="https://www.instagram.com/thannu_sn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thannu_sn
          </a>
        </div>

        <div className="FB">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
            alt="FB_logo"
          />
          <a
            href="https://www.facebook.com/share/1FiMjLR4BA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SYED THANVEER
          </a>
        </div>
      </div>
    </div>
  );
}
