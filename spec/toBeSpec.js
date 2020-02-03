/*
toBe
	- Realiza a comparaçao com o operador '===', que compara o valor e também
	o tipo do objeto.
	- Deve ser utilizado para compara valores de forma mais EFETIVA pelo fato
	de também verifcar o TIPO do OBJETO.
*/

describe("toBe",()=>{
	var valorBooleano = true;
	var valorBooleanoCopia = valorBooleano;
	var valorBooleanoTexto = "true";
	var obj1 = {'valor': valorBooleano};
	var obj2 = {'valor': valorBooleano};

	it("deve validar o uso do matcher 'toBe'",()=>{
		expect(valorBooleano).toBe(true);
		expect(valorBooleanoCopia).toBe(valorBooleano);
		expect(valorBooleano).not.toBe(valorBooleanoTexto);
		expect(valorBooleanoTexto).toBe("true");
		expect(obj1).not.toBe(obj2);
	});
});