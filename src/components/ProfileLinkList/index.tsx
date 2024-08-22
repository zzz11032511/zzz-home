import clsx from 'clsx'
import styles from './ProfileLinkList.module.css'

import StretchingIcon from '../StretchingIcon'

function ProfileLinkList() {
  return (
    <div className={clsx(styles['link-list'])}>
      <StretchingIcon
        src="/favicon.ico"
        text="About"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Blog"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Works"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Skills"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Hobbies"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Links"
      ></StretchingIcon>
      <StretchingIcon
        src="/favicon.ico"
        text="Contact"
      ></StretchingIcon>
    </div>
  )
}

export default ProfileLinkList
