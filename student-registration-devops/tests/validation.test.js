const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
    path.join(__dirname, "../index.html"),
    "utf8"
);

document.documentElement.innerHTML = html;

const {
    validateName,
    validateEmail,
    validatePhone,
    validateDob,
    validateSelection,
    validateAddress,
    validateCity,
    validateState,
    validatePincode,
    validateRegistration
} = require("../validation");


describe("Student Registration Validation Tests", () => {

    test("accepts valid student name", () => {
        expect(validateName("Aryan Raj")).toBe(true);
    });

    test("rejects very short name", () => {
        expect(validateName("A")).toBe(false);
    });

    test("rejects name containing numbers", () => {
        expect(validateName("Aryan123")).toBe(false);
    });

    test("accepts valid email", () => {
        expect(validateEmail("aryan@gmail.com")).toBe(true);
    });

    test("rejects invalid email", () => {
        expect(validateEmail("aryan@")).toBe(false);
    });

    test("accepts valid 10 digit phone", () => {
        expect(validatePhone("9876543210")).toBe(true);
    });

    test("rejects phone with less than 10 digits", () => {
        expect(validatePhone("987654321")).toBe(false);
    });

    test("rejects phone containing letters", () => {
        expect(validatePhone("98765abc10")).toBe(false);
    });

    test("accepts valid date of birth", () => {
        expect(validateDob("2005-05-15")).toBe(true);
    });

    test("rejects empty date of birth", () => {
        expect(validateDob("")).toBe(false);
    });

    test("accepts selected course", () => {
        expect(validateSelection("B.Tech")).toBe(true);
    });

    test("rejects empty course", () => {
        expect(validateSelection("")).toBe(false);
    });

    test("accepts valid address", () => {
        expect(
            validateAddress("Greater Noida, Uttar Pradesh")
        ).toBe(true);
    });

    test("rejects short address", () => {
        expect(validateAddress("Noida")).toBe(false);
    });

    test("accepts valid city", () => {
        expect(validateCity("Greater Noida")).toBe(true);
    });

    test("rejects invalid city", () => {
        expect(validateCity("12345")).toBe(false);
    });

    test("accepts valid state", () => {
        expect(validateState("Uttar Pradesh")).toBe(true);
    });

    test("rejects invalid state", () => {
        expect(validateState("12345")).toBe(false);
    });

    test("accepts valid 6 digit pincode", () => {
        expect(validatePincode("201310")).toBe(true);
    });

    test("rejects invalid pincode", () => {
        expect(validatePincode("12345")).toBe(false);
    });

    test("accepts complete valid registration", () => {

        const student = {
            name: "Aryan Raj",
            email: "aryan@gmail.com",
            phone: "9876543210",
            dob: "2005-05-15",
            gender: "Male",
            course: "B.Tech",
            branch: "Data Science",
            year: "2nd Year",
            address: "Greater Noida, Uttar Pradesh",
            city: "Greater Noida",
            state: "Uttar Pradesh",
            pincode: "201310"
        };

        expect(validateRegistration(student)).toBe(true);
    });

});