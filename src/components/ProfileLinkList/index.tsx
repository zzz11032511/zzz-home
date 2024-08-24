import clsx from 'clsx'
import styles from './ProfileLinkList.module.css'

import StretchingIcon from '../StretchingIcon'
import { useWindowSize } from '../../utils/hooks/useWindowSize'

const profileLinkTemplate = [
  {
    src: '/favicon.ico',
    text: 'About',
    href: '/about',
    backgroundColor: '#ffe8e8',
    color: '#000000',
  },
  {
    src: '/favicon.ico',
    text: 'Blog',
    href: 'https://zzz-blog.netlify.app/',
    backgroundColor: '#fff4e8',
    color: '#000000',
  },
  {
    src: '/favicon.ico',
    text: 'Works',
    href: '/works',
    backgroundColor: '#fdffe8',
    color: '#000000',
  },
  {
    src: '/favicon.ico',
    text: 'Skills',
    href: '/skills',
    backgroundColor: '#eeffe8',
    color: '#000000',
  },
  {
    src: '/favicon.ico',
    text: 'Hobbies',
    href: '/hobbies',
    backgroundColor: '#e8ffff',
    color: '#000000',
  },
  {
    src: '/favicon.ico',
    text: 'Links',
    href: '/links',
    backgroundColor: '#eae8ff',
    color: '#000000',
  },
  {
    src: '/favicon.ico',
    text: 'Contact',
    href: '/contact',
    backgroundColor: '#f7e8ff',
    color: '#000000',
  },
]

function ProfileLinkList() {
  const windowWidth = useWindowSize().width

  return (
    <div className={clsx(styles['link-list'])}>
      {profileLinkTemplate.map((link, index) => {
        if (windowWidth <= 768) {
          return (
            <StretchingIcon
              {...link}
              key={index}
              stretch={false}
              width="200px"
            />
          )
        } else {
          return (
            <StretchingIcon
              {...link}
              key={index}
              stretch={true}
            />
          )
        }
      })}
    </div>
  )
}

export default ProfileLinkList
