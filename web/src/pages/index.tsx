import Image from 'next/image';

import styles  from '../styles/Home.module.scss';
import { data } from '../../src/services/data';

export default function Home() {
  return (
      <main className={styles.container}> 
      <header>
          <Image src="/images/avatar.png" alt="Avatar" width={100} height={100} className={styles.avatar} />
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
          {data.map(item => (
            <a href={item.url} target="_blank" >
              <div className={styles.info}>
                <Image 
                  src={`/icons/${item.icon}`}
                  alt={item.title}
                  width={18}
                  height={18}
                />
                <span>{item.title}</span>
              </div>
            </a>
          ))}
        </div>
        </section>

        <div className={styles.footer}>
          <p>All Rights Reserved by <strong>@gibifyofficial</strong></p>
        </div>

      </main>
  )

}
