import crypto from "crypto"

function hashFunction(mensaje){
    const hash = crypto.createHash('sha512');
    hash.update(mensaje);
    return hash.digest('hex');
}

module.exports = hashFunction;