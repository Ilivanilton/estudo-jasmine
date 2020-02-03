describe("Calculadora",()=>{
	var calc;

	beforeAll(()=>{
		calc = new Calculadora();
	});

	it("Operação de soma",()=>{
		expect(calc.somar(1,1)).toBe(2);
	});

	it("Operação de subtrair",()=>{
		expect(calc.subtrair(1,1)).toBe(0);
		expect(calc.subtrair(0,1)).toBe(-1);
	});

	it("Operação de dividir",()=>{
		expect(calc.dividir(1,1)).toBe(1)
	});

});