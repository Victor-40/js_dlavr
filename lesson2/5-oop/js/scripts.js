window.addEventListener('load', function(e){

	let result = document.querySelector('.result');

	let monster1 = new Monster(100, 5);
	let monster2 = new Monster(50, 15);
	let monster3 = new Monster(150, 10);

	console.log(monster1);
	console.log(monster2);
	console.log(monster3);
	
	for(let i = 0; i < 10; i++){
		monster2.getDamage(monster1.calcAttack());
		monster3.getDamage(monster2.calcAttack());
		monster1.getDamage(monster3.calcAttack());
		result.innerHTML += monster1.health + ':' + monster2.health + ':' + monster3.health + '<br>';
 	}

});

function Monster(h, p){
	// this = {}
	this.health = h;
	this.power = p;

	this.getDamage = function(damage){
		this.health -= damage;

		if(this.health < 0){
			this.health = 0;
		}
	}

	this.calcAttack = function(){
		return this.power + Math.floor(Math.random() * this.power);
	}
}

/*
function Monster(h, p){
	this.health = h;
	this.power = p;
	
}

Monster.prototype.getDamage = function(damage){
	this.health -= damage;

	if(this.health < 0){
		this.health = 0;
	}
}

Monster.prototype.calcAttack = function(){
	return this.power + Math.floor(Math.random() * this.power);
}
*/
/*
class Moster{
	constructor(h, p){
		this.health = h;
		this.power = p;
	}

	getDamage(damage){
		this.health -= damage;

		if(this.health < 0){
			this.health = 0;
		}
	}

	calcAttack(){
		return this.power + Math.floor(Math.random() * this.power);
	}
}
*/

/*
function createMonster(h, p){
	return {
		health: h,
		power: p,
		getDamage: function(damage){
			this.health -= damage;

			if(this.health < 0){
				this.health = 0;
			}
		},
		calcAttack: function(){
			return this.power + Math.floor(Math.random() * this.power);
		}
	};
}*/