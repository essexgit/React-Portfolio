import React from 'react';
import "./pages.css";
import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Form method="post" action="/events">
        <label >
          <span>Your Name</span>
          <input type="text" name="name" />
        </label>
        <label >
          <span>Your email</span>
          <input type="email" name="email" />
        </label>
        <label >
          <span>Your phone number</span>
          <input type="tel" name="telephone" />
        </label>
        <button type="submit">Send</button>
      </Form>
    </div>
  );
}

export const contactAction = async () => {
  const data = await requestAnimationFrame.formData();
  const submission = {
    name: data.get("name"),
    email: data.get("email"),
    tel: data.get("tel")
  };
};
