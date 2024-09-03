import {gql} from "@apollo/client";
import {FULL_MESSAGE_FRAGMENT} from "@/graphql/fragments/messageFragments";

export const GET_CHANNEL_MESSAGES = gql`
    ${FULL_MESSAGE_FRAGMENT}
    
    query Messages($channelId: String!) {
        messages(channelId: $channelId) {
            ...MessageData
        }
    }
`;
