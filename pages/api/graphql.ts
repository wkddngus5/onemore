import { ApolloServer, gql } from 'apollo-server-micro';
import services from '../../data/services';

const typeDefs = gql`
    type Service {
        id: String
        name: String
        uri: String
        description: String
        category: String
        cover: String
    }

    type Query {
        services(category: String!): [ Service ]
    }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        // services: () => services,
        services: ( _parent: any, args: any, ) => {
            const filtered = services.filter( ({ category }) => args.category === 'ALL' ? true : category === args.category );
            return filtered;
        },
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    }
}

export default apolloServer.createHandler({ path: '/api/graphql' });
