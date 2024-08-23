import clsx from 'clsx'
import styles from './ProfileLinkList.module.css'

import StretchingIcon from '../StretchingIcon'

function ProfileLinkList() {
  return (
    <div className={clsx(styles['link-list'])}>
      <StretchingIcon
        src="/favicon.ico"
        text="About"
        backgroundColor="#ffe8e8"
        Color="#000000"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Blog"
        backgroundColor="#fff4e8"
        Color="#000000"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Works"
        backgroundColor="#fdffe8"
        Color="#000000"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Skills"
        backgroundColor="#eeffe8"
        Color="#000000"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Hobbies"
        backgroundColor="#e8ffff"
        Color="#000000"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Links"
        backgroundColor="#eae8ff"
        Color="#000000"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Contact"
        backgroundColor="#f7e8ff"
        Color="#000000"
      ></StretchingIcon>
    </div>
  )
}

export default ProfileLinkList
