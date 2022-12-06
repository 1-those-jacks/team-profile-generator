const Engineer = require("../lib/engineer");

describe("Engineer", () => {
	it("Can get the GitHub account", () => {
		const value = "1-those-jacks";
		const instance = new Engineer("Jack", 1, "jackdgibbs1991@gmail.com", value);
		expect(instance.github).toBe(value);
	});
	it("Can get role through getRole() function", () => {
		const value = "Engineer";
		const instance = new Engineer("Jack", 1, "jackdgibbs1991@gmail.com", "1-those-jacks");
		expect(instance.getRole()).toBe(value);
	});
	it("Can get GitHub username through getGitHub() function", () => {
		const value = "1-those-jacks";
		const instance = new Engineer("Jack", 1, "jackdgibbs1991@gmail.com", value);
		expect(instance.getGitHub()).toBe(value);
	});
})
