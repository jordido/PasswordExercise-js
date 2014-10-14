// TODO LIST - Password exercise

// 6 chars long
// lowercase chars
// upercas chars
// number
// underscore


// 1- check the length;
// 2- check presence of underscore
// 3- check presence of lowercase
// 4- check presence of uppercase

function CheckPass () {
	return "123456";
}

describe("Password checking", function() {

	it("it is 6 chars long", function() {
		expect(CheckPass().length).toEqual(6);
	})

})