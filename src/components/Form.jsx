import { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validare simplă
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mvganrwl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(result?.message || "Something went wrong.");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error("Error sending message.");
    } finally {
      setLoading(false);
    }
  };


 return (
  <div className="w-full">
    {sent && (
      <div className="bg-green-600 text-white mb-5 p-4 rounded-md text-center transition-all duration-300">
        Thank you! Your message has been sent.
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-6 rounded-md"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>
);
}

export default Form
