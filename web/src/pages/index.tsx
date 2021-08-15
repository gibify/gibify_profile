import Image from 'next/image';

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaDiscord, FaTelegram } from 'react-icons/fa';
// import { SiTiktok } from 'react-icons/si'
// import { IoIosRocket } from 'react-icons/io';

import styles  from '../styles/Home.module.scss';

const linkGithubProfile = 'https://github.com/gibifyofficial';
const linkLinkedinProfile = 'https://www.linkedin.com/in/gibifyofficial/';
const linkTwitterProfile = 'https://twitter.com/gibifyofficial';
// const linkInstagramProfile = 'https://www.instagram.com/gibifyofficial/';
// const linkFacebookProfile = 'https://www.facebook.com/gibifyofficial/';
const linkDiscordProfile = 'https://discord.com/channels/525719253224128532/gibifyofficial#2086';
// const linkTikTokProfile = 'https://www.tiktok.com/@gibifyofficial?lang=pt-BR';
const linkWhatsAppNumber = 'https://api.whatsapp.com/send?phone=554898463847';
const linkTelegramNumber = 'https://msng.link/o/?EvandroGibicoski=tg';
// const linkRocketseatProfile = 'https://app.rocketseat.com.br/me/gibifyofficial';


export default function Home() {
  return (
      <main className={styles.container}> 
      <header>
          <Image src="/images/image-profile.png" alt="Avatar" width={100} height={100}/>
        <div>
          <h1>Evandro Gibicoski</h1>
          <span>@gibifyofficial</span>
        </div>
      </header>
      <section className={styles.content}>
        <div className={styles.textWrapper}>
         <h1><i>Hey 👋, Welcome</i></h1> 
          <p>
            As a Frontend Developer
            my job is to facilitate the life of all browser's users. 
            I love when the user feels an amazing experience using great Apps.
            You can feel free to contact me through of buttons, and then we can build great apps together.
          </p>
        </div>

        <div className={styles.linksWrapper}>
          <a href={linkGithubProfile} target="_blank">
            <FaGithub color="#04D361"/> GitHub
          </a>

          <a href={linkLinkedinProfile} target="_blank">
            <FaLinkedin color="#04D361"/> LinkedIn
          </a>
        
          <a href={linkTwitterProfile} target="_blank"> 
              <FaTwitter color="#04D361"/> Twitter
          </a>
        
          {/* <a href={linkInstagramProfile} target="_blank">
            <FaInstagram color="#04D361"/> Instagram
          </a>

          <a href={linkFacebookProfile} target="_blank">
            <FaFacebook color="#04D361"/> Facebook
          </a> */}

          <a href={linkDiscordProfile} target="_blank">
            <FaDiscord color="#04D361"/> Discord
          </a>

          {/* <a href={linkTikTokProfile} target="_blank">
            <SiTiktok color="#04D361"/> TikTok
          </a> */}

          <a href={linkWhatsAppNumber} target="_blank">
            <FaWhatsapp color="#04D361"/> WhatsApp
          </a>

          <a href={linkTelegramNumber} target="_blank">
            <FaTelegram color="#04D361"/> Telegram
          </a>

          {/* <a href={linkRocketseatProfile} target="_blank">
            <IoIosRocket color="#04D361"/> Rocketseat
          </a> */}
        </div>
        </section>

        <div className={styles.footer}>
          <p>All Rights Reserved by <strong>@gibifyofficial</strong></p>
        </div>

      </main>
  )

}
