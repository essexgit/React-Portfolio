import React from 'react';
// import { Form } from "react-router-dom";
// https://public.herotofu.com/v1/860d8c90-d9e0-11ed-97cd-e58a101b2c9f
export default function Contact() {
  return (
    <main >
      <h1 className='contactTitle'>Contact Page</h1>

      <form method="POST" enctype="multipart /form-data" action="https://getform.io/f/933698db-42d7-4995-a1da-ccda9b1f0f20" accept-charset="UTF-8">
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
        <div style={{
          textIndent: "-99999px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "absolute",
        }}
          aria-hidden="true">
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
        </div>
      </form>
    </main >
  );
}

// export const contactAction = async ({ request }) => {
//   const data = await request.formData();
//   const submission = {
//     name: data.get("name"),
//     email: data.get("email"),
//     tel: data.get("telephone")
//   };
//   console.log(submission);
//   // send post request



//   return redirect('/');
// };