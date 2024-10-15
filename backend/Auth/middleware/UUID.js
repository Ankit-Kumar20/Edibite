const crypto = require('crypto');

const generate_UUID = ()=> {
    return crypto.randomUUID();
}

module.exports = generate_UUID;