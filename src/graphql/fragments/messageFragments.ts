import {gql} from "@apollo/client";

export const MESSAGE_FRAGMENT = gql`
    fragment MessageData on Message {
        id
        text
        time
    }
`;

export const FULL_MESSAGE_FRAGMENT = gql`
    fragment MessageData on Message {
        id
        text
        time
        user {
            id
            nickname
            iconName
        }
    }
`;
