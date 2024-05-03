import React, { useState } from 'react';

interface ContactInfo {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSendMessage = () => {
    const { email, subject, message } = contactInfo;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink; // Open email client
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      <h2 className="text-3xl font-bold mb-8">Contact Form</h2>
      <form onSubmit={handleSendMessage} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-sm font-medium mb-2">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={contactInfo.firstName}
            onChange={handleChange}
            required
            className="rounded-md bg-gray-300 text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={contactInfo.email}
            onChange={handleChange}
            required
            className="rounded-md bg-gray-300 text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-sm font-medium mb-2">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={contactInfo.subject}
            onChange={handleChange}
            required
            className="rounded-md bg-gray-300 text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium mb-2">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            value={contactInfo.message}
            onChange={handleChange}
            required
            className="rounded-md bg-gray-300 text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Send Message
        </button>
      </form>

      <h2 className="text-3xl font-bold mt-16 mb-4">Contact Details</h2>
      <ul className="list-disc pl-4">
        <li>Phone: +92 316 0287352</li>
        <li>Phone: +92 333 2181581</li>
        <li>Email: luxuryleather.hussain@gmail.com</li>
        {/* <li>Email: support@youremail.com</li> */}
      </ul>
    </div>
  );
};

export default Contact;
