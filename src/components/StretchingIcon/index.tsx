import Icon from '../Icon'
import clsx from 'clsx'
import styles from './StretchingIcon.module.css'
import { useState, useEffect, useRef } from 'react'

type StretchingIconProps = {
  src: string
  text: string
}

function StretchingIcon(props: StretchingIconProps) {
  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (elementRef.current) {
      elementRef.current.style.width = `${width + 60}px`
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (elementRef.current) {
      elementRef.current.style.width = `${50}px`
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
        onClick={() => {console.log(width)}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon
          src={props.src}
          trim="round"
          width="50px"
        />
        <span ref={textRef} className={clsx(styles['icon-text'])}>{props.text} : {width}</span>
      </div>
    </div>
  )
}

export default StretchingIcon
