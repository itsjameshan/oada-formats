var types = require('../../../../../../types.js');

module.exports = {
    id: types.OADA_CONFIGURATION_MT,
    description: 'application/vnd.oada.well-known.oada-configuration.1+json',

    required: [
        'oada_base_uri',
        'authorization_endpoint',
        'token_endpoint',
        'registration_endpoint',
        'client_assertion_signing_alg_values_supported'
    ],

    // You can add any custom keys to oada-configuration that you want
    additionalProperties: true,

    // Here are the standard-defined properties:
    properties: {
        'oada_base_uri': {
            type: 'string',
            pattern: '^https://.*'
        },
        'authorization_endpoint': {
            type: 'string',
            pattern: '^https://.*'
        },
        'token_endpoint': {
            type: 'string',
            pattern: '^https://.*'
        },
        'registration_endpoint': {
            type: 'string',
            pattern: '^https://.*'
        },
        'client_assertion_signing_alg_values_supported': {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            },
        }
    },
};