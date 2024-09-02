import {gql} from "@apollo/client";

export const MESSAGE_FRAGMENT = gql`
    fragment MessageData on Message {
        id
        text
        time
    }
`;
