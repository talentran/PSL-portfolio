import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <a href="https://www.facebook.com/TalenTran.2811" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tri-d-tran-11-28-sagittarius/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/talentran" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:tri.sagittarius@gmail.com">
            Email: tri.sagittarius@gmail.com
          </a>
        </li>
        <li>
          Điện thoại: (206) 396-0921
        </li>
        <li>
          <a href="https://mypage.tritran43.repl.co/" target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
