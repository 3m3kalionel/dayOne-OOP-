class Company {
	constructor (accountBalance) {
		this.accountBalance = accountBalance;
	}

	get Balance() {
		return this.accountBalance;
	}

	payStaff() {
		return this.accountBalance - ( Number(tc.salary) + Number(fellow.salary) );
		console.log("`Paid!!`");
	}
}


class Andelan {
	constructor(name, level) {
		this.name = name;
		this.level = level;
		this.yell = "TIA";
	}
}

class Fellow extends Andelan {
	
	get dressStyle() {
		return "Casual";
	}

	get salary() {
		return 200000;
	}

	greeting() {
		return (`${this.yell} + fistbump!!`);
	}

}

class TC extends Andelan {
	
	get dressStyle() {
		return "Business Casual";
	}

	get salary() {
		return 350000;
	}

	greeting() {
		return `**Firm Outstretched hand** Hello, I am ${this.name} + and ${this.yell}`;
	}

}

var fellow = new Fellow("Chuks", "d0");
var tc = new TC("Babajide", "d9");

// var andela = new Company(100000);
// console.log(andela.Balance);
// console.log(andela.payStaff());
// console.log(tc.greeting());
// console.log(fellow.greeting())
