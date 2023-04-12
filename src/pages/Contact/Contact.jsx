import React from 'react';
import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <main >
      <h1 className='contactTitle'>Contact Page</h1>
      <Form method="post" action="/contact">
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
        <button type="submit" className='contactButton nav-item'>Send</button>
      </Form>
    </main>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    name: data.get("name"),
    email: data.get("email"),
    tel: data.get("telephone")
  };
  console.log(submission);
  // send post request



  return redirect('/');
};