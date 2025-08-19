import React from "react";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {

  const [firstName,SetFirstName] = useState('');
  const [email,SetEmail] = useState('');
  const [Message,SetMessage] = useState('');
  const [subjecct,SetSubject] = useState('');
  const [lastname,SetlastName] = useState('');
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}

          <div className="border rounded-lg shadow-sm p-6 bg-white">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Send me a message</h3>
              <p className="text-sm text-gray-500">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    id="firstName"
                    placeholder="FirstName"
                    className="w-full border px-3 py-2 rounded"
                    required = {true}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    placeholder="lastName"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  type="email"
                  placeholder="xyz@example.com"
                  className="w-full border px-3 py-2 rounded"
                   required = {true}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  placeholder="Project DIscussion"
                  className="w-full border px-3 py-2 rounded"
                 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="w-full border px-3 py-2 rounded min-h-[120px] resize-none"
                  required = {true}
                />
              </div>
              <p className="inline p-0 m-0 text-gray-400">* are required</p>
              <button className="w-auto flex bg-blue-500 bg-primary text-white p-2  border rounded hover:cursor-pointer hover:shadow-2xl">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="border rounded-lg shadow-sm p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
              <p className="text-sm text-gray-500 mb-4">
                Here are some ways to reach me directly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-500">manickvel12@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-500">+91 877 855 6573</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-500">Puducherry</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg shadow-sm p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Follow me</h3>
              <p className="text-sm text-gray-500 mb-4">
                Stay connected on social media and professional networks.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/manickvel/"
                  className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-gray-100 transition"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Manickvel"
                  className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-gray-100 transition"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://x.com/Manick4s?t=ZJZ8_m7ulSmoyNddSyVmQA&s=09"
                  className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-gray-100 transition"
                >
                  <Twitter className="h-4 w-4" />
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
