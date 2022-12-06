const Intern = require("../lib/intern");

describe("Intern", () => {
	it("Get the school", () => {
		const value = "Albion College";
		const instance = new Intern("Jack", 1, "jackdgibbs1991@gmail.com", value);
		expect(instance.school).toBe(value);
	});
	it("Can get role through getRole() function", () => {
		const value = "Intern";
		const instance = new Intern("Jack", 1, "jackdgibbs1991@gmail.com", "1-those-jacks");
		expect(instance.getRole()).toBe(value);
	});
	it("Can get school through the getSchool() function", () => {
		const value = "Albion College";
		const instance = new Intern("Jack", 1, "jackdgibbs1991@gmail.com", value);
		expect(instance.getSchool()).toBe(value);
	})
});
