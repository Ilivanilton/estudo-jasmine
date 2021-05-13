describe('toBeDefined',()=>{
    /**
     * Realiza a comparação de um objeto como não
     * sendo 'undefined'. Existem 2 forma de uma variavel não
     * ser definido: só declaração(var tx;) ou texto com palavra
     * undefined(var tx = undefined).
     * 
     * Prefira usar 'toBeUndefined' ao invés de 'not.toBeDefined'
     * para deixar o código mais fácil compreensão
     */
    
    var numero = 10;
    var tx;
    var obj={'valor':10};

    it('deve validar o uso do "toBeDefined"',()=>{
        expect(numero).toBeDefined();
        expect(tx).not.toBeDefined();
        expect(obj.valor).toBeDefined();
        expect(obj.mensagem).not.toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();
    });
});