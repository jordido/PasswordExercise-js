// TODO LIST - Password exercise

// 6 chars long
// lowercase chars
// uppercase chars
// number
// underscore

// isValid('Ab_3fg') => true
// isValid('') => false
// isValid('aB3_') => false
// isValid('AbCdE2') => false
// isValid('abc_de2') => false
// isValid('Ab_DEF') => false
// isValid('ABC_123') => false

function isValid(password) {
	if (password.length < 6) {
		return false;
	} else if (password.search(/[0-9]/) == -1){
		return false;
	} else if (password.search(/[A-Z]/) == -1){
		return false;
	} else if (password.search(/[a-z]/) == -1){
		return false;
	} else if (password.search(/_/) == -1){
		return false;
	} else {
		return true;
	}
}

describe("Password checking", function() {
	it("should return true for a valid password", function() {
		expect(isValid("Ab_3fg")).toBeTruthy();
	});

	it("should be exactly 6 characters long", function() {
		expect(isValid("Ab3_")).toBeFalsy();
	});

	it("should have a number", function() {
		expect(isValid("Ab_DEF")).toBeFalsy();
	});

	it("should have an uppercase letter", function() {
		expect(isValid("abc_e2")).toBeFalsy();
	});

	it("should have an lowercase letter", function() {
		expect(isValid("ABC_E2")).toBeFalsy();
	});

	it("should have an underscore", function() {
		expect(isValid("ABaDE2")).toBeFalsy();
	});
});