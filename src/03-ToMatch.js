describe("ToMatch",()=>{
    /**
     * ToMatch
     * Realiza a comparação utilizando expressões regulares.
     * Caso seja passada uma string como parâmetro - sem ser
     * uma expressão regular - o comparador tentará encontrar
     * o texto passado dentro do valor a ser comparado.
     */
    var tx = "Curso de testes com Jasmine";
    it("deve validar o uso do 'toMatch'",()=>{
        expect(tx).toMatch(/Jasmine/);
        expect(tx).toMatch("Jasmine");
        expect(tx).toMatch(/jasmine/i);
        expect(tx).not.toMatch(/Javascript/);
        expect("14/12/2016").toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });
});