const hashFunction = require('./testindex.mjs');

test('Verificar hash', () => {
    const msg = "hola";
    const hash = hashFunction(msg);
    expect(hash).toEqual("e83e8535d6f689493e5819bd60aa3e5fdcba940e6d111ab6fb5c34f24f86496bf3726e2bf4ec59d6d2f5a2aeb1e4f103283e7d64e4f49c03b4c4725cb361e773");
})