import Icon from '../Icon'
import clsx from 'clsx'
import styles from './StretchingIcon.module.css'
import { useRef } from 'react'

const sizeConfig = {
  small: {
    iconWidth: 30,
    textSize: 20,
    wrapperStyle: {
      width: '30px',
      borderRadius: '20px',
    },
  },
  medium: {
    iconWidth: 50,
    textSize: 25,
    wrapperStyle: {
      width: '50px',
      borderRadius: '30px',
    },
  },
  large: {
    iconWidth: 70,
    textSize: 30,
    wrapperStyle: {
      width: '70px',
      borderRadius: '40px',
    },
  },
}

type StretchingIconProps = {
  src: string
  text: string
  size?: 'small' | 'medium' | 'large'
  animationDuration?: string
  Color?: string
  backgroundColor?: string
}

function StretchingIcon(props: StretchingIconProps) {
  const config = sizeConfig[props.size || 'medium']

  const elementRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = () => {
    if (textRef.current && elementRef.current) {
      const newWidth = textRef.current.offsetWidth + config.iconWidth
      elementRef.current.style.width = `${newWidth}px`
    }
  }

  const handleMouseLeave = () => {
    if (elementRef.current) {
      const newWidth = config.iconWidth
      elementRef.current.style.width = `${newWidth}px`
    }
  }

  return (
    <div className={clsx(styles['icon-container'])}>
      <div
        ref={elementRef}
        className={clsx(styles['icon-wrapper'])}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...config.wrapperStyle,
          backgroundColor: props.backgroundColor || 'white',
          transition: `width ${props.animationDuration || '0.3s'} ease`,
        }}
      >
        <Icon
          src={props.src}
          trim="round"
          width={`${config.iconWidth}px`}
        />
        <span
          ref={textRef}
          className={clsx(styles['icon-text'])}
          style={{
            color: props.Color || 'black',
            fontSize: config.textSize,
            fontWeight: 'bold',
            transition: `opacity ${props.animationDuration || '0.3s'} ease`,
          }}
        >
          {props.text}
        </span>
      </div>
    </div>
  )
}

export default StretchingIcon
