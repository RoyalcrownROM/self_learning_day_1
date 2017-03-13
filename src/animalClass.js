function Animal(name='Dog', legs=4, wild=false)
{
	this.name = name;
	this.legs = legs;
	this.wild = wild;
	this.checkwild = function(){
		if(this.wild == true){
			return this.name + " is a wild animal";
		}
		else if(this.wild == false){
			return this.name + " is a domestic animal";
		}
		else{
			return "Wild parameter can only take booleans";
		}
	};
	this.type = function(){
		if(this.legs == 2){
			return this.name + " is a bird";
		}
		else if(this.legs == 4){
			return this.name + " is a mammal";;
		}
		else if(this.legs == 1 || this.legs == 3 || this.legs > 4){
			return this.name + " is not an animal. An animal cannot have " + this.legs + " leg(s)";
		}else if(this.legs == 0){
			return this.name + " is likely a fish";
		}
	};
	this.canFly = function(){
		if(this.legs == 2){
			return this.name + " can fly";
		}
		else{
			return this.name + " cannot fly";
		}
	}
}