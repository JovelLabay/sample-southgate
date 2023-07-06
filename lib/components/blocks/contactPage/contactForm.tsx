import React, { useState, FormEvent } from "react";
import Button from "@/lib/functions/button";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form data using the state variables (fullName, email, contactNumber, message)
    console.log("Form submitted:", {
      fullName,
      email,
      contactNumber,
      message,
    });
    // Reset form fields
    setFullName("");
    setEmail("");
    setContactNumber("");
    setMessage("");
  };

  return (
    <div className="parallelogram-background mt-[60px] sm:mt-[70px]">
      <form
        onSubmit={handleSubmit}
        className="margin text-white sm:skew-x-[8deg] flex flex-col text-carrois"
      >
        <div className="margin-y gap-8 flex flex-col">
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="fullName" className="mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="email" className="mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="contactNumber" className="mb-2">
              Contact Number:
            </label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="message" className="mb-2">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-black h-[100px] sm:h-[200px] w-[90%]"
            />
          </div>
          <div className="-ml-10 text-goodpro">
            <Button label="SUBMIT" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
