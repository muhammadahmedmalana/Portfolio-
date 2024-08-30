import React, { useState } from 'react';
import Header from '../../components/Header';
import { MdContactPhone } from "react-icons/md";
import { Animate } from 'react-simple-animate';
import emailjs from 'emailjs-com';
import './style.scss';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }

    emailjs.send('service_45vzoko', 'template_mx6x1qs', form, 'KMTtaG1UNJHUD9OTI')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSent(true);
        setForm({ name: '', email: '', message: '' }); // Clear form fields
        setError(''); // Clear any previous error message
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setError('Failed to send email. Please try again later.');
      });
  };

  return (
    <section className="contact" id='contact'>
      <Header headerText="My Contact" icon={<MdContactPhone />} />

      <div className='contact__content'>
        <Animate
          play
          delay={0}
          duration={1}
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3>Let's Talk</h3>
        </Animate>
        <Animate
          play
          delay={0}
          duration={1}
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <form className='contact__content__form' onSubmit={handleSubmit}>
            <div className='contact__content__form__formWrapper'>
              <div>
                <label htmlFor='name' className='nameLabel'>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className='nameInput'
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='emailLabel'>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className='emailInput'
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='message' className='messageLabel'>Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className='messageInput'
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className='contact__content__form__submit'
            >
              SUBMIT
            </button>
            {isSent && <p className='contact__content__form__status'>Thank you! Your message has been sent.</p>}
            {error && <p className='contact__content__form__status error'>{error}</p>}
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
