import {gql} from "@apollo/client";

export const CHANNEL_FRAGMENT = gql`
    fragment ChannelData on Channel {
        id
        name
    }
`;
