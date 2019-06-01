const uricAcidResolver = require('./uricAcid')
const weightResolver = require('./weight')

const rootResolver = {
    ...uricAcidResolver,
    ...weightResolver
}

module.exports = rootResolver