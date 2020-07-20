import _ from 'lodash';
import { ApolloServer, gql } from 'apollo-server-micro';
import services from '../../data/services';
import { Service } from '../../Doamin/Service';
import { Item } from '../../Doamin/Item';

const typeDefs = gql`
    type Query {
        services(category: String!): [ Service ]
        service(id: String!): Service
    }
    type Service {
        id: String
        name: String
        uri: String
        description: String
        category: String
        cover: String
        items: [ Item ]
    }
    type Item {
        name: String
        receipt: String
        billing: String
        description: String
        price: Float
        cover: String
        currency: String
    }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        services: ( _parent: any, args: any ) => {
            if ( args.category === 'ALL' ) {
                return services;
            }
            const filtered = _.filter( services, ( service: Service ) =>  _.get( service, 'category' ) === args.category );
            return filtered;
        },
        service: ( _parent: any, args: any ) => {
            const finded = _.find( services, ( service: Service ) => _.get( service, 'id' ) == args.id );
            return finded;
        }
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    }
}

export default apolloServer.createHandler({ path: '/api/graphql' });
