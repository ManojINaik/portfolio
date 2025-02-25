import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('Ahkd784fZbZFY6Afy');

const Contact = () => {
  const formRef = useRef();
  const matrixCanvasRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [cursorBlink, setCursorBlink] = useState(true);
  const [commandText, setCommandText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [binaryCounter, setBinaryCounter] = useState('0000000000000000');
  const [typingComplete, setTypingComplete] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const targetText = "init secure communication protocol";
  const [terminalOutput, setTerminalOutput] = useState([
    { text: 'Welcome to ManojOS v1.0.4', type: 'system' },
    { text: 'Establishing secure connection...', type: 'system' },
    { text: 'Connection established! Ready to receive your transmission.', type: 'success' },
    { text: 'Type your message or use the form below to contact.', type: 'info' }
  ]);

  // Binary counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryCounter(prev => {
        // Convert to decimal, add 1, convert back to binary
        const decimal = parseInt(prev, 2);
        return (decimal + 1).toString(2).padStart(16, '0');
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Matrix code rain effect
  useEffect(() => {
    if (!matrixCanvasRef.current) return;
    
    const canvas = matrixCanvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Characters to display
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    // Drops contains the y position of each column
    const drops = Array(Math.floor(columns)).fill(1);
    
    // Draw the characters
    const draw = () => {
      // Slightly transparent black background to show trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0'; // Green text
      ctx.font = `${fontSize}px monospace`;
      
      // Draw each drop
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const charIndex = Math.floor(Math.random() * chars.length);
        const text = chars[charIndex];
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // If the drop has reached the bottom or randomly, reset it
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move the drop down
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 50);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Simulate terminal typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Text typing animation effect
  useEffect(() => {
    if (typingComplete) return;
    
    if (typedText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setTypedText(targetText.substring(0, typedText.length + 1));
      }, Math.random() * 40 + 30); // Random delay for realistic typing
      
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText, typingComplete]);

  // Glitch effect timer
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  // Handle terminal commands
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!commandText.trim()) return;
    
    setTerminalOutput(prev => [...prev, { text: `> ${commandText}`, type: 'command' }]);
    
    // Process command
    const cmd = commandText.toLowerCase().trim();
    
    if (cmd === 'help') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Available commands:', type: 'info' },
        { text: '  help - Show this help message', type: 'info' },
        { text: '  clear - Clear terminal', type: 'info' },
        { text: '  about - About Manoj', type: 'info' },
        { text: '  contact - Show contact details', type: 'info' },
        { text: '  projects - List my projects', type: 'info' },
        { text: '  skills - List my technical skills', type: 'info' },
        { text: '  matrix - Toggle Matrix mode', type: 'info' },
        { text: '  sudo - Try it and see what happens', type: 'info' }
      ]);
    } else if (cmd === 'clear') {
      setTerminalOutput([
        { text: 'Terminal cleared. ManojOS v1.0.4', type: 'system' }
      ]);
    } else if (cmd === 'about') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Manoj Naik: Full Stack Developer', type: 'info' },
        { text: 'Skills: React, Node.js, TypeScript, MongoDB, and more', type: 'info' },
        { text: 'Status: Available for exciting projects', type: 'success' }
      ]);
    } else if (cmd === 'contact') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Email: manojnaik.dev@gmail.com', type: 'info' },
        { text: 'Phone: +91 7676445273', type: 'info' },
        { text: 'Location: Mangalore, Karnataka, India', type: 'info' }
      ]);
    } else if (cmd === 'projects') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Recent Projects:', type: 'info' },
        { text: '1. Portfolio Website - React, TailwindCSS', type: 'info' },
        { text: '2. E-commerce Dashboard - MERN Stack', type: 'info' },
        { text: '3. Mobile Chat App - React Native, Firebase', type: 'info' },
        { text: '4. Weather Forecast App - Next.js, API Integration', type: 'info' }
      ]);
    } else if (cmd === 'skills') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Technical Skills:', type: 'info' },
        { text: '- Frontend: React, Vue, Angular, HTML/CSS, TailwindCSS', type: 'info' },
        { text: '- Backend: Node.js, Express, Python, Django, Flask', type: 'info' },
        { text: '- Database: MongoDB, PostgreSQL, MySQL, Firebase', type: 'info' },
        { text: '- DevOps: Docker, AWS, CI/CD, Git', type: 'info' },
        { text: '- Mobile: React Native, Flutter', type: 'info' }
      ]);
    } else if (cmd === 'matrix') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Entering the Matrix... You\'re now in the system.', type: 'success' }
      ]);
      // Matrix effect trigger could be added here if desired
    } else if (cmd.startsWith('sudo')) {
      setTerminalOutput(prev => [...prev, 
        { text: 'Nice try! But you don\'t have root privileges in this system.', type: 'error' },
        { text: 'Access denied: User authentication required', type: 'error' }
      ]);
    } else if (cmd === 'easter egg' || cmd === 'easteregg') {
      setTerminalOutput(prev => [...prev, 
        { text: 'You found a secret! Here\'s a digital cookie for you: 🍪', type: 'success' }
      ]);
    } else if (cmd === '42') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Yes, that is indeed the answer to life, the universe, and everything.', type: 'success' }
      ]);
    } else if (cmd === 'hello world' || cmd === 'helloworld') {
      setTerminalOutput(prev => [...prev, 
        { text: 'Hello to you too, fellow programmer!', type: 'success' }
      ]);
    } else {
      setTerminalOutput(prev => [...prev, 
        { text: `Command not found: ${commandText}. Type 'help' for available commands.`, type: 'error' }
      ]);
    }
    
    setCommandText('');
  };

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
      value: '+91 7676445273',
      link: 'tel:+917676445273'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Mangalore, Karnataka, India',
      link: 'https://maps.google.com/?q=Mangalore,Karnataka'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Show terminal output for submission
    setTerminalOutput(prev => [...prev, 
      { text: 'Initiating transmission protocol...', type: 'system' },
      { text: 'Encrypting message...', type: 'system' }
    ]);

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
          message: 'Message transmitted successfully! Awaiting response.'
        });
        setTerminalOutput(prev => [...prev, 
          { text: 'Message transmitted successfully!', type: 'success' },
          { text: 'Awaiting response from host...', type: 'info' }
        ]);
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Transmission failed. System error detected. Please try again.'
      });
      setTerminalOutput(prev => [...prev, 
        { text: 'ERROR: Transmission failed!', type: 'error' },
        { text: `Diagnostic: ${error.text || 'Unknown error'}`, type: 'error' },
        { text: 'Please retry transmission...', type: 'system' }
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn relative">
      {/* Matrix Canvas Background */}
      <canvas 
        ref={matrixCanvasRef} 
        className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0"
      />
      
      <section className="relative z-10">
        <div className="flex items-center justify-between">
          <h2 
            className={`text-3xl font-bold text-white tracking-tight ${glitchActive ? 'glitch' : ''}`} 
            data-text="Establish Connection"
          >
            <span className="text-[var(--accent)]">$ </span>Establish Connection
          </h2>
          <div className="hidden md:flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="section-divider border-[var(--accent)] opacity-50"></div>
        
        {/* Binary Counter */}
        <div className="hidden md:block text-right mb-1 font-mono text-xs text-[var(--accent)]/50">
          <span className="mr-2">SYNC:</span>
          {binaryCounter.split('').map((bit, index) => (
            <span key={index} className={bit === '1' ? 'text-[var(--primary)]' : ''}>
              {bit}
            </span>
          ))}
        </div>
        
        {/* Terminal Interface */}
        <div className="mb-10 overflow-hidden">
          <div className="bg-black border border-[var(--accent)] rounded-lg overflow-hidden shadow-lg shadow-[var(--primary)]/20">
            <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400">manoj@portfolio:~</div>
              <div className="text-xs text-gray-500">bash</div>
            </div>
            <div className="p-4 font-mono text-sm h-48 overflow-y-auto terminal-output">
              {terminalOutput.map((line, index) => (
                <div 
                  key={index} 
                  className={`mb-1 ${
                    line.type === 'system' ? 'text-blue-400' : 
                    line.type === 'success' ? 'text-green-400' : 
                    line.type === 'error' ? 'text-red-400' : 
                    line.type === 'command' ? 'text-purple-400' : 
                    'text-gray-300'
                  }`}
                >
                  {line.text}
                </div>
              ))}
              <form onSubmit={handleTerminalSubmit} className="flex items-center mt-2">
                <span className="text-[var(--accent)] mr-2">$</span>
                <input
                  type="text"
                  value={commandText}
                  onChange={(e) => setCommandText(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                  autoFocus
                />
                <span className={`h-4 w-2 bg-white ${cursorBlink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
              </form>
            </div>
            <div className="bg-gray-900 px-4 py-1 border-t border-gray-800">
              <div className="text-xs text-gray-500 flex justify-between">
                <span>Type 'help' for available commands</span>
                <span className="text-[var(--accent)]">v1.0.4</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group rounded-xl border border-[var(--accent)]/30 bg-[var(--bg-card)]/80 backdrop-blur-sm p-6 transition-all duration-300 transform hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/20 hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="text-[var(--accent)] group-hover:text-[var(--primary)] transition-colors duration-300 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 flex items-center">
                    <span className="text-[var(--accent)] mr-1 font-mono text-sm opacity-75">~/</span>
                    {info.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                    {info.value}
                  </p>
                </div>
              </div>
              <div className="mt-3 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500"></div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="border border-[var(--accent)]/30 rounded-lg p-6 bg-[var(--bg-card)]/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent"></div>
          
          {/* Circuit Board Pattern SVG */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 L100,50 M50,0 L50,100 M25,25 L75,75 M75,25 L25,75" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="5" fill="white" />
                <circle cx="25" cy="25" r="3" fill="white" />
                <circle cx="75" cy="75" r="3" fill="white" />
                <circle cx="75" cy="25" r="3" fill="white" />
                <circle cx="25" cy="75" r="3" fill="white" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                <span className="text-[var(--accent)] mr-2 font-mono">{'>'}</span>
                Transmit Data
              </h3>
              <p className="text-[var(--text-secondary)] h-6">
                <span className="font-mono text-[var(--accent)]">init</span> {typedText}
                <span className={`inline-block w-2 h-4 bg-white ml-1 ${cursorBlink ? 'opacity-0' : 'opacity-100'}`}></span>
              </p>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-white font-medium mb-2 flex items-center">
                    <span className="text-[var(--accent)] mr-2 font-mono text-sm">user@</span>
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full bg-[#0a0a0a] border border-[var(--accent)]/30 rounded-lg px-4 py-3 text-white placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-transparent transition-all font-mono"
                    placeholder="Your_Name"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-white font-medium mb-2 flex items-center">
                    <span className="text-[var(--accent)] mr-2 font-mono text-sm">email@</span>
                    Address
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full bg-[#0a0a0a] border border-[var(--accent)]/30 rounded-lg px-4 py-3 text-white placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-transparent transition-all font-mono"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2 flex items-center">
                  <span className="text-[var(--accent)] mr-2 font-mono text-sm">subject@</span>
                  Header
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-[#0a0a0a] border border-[var(--accent)]/30 rounded-lg px-4 py-3 text-white placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-transparent transition-all font-mono"
                  placeholder="Communication_Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2 flex items-center">
                  <span className="text-[var(--accent)] mr-2 font-mono text-sm">message@</span>
                  Payload
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full bg-[#0a0a0a] border border-[var(--accent)]/30 rounded-lg px-4 py-3 text-white placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-transparent transition-all resize-none font-mono"
                  placeholder="Your_message_content..."
                ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`p-4 rounded-lg font-mono ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <span className="flex items-center">
                      <span className="text-green-500 mr-2">[OK]</span> {submitStatus.message}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span className="text-red-500 mr-2">[ERROR]</span> {submitStatus.message}
                    </span>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[var(--accent)] hover:bg-[var(--primary)] text-black font-mono font-bold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group ${
                  isSubmitting ? 'cursor-not-allowed opacity-75' : ''
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">&gt;</span>TRANSMIT MESSAGE
                    </>
                  )}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[var(--primary)] transition-all duration-300 -z-0"></span>
              </button>
            </form>
          </div>
        </div>
        
        {/* ASCII Art Signature */}
        <div className="mt-12 font-mono text-xs text-center opacity-30 hover:opacity-70 transition-opacity">
          <pre className="inline-block text-[var(--accent)]">
{`                          _ _             _ _    
 _ __ ___   __ _ _ __   ___  (_|_)_ __   __ _(_) | __
| '_ \` _ \\ / _\` | '_ \\ / _ \\ | | | '_ \\ / _\` | | |/ /
| | | | | | (_| | | | | (_) || | | | | | (_| | |   < 
|_| |_| |_|\\__,_|_| |_|\\___/ |_|_|_| |_|\\__,_|_|_|\\_\\
                                                     `}
          </pre>
        </div>
        
        {/* Decorative elements */}
        <div className="fixed opacity-20 top-1/3 right-0 w-64 h-64 bg-[var(--primary)]/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="fixed opacity-15 bottom-1/3 left-0 w-96 h-96 bg-[var(--accent)]/20 blur-3xl rounded-full pointer-events-none"></div>
      </section>

      {/* Add CSS for glitch effect */}
      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch 500ms linear infinite;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00ff;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }
        
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim2 2.5s infinite linear alternate-reverse;
        }
        
        @keyframes glitch {
          2%, 64% {
            transform: translate(2px,0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px,0) skew(0deg);
          }
          62% {
            transform: translate(0,0) skew(5deg); 
          }
        }
        
        @keyframes glitch-anim {
          0% {
            clip: rect(41px, 9999px, 56px, 0);
          }
          20% {
            clip: rect(18px, 9999px, 86px, 0);
          }
          40% {
            clip: rect(94px, 9999px, 59px, 0);
          }
          60% {
            clip: rect(2px, 9999px, 23px, 0);
          }
          80% {
            clip: rect(39px, 9999px, 89px, 0);
          }
          100% {
            clip: rect(99px, 9999px, 77px, 0);
          }
        }
        
        @keyframes glitch-anim2 {
          0% {
            clip: rect(16px, 9999px, 40px, 0);
          }
          20% {
            clip: rect(9px, 9999px, 98px, 0);
          }
          40% {
            clip: rect(43px, 9999px, 45px, 0);
          }
          60% {
            clip: rect(57px, 9999px, 5px, 0);
          }
          80% {
            clip: rect(36px, 9999px, 31px, 0);
          }
          100% {
            clip: rect(12px, 9999px, 23px, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
