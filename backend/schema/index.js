const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type UricAcid{
        _id: ID!
        uricAcidLevel: String!
        createdAt: String!
    }

    input UricAcidInput{
        uricAcidLevel: String!
        createdAt: String!
    }

    type RootQuery{
        uricAcidlevel: [UricAcid!]!
    }

    type RootMutation{
        createUricAcid(uricacidInput: UricAcidInput): UricAcid
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
    
`);