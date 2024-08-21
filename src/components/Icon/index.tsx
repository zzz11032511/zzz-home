import styles from './Icon.module.css'
import { clsx } from 'clsx'

export type TrimStyle = 'round' | 'square' | 'rounded-square' | 'none'

export type IconProps = {
  src: string
  alt?: string
  trim?: TrimStyle
  borderBold?: string
  borderColor?: string
  width?: string
}

function borderRadiusByStyle(trim: TrimStyle): string {
  if (trim === 'round') {
    return '50%'
  } else if (trim === 'square') {
    return '0'
  } else if (trim === 'rounded-square') {
    return '1.5rem'
  }

  return '0'
}

function Icon(props: IconProps) {
  const borderBold = props.borderBold || '0px'
  const borderColor = props.borderColor || 'black'
  const borderRadius = borderRadiusByStyle(props.trim || 'none')

  return (
    <img
      className={clsx(styles.icon)}
      src={props.src}
      alt={props.alt}
      style={{
        borderRadius: borderRadius,
        border: `${borderBold} solid ${borderColor}`,
        width: props.width,
        height: props.width,
      }}
    />
  )
}

export default Icon
