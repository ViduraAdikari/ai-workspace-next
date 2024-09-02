import {gql} from "@apollo/client";
import {MESSAGE_FRAGMENT} from "@/graphql/fragments/messageFragment";

export const POST_MESSAGE = gql`
    ${MESSAGE_FRAGMENT}
    
    mutation CreateMessage($createMessageInput: CreateMessageInput!) {
        createMessage(createMessageInput: $createMessageInput) {
            ...MessageData
        }
    }
`;
