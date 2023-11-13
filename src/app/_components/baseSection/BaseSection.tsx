import Image from 'next/image'
import Progamer from '@/app/components/login/progamer/Progamer'
import styles from './styles/basesection.module.scss'

export default function Home() {
  return (
    <main>
      <h1 className={styles.maintitle}>推し活をはかどらせよう!</h1>
      <div>
        <div>
          <h1>LOGIN</h1>
        </div>
        <div className={styles.layout}>
          <main>
            <title>推し活をはかどらせよう!</title>
          </main>
          <div>
            <Progamer/>
            <h3>STREAMER</h3>
          </div>
          <h4>PARTSLIST</h4>
          <ul>
            <li>モニター</li>
            <li>キーボード</li>
            <li>マウス</li>
            <li>マウスパッド</li>
            <li></li>
          </ul>
          <div>
            <h6>REVIEW</h6>
          </div>
          {/*<LOGIN />
          <MYPAGE(もしかしたらログインコンポーネントにマイページコンポーネントを入れるかも？) />
          <STREAMER />
          <PROGAMER />
          <REVIEW />  */}
        </div>
      </div>
    </main>
  )
}
