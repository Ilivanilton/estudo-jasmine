describe("toEqual",()=>{

	/**
	 * toEqual
	 * - Realiza a comparação de dois elementos de modo muito similar ao 'toBe'.
	 * - A punica diferença em releção ao toBe é que ele não compara o TIPO DO OBJETO,
	 * somente seu valor.
	 * - É recomendado seu uso para comparação de VALORES LITERAIS
	 */
	
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