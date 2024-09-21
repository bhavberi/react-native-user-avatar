import { ImageStyle, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { ReactNode } from 'react'

export interface UserAvatarPropsType {
  name: string
  src: string
  bgColor: string
  bgColors: string[]
  textColor: string
  size: number
  imageStyle: ImageStyle
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  borderRadius: number
  noUpperCase: boolean
  ignoreImageTypeCheck: boolean
  component: ReactNode
}