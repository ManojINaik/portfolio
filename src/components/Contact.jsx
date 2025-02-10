import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('Ahkd784fZbZFY6Afy');

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'manojnaik.dev@gmail.com',
      link: 'mailto:manojnaik.dev@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+91 9353478959',
      link: 'tel:+919353478959'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Byndoor, Karnataka, India',
      link: 'https://maps.google.com/?q=Byndoor,Karnataka'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Add template parameters
    const templateParams = {
      to_name: 'Manoj',
      from_name: formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    try {
      const result = await emailjs.send(
        'service_3qj7kqa',
        'template_csawtfr',
        templateParams,
        'Ahkd784fZbZFY6Afy'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.text || 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      <section className="relative">
        <div className="absolute -left-4 top-0 w-1 h-8 bg-[#FFB400]" />
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Get in Touch
        </h2>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#2A2A2A]/50 rounded-xl border border-gray-800/50 p-6 hover:bg-[#2A2A2A]/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#FFB400] group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                  <p className="text-gray-400 group-hover:text-[#FFB400] transition-colors">
                    {info.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="from_name" className="block text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full bg-[#2A2A2A]/50 border border-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB400]/50 focus:border-transparent transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                className="w-full bg-[#2A2A2A]/50 border border-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB400]/50 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-white font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full bg-[#2A2A2A]/50 border border-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB400]/50 focus:border-transparent transition-all"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="w-full bg-[#2A2A2A]/50 border border-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB400]/50 focus:border-transparent transition-all resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Status Message */}
          {submitStatus.message && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                : 'bg-red-500/10 text-red-500 border border-red-500/20'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#FFB400] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#FFB400]/90 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px] ${
              isSubmitting ? 'cursor-not-allowed' : 'hover:shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
