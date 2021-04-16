import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

import styles  from '../styles/Home.module.scss';

const linkGithubProfile = 'https://github.com/gibifyofficial';
const linkLinkedinProfile = 'https://www.linkedin.com/in/gibifyofficial/';
const linkTwitterProfile = 'https://twitter.com/gibifyofficial';
const linkInstagramProfile = 'https://www.instagram.com/gibifyofficial/';

export default function Home() {
  return (
      <main className={styles.container}>
        <div>
          <FaGithub color="#000000"/>
          <a href={linkGithubProfile}>GitHub</a>
        </div>
        <div>
          <FaLinkedin color="#000000"/>
          <a href={linkLinkedinProfile}>LinkedIn</a>
        </div>
        <div>
          <FaTwitter color="#000000"/>
            <a href={linkTwitterProfile}>Twitter</a>
        </div>
        <div>
          <FaInstagram color="#000000"/>
            <a href={linkInstagramProfile}>Instagram</a>
        </div>
      </main>
  )

}
