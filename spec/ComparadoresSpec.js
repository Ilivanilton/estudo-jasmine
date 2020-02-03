describe("Comparadores",()=>{
	/*
	toBe
		- Realiza a comparaçao com o operador '===', que compara o valor e
		também o tipo do objeto.
		- Deve ser utilizado para compara valores de forma mais EFETIVA pelo
		fato de também verifcar o TIPO do OBJETO.
	*/
	
	describe("toBe",()=>{
		var valorBooleano = true;
		var valorBooleanoCopia = valorBooleano;
		var valorBooleanoTexto = "true";
		var obj1 = {'valor': valorBooleano};
		var obj2 = {'valor': valorBooleano};
	
		it("deve validar o uso do 'toBe'",()=>{
			expect(valorBooleano).toBe(true);
			expect(valorBooleanoCopia).toBe(valorBooleano);
			expect(valorBooleano).not.toBe(valorBooleanoTexto);
			expect(valorBooleanoTexto).toBe("true");
			expect(obj1).not.toBe(obj2);
		});
	});

	/*
	toEqual
		- Realiza a comparação de dois elementos de modo muito similar ao 'toBe'
		- A única diferença em relação ao toBe é que elel não compara o TIPO do
		OBJETO, somente seu valor.
		- É recomendado seu uso para comparação de VALORES LITERAIS
	*/
	
	describe("toEqual",()=>{
		var valorBooleano = true;
		var valorBooleano2 = true;
		var valorBooleanoCopia = valorBooleano;
		var valorBooleanoTexto = "true";
		var obj1 = {'valor': valorBooleano};
		var obj2 = {'valor': valorBooleano};
	
		it("deve validar o uso do 'toEqual'",()=>{
			expect(valorBooleano).toEqual(true);
			expect(valorBooleano).toEqual(valorBooleano2);
			expect(valorBooleanoCopia).toEqual(valorBooleano);
			expect(valorBooleano).not.toEqual(valorBooleanoTexto);
			expect(valorBooleanoTexto).toEqual("true");
			expect(obj1).toEqual(obj2);
		});
	});
});