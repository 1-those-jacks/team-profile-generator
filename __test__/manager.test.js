const Manager = require("../lib/manager");

describe("Manager", () => {
	it("Get the office number", () => {
		const value = 1;
		const instance = new Manager("Jack", 1, "jackdgibbs1991@gmail.com", value);
		expect(instance.officeNumber).toBe(value);
	});
	it("Can get role through getRole() function", () => {
		const value = "Manager";
		const instance = new Manager("Jack", 1, "jackdgibbs1991@gmail.com", "1-those-jacks");
		expect(instance.getRole()).toBe(value);
	});
});
