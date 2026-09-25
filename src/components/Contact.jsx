import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! (Connect a backend to make this work)');
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] mb-4 block">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-4">Let's Connect.</h2>
          <p className="text-[#64748B] max-w-lg mx-auto">
            Have an opportunity, idea or simply want to connect? Feel free to reach out.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5 mb-16"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#0B1220] mb-1.5">Name</label>
            <input
              id="name" name="name" type="text" required
              value={form.name} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-[#EFF6FF]/30 text-[#0B1220] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all duration-200"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#0B1220] mb-1.5">Email</label>
            <input
              id="email" name="email" type="email" required
              value={form.email} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-[#EFF6FF]/30 text-[#0B1220] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#0B1220] mb-1.5">Message</label>
            <textarea
              id="message" name="message" rows={5} required
              value={form.message} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-[#EFF6FF]/30 text-[#0B1220] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all duration-200 resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 active:scale-[0.98]"
          >
            <Send size={16} />
            SEND MESSAGE
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-8"
        >
          <a href="https://github.com/25211a6606-cmyk" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ane-bharadwaj-b8ab29388/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="mailto:bharadwajane07@gmail.com"
            className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
            <Mail size={18} /> Email
          </a>
          <a href="tel:+919959435111"
            className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
            <Phone size={16} /> Phone
          </a>
        </motion.div>
      </div>
    </section>
  );
}
