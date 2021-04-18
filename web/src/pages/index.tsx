import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

import styles  from '../styles/Home.module.scss';

const linkGithubProfile = 'https://github.com/gibifyofficial';
const linkLinkedinProfile = 'https://www.linkedin.com/in/gibifyofficial/';
const linkTwitterProfile = 'https://twitter.com/gibifyofficial';
const linkInstagramProfile = 'https://www.instagram.com/gibifyofficial/';
const linkWhatsAppNumber = 'https://api.whatsapp.com/send?phone=554898463847';
const linkFacebookProfile = 'https://www.facebook.com/gibifyofficial/';

export default function Home() {
  return (
      <main className={styles.container}>  
          <a href={linkGithubProfile}>
            <FaGithub color="#000000"/> GitHub
          </a>

          <a href={linkLinkedinProfile}>
            <FaLinkedin color="#000000"/> LinkedIn
          </a>
        
          <a href={linkTwitterProfile}> 
              <FaTwitter color="#000000"/> Twitter
          </a>
        
          <a href={linkInstagramProfile}>
            <FaInstagram color="#000000"/> Instagram
          </a>

          <a href={linkFacebookProfile}>
            <FaFacebook color="#000000"/> Facebook
          </a>

          <a href={linkWhatsAppNumber}>
            <FaWhatsapp color="#000000"/> WhatsApp
          </a>

      </main>
  )

}
