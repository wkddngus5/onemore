import gql from 'graphql-tag';

export const ALL_SERVICES = gql`
    query allServices( $category: String! ) {
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
