import Form from "../components/Form";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-2 mt-8 text-secondary">
          Contact Me
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
          Let's get in touch
        </h3>
        <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-10 mx-auto" />

        <div className="flex flex-col lg:flex-row gap-10 mt-14">
          {/* FORM */}
          <div className="lg:w-2/4 mb-5">
            <Form />
          </div>

          {/* CONTACT INFO */}
          <div className="lg:w-2/4 bg-gray-800 p-6 rounded-2xl shadow-md space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Info</h4>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-purple-400 mt-1" />
              <div>
                <p className="text-md text-gray-400">Email</p>
                <a href="mailto:daniela.mihalache88@gmail.com" className="hover:text-white">
                  danutza_dima88@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-purple-400 mt-1" />
              <div>
                <p className="text-md text-gray-400">Phone</p>
                <a href="tel:+40712345678" className="hover:text-white">
                  +40 746 450 190
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-purple-400 mt-1" />
              <div>
                <p className="text-md text-gray-400">Location</p>
                <p>Galati, România</p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-gray-700 pt-6">
              <a
                href="mailto:daniela.mihalache88@gmail.com"
                className="text-gray-400 hover:text-purple-400 text-2xl"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/mihalacheD"
                className="text-gray-400 hover:text-purple-400 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/daniela-mihalache-543695224"
                className="text-gray-400 hover:text-purple-400 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
