"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Contact</h2>

      <input
        className="border p-2 mt-4"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="block mt-4 bg-black text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Send
      </button>
    </section>
  );
}
