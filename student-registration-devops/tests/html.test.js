const fs = require("fs");
const path = require("path");

describe("Student Registration HTML Tests", () => {

    let html;

    beforeAll(() => {

        const filePath = path.join(
            __dirname,
            "..",
            "index.html"
        );

        expect(fs.existsSync(filePath)).toBe(true);

        html = fs.readFileSync(
            filePath,
            "utf8"
        );
    });


    test("index.html should exist", () => {

        const filePath = path.join(
            __dirname,
            "..",
            "index.html"
        );

        expect(fs.existsSync(filePath)).toBe(true);
    });


    test("registration form should exist", () => {

        expect(html).toMatch(
            /<form[^>]*id=["']registrationForm["']/i
        );
    });


    test("student name field should exist", () => {

        expect(html).toMatch(
            /id=["']name["']/i
        );
    });


    test("email field should exist", () => {

        expect(html).toMatch(
            /id=["']email["']/i
        );
    });


    test("phone field should exist", () => {

        expect(html).toMatch(
            /id=["']phone["']/i
        );
    });


    test("date of birth field should exist", () => {

        expect(html).toMatch(
            /id=["']dob["']/i
        );
    });


    test("gender field should exist", () => {

        expect(html).toMatch(
            /id=["']gender["']/i
        );
    });


    test("course field should exist", () => {

        expect(html).toMatch(
            /id=["']course["']/i
        );
    });


    test("branch field should exist", () => {

        expect(html).toMatch(
            /id=["']branch["']/i
        );
    });


    test("academic year field should exist", () => {

        expect(html).toMatch(
            /id=["']year["']/i
        );
    });


    test("address field should exist", () => {

        expect(html).toMatch(
            /id=["']address["']/i
        );
    });


    test("city field should exist", () => {

        expect(html).toMatch(
            /id=["']city["']/i
        );
    });


    test("state field should exist", () => {

        expect(html).toMatch(
            /id=["']state["']/i
        );
    });


    test("pincode field should exist", () => {

        expect(html).toMatch(
            /id=["']pincode["']/i
        );
    });


    test("registration button should exist", () => {

        expect(html).toMatch(
            /<button[^>]*>[\s\S]*Register Student[\s\S]*<\/button>/i
        );
    });

});