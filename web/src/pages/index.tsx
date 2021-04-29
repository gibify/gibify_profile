import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaTelegram } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import styles  from '../styles/Home.module.scss';

const linkGithubProfile = 'https://github.com/gibifyofficial';
const linkLinkedinProfile = 'https://www.linkedin.com/in/gibifyofficial/';
const linkTwitterProfile = 'https://twitter.com/gibifyofficial';
const linkInstagramProfile = 'https://www.instagram.com/gibifyofficial/';
const linkWhatsAppNumber = 'https://api.whatsapp.com/send?phone=554898463847';
const linkTelegramNumber = 'https://msng.link/o/?EvandroGibicoski=tg';
const linkFacebookProfile = 'https://www.facebook.com/gibifyofficial/';
const linkRocketseatProfile = 'https://app.rocketseat.com.br/me/gibifyofficial';

export default function Home() {
  return (
      <main className={styles.container}>  
         <h1><i>Hey 👋, Welcome</i> < br />This is Evandro Gibicoski</h1> 
          <p>
            As a Frontend Developer, 
            I am Passionate about Technologies and Innovations,
            my job is to facilitate the life of all browser users. 
            I like when a user feels an amazing experience using great web apps.
            You can feel free to follow and contact me through of buttons below.
          </p>
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

          <a href={linkTelegramNumber}>
            <FaTelegram color="#000000"/> Telegram
          </a>

          <a href={linkRocketseatProfile}>
            <IoIosRocket color="#000000"/> Rocketseat
          </a>

      </main>
  )

}
