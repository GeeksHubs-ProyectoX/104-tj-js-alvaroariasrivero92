const documento = require('./test01.js');

	test('Documento - Nulo', function () {
		//var expected = false;
		var result = documento(null);
		expect(result).toBeFalsy();
	});

	test('Documento - Vacío', function () {
		//var expected = false;
		var result = documento("");
		expect(result).toBeFalsy();
	});

	test('Documento - Formato correcto', function () {
		//var expected = true;
		var result = documento("44878956X");
		expect(result).toBeTruthy();
	});

	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("44878956x");
		expect(result).toBeFalsy();
	});

	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("0000000");
		expect(result).toBeFalsy();
	});

	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("X0000000");
		expect(result).toBeFalsy();
	});

	
	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("000X0000");
		expect(result).toBeFalsy();
	});

	
	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("00000000s");
		expect(result).toBeFalsy();
	});

	
	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("03200000s");
		expect(result).toBeFalsy();
	});

	
	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("0320000Ss");
		expect(result).toBeFalsy();
	});

	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("S");
		expect(result).toBeFalsy();
	});


	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("s");
		expect(result).toBeFalsy();
	});

	test('Documento - Formato incorrecto', function () {
		//var expected = false;
		var result = documento("000c0000");
		expect(result).toBeFalsy();
	});