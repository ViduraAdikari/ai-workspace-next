import {gql} from "@apollo/client";
import {CHANNEL_FRAGMENT} from "@/graphql/fragments/channelFragment";

export const GET_CHANNELS = gql`
    ${CHANNEL_FRAGMENT}
    
    query Channels {
        channels {
            ...ChannelData
        }
    }
`;
