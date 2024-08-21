import Icon from '../Icon'
import clsx from 'clsx'
import styles from './StretchingIcon.module.css'

type StretchingIconProps = {
  src: string
  text: string
}

function StretchingIcon(props: StretchingIconProps) {
  return (
    <div className={clsx(styles['icon-container'])}>
      <div className={clsx(styles['icon-wrapper'])}>
        <Icon
          src={props.src}
          trim="round"
          width="50px"
        />
        <span className={clsx(styles['icon-text'])}>{props.text}</span>
      </div>
    </div>
  )
}

export default StretchingIcon
