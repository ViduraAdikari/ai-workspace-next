import {IconsName} from "@/const/avatarIcons";

interface IChannel {
  id: string
  name: string
  isSelected?: boolean //if clicked to view providers
  messages?: IMessage[]
}

type AvatarIcon = {
  icon: any
  color: string
  alt: string
}

interface IMessage {
  id: string
  user: IGuest
  text: string
  time: Date | number
  isClientOnly?: boolean // true if the message is displayed before refreshing from backend
}

interface IGuest {
  id: string
  nickname: string
  iconName?: IconsName
  avatar?: AvatarIcon
}

interface WorkspaceState {
  /**
   * is left nav drawer open in Dashboard layout
   */
  isDrawerOpen: boolean;
  /**
   * user who signed in as a guest.
   */
  guest: IGuest | null
  /**
   * channels from the api
   */
  channels: IChannel[] | null
}

export type {WorkspaceState, IChannel, AvatarIcon, IGuest, IMessage};
