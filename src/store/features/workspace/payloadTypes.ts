
export interface INickNamePayload {
  nickname: string
}

export interface ISetChannelsPayload {
  channels: IChannel[] | null
}

export interface ISelectedChannelPayload {
  id: string
}
