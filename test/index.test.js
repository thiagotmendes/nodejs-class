import {expect, test} from "@jest/globals"
import pegaArquivo from "../index.js"

test('deve ser uma função', () => {
    expect( typeof pegaArquivo() ).toBe('function');
});