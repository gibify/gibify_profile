import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaDiscord, FaTelegram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'
import { IoIosRocket } from 'react-icons/io';
import styles  from '../styles/Home.module.scss';

const linkGithubProfile = 'https://github.com/gibifyofficial';
const linkLinkedinProfile = 'https://www.linkedin.com/in/gibifyofficial/';
const linkTwitterProfile = 'https://twitter.com/gibifyofficial';
const linkInstagramProfile = 'https://www.instagram.com/gibifyofficial/';
const linkFacebookProfile = 'https://www.facebook.com/gibifyofficial/';
const linkDiscordProfile = 'https://discord.com/channels/525719253224128532/gibifyofficial#2086';
const linkTikTokProfile = 'https://www.tiktok.com/@gibifyofficial?lang=pt-BR';
const linkWhatsAppNumber = 'https://api.whatsapp.com/send?phone=554898463847';
const linkTelegramNumber = 'https://msng.link/o/?EvandroGibicoski=tg';
const linkRocketseatProfile = 'https://app.rocketseat.com.br/me/gibifyofficial';


export default function Home() {
  return (
      <main className={styles.container}> 
      <section className={styles.content}>
        <div className={styles.textWrapper}>
         <h1><i>Hey 👋, Welcome</i> < br />This is Evandro Gibicoski</h1> 
          <p>
            As a Frontend Developer, 
            I am Passionate about Technologies and Innovations,
            my job is to facilitate the life of all browser users. 
            I like when a user feels an amazing experience using great Apps.
            You can feel free to follow me and contact me through of buttons.
          </p>
        </div>

        <div className={styles.linksWrapper}>
          <a href={linkGithubProfile} target="_blank">
            <FaGithub color="#000000"/> GitHub
          </a>

          <a href={linkLinkedinProfile} target="_blank">
            <FaLinkedin color="#000000"/> LinkedIn
          </a>
        
          <a href={linkTwitterProfile} target="_blank"> 
              <FaTwitter color="#000000"/> Twitter
          </a>
        
          <a href={linkInstagramProfile} target="_blank">
            <FaInstagram color="#000000"/> Instagram
          </a>

          <a href={linkFacebookProfile} target="_blank">
            <FaFacebook color="#000000"/> Facebook
          </a>

          <a href={linkDiscordProfile} target="_blank">
            <FaDiscord color="#000000"/> Discord
          </a>

          <a href={linkTikTokProfile} target="_blank">
            <SiTiktok color="#000000"/> TikTok
          </a>

          <a href={linkWhatsAppNumber} target="_blank">
            <FaWhatsapp color="#000000"/> WhatsApp
          </a>

          <a href={linkTelegramNumber} target="_blank">
            <FaTelegram color="#000000"/> Telegram
          </a>

          <a href={linkRocketseatProfile} target="_blank">
            <IoIosRocket color="#000000"/> Rocketseat
          </a>
        </div>
        </section>

        <div>
          <p>All Rights Reserved by <strong>@gibifyofficial</strong></p>
        </div>

      </main>
  )

}
