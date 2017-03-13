describe('Prime tests', function(){
	describe('Case for some non number values', function(){
		it('Should return Invalid input for "hello"', function(){
			expect(getPrimes("Hello")).toEqual("Invalid input");
		});

		it('Should return Invalid input for null values', function(){
			expect(getPrimes(null)).toEqual("Invalid input");
		});

		it('Should return Number must be greater than 0 for -10', function(){
			expect(getPrimes(-10)).toEqual("Number must be greater than 0");
		});

		it('Should return Number must be greater than 0 for 0', function(){
			expect(getPrimes(0)).toEqual("Number must be greater than 0");
		});

		it('Should return [1, 2, 3, 5, 7] for an input of 10', function(){
			expect(getPrimes(10)).toEqual([1, 2, 3, 5, 7]);
		})

		it('Should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19 ] for an input of 20', function(){
			expect(getPrimes(20)).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19 ]);
		})
	})
})