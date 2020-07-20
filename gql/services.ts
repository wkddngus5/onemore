import gql from 'graphql-tag';

export const GET_SERVICES = gql`
    query services( $category: String! ) {
        services( category: $category ) {
            id
            name
            uri
            description
            category
            cover
        }
    }
`;

export const GET_SERVICE = gql`
    query service( $id: String! ) {
        service( id: $id ) {
            id
            name
            uri
            description
            category
            cover
            items {
                name
                receipt
                billing
                description
                price
                cover
                currency
            }
        }
    }
`;
