import styles from './ProfileDetail.module.css'
import clsx from 'clsx'

import Hobbies from '../../contents/Hobbies'
import Contact from '../../contents/Contact'
import About from '../../contents/About'
import Works from '../../contents/Works'
import Links from '../../contents/Links'
import { Link } from 'react-router-dom'

type ProfileDetailProps = {
  path: '/about' | '/works' | '/hobbies' | '/links' | '/contact'
}

function ProfileDetail(props: ProfileDetailProps) {
  let body = null

  switch (props.path) {
    case '/about':
      body = <About />
      break
    case '/works':
      body = <Works />
      break
    case '/hobbies':
      body = <Hobbies />
      break
    case '/links':
      body = <Links />
      break
    case '/contact':
      body = <Contact />
      break
  }

  return (
    <div className={clsx(styles['profile-detail'])}>
      <div className={clsx(styles['profile-detail-wrapper'])}>{body}</div>
      <Link to="..">ホームに戻る</Link>
    </div>
  )
}

export default ProfileDetail
