import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <div>
        <h1>Contact Me</h1>

        {submitted ? (
          <p>Thanks! Your message has been sent.</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Say hello..."
              />
            </div>

            <button type="submit">
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
