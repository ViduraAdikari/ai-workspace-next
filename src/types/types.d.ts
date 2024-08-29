
type UISizes = 'small' | 'medium' | 'large';
export type ThemeTypes = "light" | "dark";

export type HeadingTypes = 'h1' | 'h2';

export type LoginResponseData = {
  isAuth: boolean
  displayName: string
}

export type AvatarIcon = {
  icon: any
  color: string
  alt: string
}

interface IGuest {
  id: string
  nickname: string
  avatar?: AvatarIcon
}
