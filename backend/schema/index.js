const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type UricAcid{
        _id: ID!
        uricAcidLevel: String!
        createdAt: String!
    }

    type Weight{
        _id: ID!
        weight: String!
        createdAt: String!
    }

    input UricAcidInput{
        uricAcidLevel: String!
        createdAt: String!
    }

    input WeightInput{
        weight: String!
        createdAt: String!
    }

    type RootQuery{
        uricAcidlevel: [UricAcid!]!
        weight: [Weight!]!
    }

    type RootMutation{
        createUricAcid(uricacidInput: UricAcidInput): UricAcid
        createWeight(weightInput: WeightInput): Weight
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
    
`);