const Employee = require("../lib/employee");

describe("Employee", ()=> {
	it("Can invoke Employee instance", () => {
		const instance = new Employee();
		expect(typeof(instance)).toBe("object");
	});
	it("Can add the name", () => {
		const name = "Jack";
		const instance = new Employee(name);
		expect(instance.name).toBe(name);
	});
	it("Can add the ID", () => {
		const value = 1;
		const instance = new Employee("Jack", value);
		expect(instance.id).toBe(value);
	});
	it("Can add email address", () => {
		const value = "jackdgibbs1991@gmail.com";
		const instance = new Employee("Jack", 1, value);
		expect(instance.email).toBe(value);
	});
	it("Can get name through the function getName()", () => {
		const value = "Jack";
		const instance = new Employee(value);
		expect(instance.getName()).toBe(value);
	});
	it("Can get email through the function getEmail()", () => {
		const value = "jackdgibbs1991@gmail.com";
		const instance = new Employee("Jack", 1, value);
		expect(instance.getEmail()).toBe(value);
	});
	it("Can get role through the function getRole()", () => {
		const value = "Employee";
		const instance = new Employee("Jack", 1, "jackdgibbs1991@gmail.com");
		expect(instance.getRole()).toBe(value);
	})
})
