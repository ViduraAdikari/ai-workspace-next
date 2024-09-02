import {IChannel, IMessage} from "@/store/features/workspace/workspaceReducerTypes";

export interface INickNamePayload {
  nickname: string
}

export interface ISetChannelsPayload {
  channels: IChannel[] | null
}

export interface ISelectedChannelPayload {
  id: string
}

export interface ISetNewMessagePayload {
  channelID: string
  message: IMessage
}
