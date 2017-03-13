(function(){
	'use_strict';
	describe('Animal Class: Create an animal and return some of its properties', function(){
		it('The animal created should be a type of `object`, and an instance of the `Animal` class', function() {      
			var dog = new Animal('Dog');      
			expect(typeof dog).toEqual(typeof {});      
			expect(dog instanceof Animal).toBeTruthy();    
		});

		it('Should return Dog as the Animal name the name argument is not passed along with it ', function(){
			var dog = new Animal();
			expect(dog.name).toBe('Dog');
		});

		it('Should return the name of the Animal if a name is passed with to it', function(){
			var cat = new Animal('Cat');
			expect(cat.name).toBe('Cat');
		});

		it('Should return `Dog is a mammal` if 4 is passed as the number of legs', function(){
			var dog = new Animal('Dog');
			expect(dog.type()).toBe('Dog is a mammal');
		})

		it('The animal should not be able to fly if it has more than 2 legs', function(){
			var cow = new Animal('Cow', 4);
			expect(cow.canFly()).toBe('Cow cannot fly');
		})

		it('Should state if animal is a wild or domestic animal', function(){
			var elephant = new Animal('Elephant', 4, true);
			expect(elephant.checkwild()).toBe('Elephant is a wild animal');
		})
	})
})();