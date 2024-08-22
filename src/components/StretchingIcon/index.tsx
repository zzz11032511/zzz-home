import Icon from '../Icon'
import clsx from 'clsx'
import styles from './StretchingIcon.module.css'
import { useState, useEffect, useRef } from 'react'

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
      width: '50px',
      borderRadius: '40px',
    },
  },
}

type StretchingIconProps = {
  src: string
  text: string
  size?: 'small' | 'medium' | 'large'
}

function StretchingIcon(props: StretchingIconProps) {
  const config = sizeConfig[props.size || 'medium']

  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (elementRef.current) {
      elementRef.current.style.width = `${width + config.iconWidth}px`
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (elementRef.current) {
      elementRef.current.style.width = `${config.iconWidth}px`
    }
  }

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth)
    }
  }, [])

  return (
    <div className={clsx(styles['icon-container'])}>
      <div
        ref={elementRef}
        className={clsx(styles['icon-wrapper'])}
        onClick={() => {
          console.log(width)
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={config.wrapperStyle}
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
            fontSize: config.textSize,
            fontFamily: 'Josefin Sans',
            fontWeight: '700',
          }}
        >
          {props.text}
        </span>
      </div>
    </div>
  )
}

export default StretchingIcon
