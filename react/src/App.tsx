import React, { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
const Form = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // await db.collection("users").add({
      //   email,
      //   phoneNumber,
      // });
      await addDoc(collection(db, "userDetails"), { email, phoneNumber });
      setEmail("");
      setPhoneNumber("");
      console.log("Data added to Firebase!");
    } catch (error) {
      console.error("Error adding data to Firebase: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
