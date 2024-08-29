'use client';

import { FormEvent, useState, ChangeEvent, useEffect } from 'react';

function ContactPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const isFormValid = name.length > 2 && email.includes('@') && message.length > 5;

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Submitted:', { name, email, message });
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    console.log('Form Data:', { name, email, message });
  }, [name, email, message]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
          <input
            id="name"
            type="text"
            onChange={handleChangeName}
            value={name}
            placeholder="Your name"
            className="border border-gray-300 p-3 w-full rounded-lg"
          />
          {name.length < 2 && <p className="text-red-500 mt-1">Name must be at least 2 characters long.</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input
            id="email"
            type="email"
            onChange={handleChangeEmail}
            value={email}
            placeholder="Your email"
            className="border border-gray-300 p-3 w-full rounded-lg"
          />
          {!email.includes('@') && <p className="text-red-500 mt-1">Please enter a valid email address.</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            onChange={handleChangeMessage}
            value={message}
            placeholder="Your message"
            rows={4}
            className="border border-gray-300 p-3 w-full rounded-lg"
          />
          {message.length < 6 && <p className="text-red-500 mt-1">Message must be at least 6 characters long.</p>}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`py-2 px-4 rounded-lg text-white font-semibold transition duration-300 ${
            isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
