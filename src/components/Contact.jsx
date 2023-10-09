import {React, useState, useRef }from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../HigherOrderComponents';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
 
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
 
  const [loading, setLoading] = useState(false);
 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: [value]})
  };

  const resetForm = () => {
    setLoading(false);
    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.message) {
      alert('I know you wanna test this out but I already got it covered, enter some details human 🤣');
      return
    };
    setLoading(true);

    try {
      const templateId = 'template_rzk05xg';
      const serviceId = 'service_ugeqy9p';
      const publicKey = 'NDmru8ETItNHefrgM';
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        to_name: 'Naren',
        from_email: form.email,
        to_email: 'narenderv7@gmail.com',
        message: form.message
      }, publicKey);
      alert('Got your message, hang in there, I\'ll get back ASAP 🙂');
      resetForm();
    } catch (err) {
      setLoading(false);
      alert('Oh no! 🫨, this shouldn\'t have happened, please try again!')
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.heroSubText}>Get in Touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name.</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="Whats's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email.</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Whats's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message.</span>
            <textarea type="text-area" rows="7" name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">{loading? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>



    </div>
  )
}

export default SectionWrapper(Contact, "contact");