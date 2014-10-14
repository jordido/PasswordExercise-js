// TODO LIST - Password exercise

// 6 chars long
// lowercase chars
// uppercase chars
// number
// underscore

// isValid('abc') => false
// isValid('') => false
// isValid('Ab_3fg') => true
// isValid('abcdef') => false
// isValid('AbCdE2') => false
// isValid('abc_de2') => false
// isValid('Ab_DEF') => false
// isValid('ABC_123') => false

function isValid(password) {
	if (password.length == 6) {
		return true;
	} else {
		return false;
	}
}

describe("Password checking", function() {

	it("can't be an empty string", function() {
		expect(isValid("")).toBeFalsy();
	});

	it("it is 6 chars long", function() {
		expect(isValid("abc")).toBeFalsy();
	});

	it("must have an underscore", function() {
		expect(isValid("ABcd12")).toBeFalsy();
	});

});