function validateName(name) {
    name = name.trim();

    return (
        name.length >= 2 &&
        /^[A-Za-z ]+$/.test(name)
    );
}


function validateEmail(email) {
    email = email.trim();

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function validatePhone(phone) {
    phone = phone.trim();

    return /^[0-9]{10}$/.test(phone);
}


function validateDob(dob) {
    return dob !== "";
}


function validateSelection(value) {
    return value.trim() !== "";
}


function validateAddress(address) {
    address = address.trim();

    return address.length >= 10;
}


function validateCity(city) {
    city = city.trim();

    return (
        city.length >= 2 &&
        /^[A-Za-z ]+$/.test(city)
    );
}


function validateState(state) {
    state = state.trim();

    return (
        state.length >= 2 &&
        /^[A-Za-z ]+$/.test(state)
    );
}


function validatePincode(pincode) {
    pincode = pincode.trim();

    return /^[0-9]{6}$/.test(pincode);
}


/*
    Complete Registration Validation
*/

function validateRegistration(data) {

    return (
        validateName(data.name) &&
        validateEmail(data.email) &&
        validatePhone(data.phone) &&
        validateDob(data.dob) &&
        validateSelection(data.gender) &&
        validateSelection(data.course) &&
        validateSelection(data.branch) &&
        validateSelection(data.year) &&
        validateAddress(data.address) &&
        validateCity(data.city) &&
        validateState(data.state) &&
        validatePincode(data.pincode)
    );
}


/*
    Form Handling
*/

const form = document.getElementById("registrationForm");

const registrationResult =
    document.getElementById("registrationResult");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    /*
        Get form values
    */

    const data = {

        name:
            document.getElementById("name").value.trim(),

        email:
            document.getElementById("email").value.trim(),

        phone:
            document.getElementById("phone").value.trim(),

        dob:
            document.getElementById("dob").value,

        gender:
            document.getElementById("gender").value,

        course:
            document.getElementById("course").value,

        branch:
            document.getElementById("branch").value,

        year:
            document.getElementById("year").value,

        address:
            document.getElementById("address").value.trim(),

        city:
            document.getElementById("city").value.trim(),

        state:
            document.getElementById("state").value.trim(),

        pincode:
            document.getElementById("pincode").value.trim()
    };


    /*
        Clear previous errors
    */

    document.querySelectorAll("small").forEach(function (element) {
        element.textContent = "";
    });

    registrationResult.hidden = true;


    let isValid = true;


    /*
        Name
    */

    if (!validateName(data.name)) {

        document.getElementById("nameError").textContent =
            "Name must contain at least 2 letters.";

        isValid = false;
    }


    /*
        Email
    */

    if (!validateEmail(data.email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    /*
        Phone
    */

    if (!validatePhone(data.phone)) {

        document.getElementById("phoneError").textContent =
            "Phone number must contain exactly 10 digits.";

        isValid = false;
    }


    /*
        Date of Birth
    */

    if (!validateDob(data.dob)) {

        document.getElementById("dobError").textContent =
            "Please select your date of birth.";

        isValid = false;
    }


    /*
        Gender
    */

    if (!validateSelection(data.gender)) {

        document.getElementById("genderError").textContent =
            "Please select your gender.";

        isValid = false;
    }


    /*
        Course
    */

    if (!validateSelection(data.course)) {

        document.getElementById("courseError").textContent =
            "Please select your course.";

        isValid = false;
    }


    /*
        Branch
    */

    if (!validateSelection(data.branch)) {

        document.getElementById("branchError").textContent =
            "Please select your branch.";

        isValid = false;
    }


    /*
        Academic Year
    */

    if (!validateSelection(data.year)) {

        document.getElementById("yearError").textContent =
            "Please select your academic year.";

        isValid = false;
    }


    /*
        Address
    */

    if (!validateAddress(data.address)) {

        document.getElementById("addressError").textContent =
            "Address must contain at least 10 characters.";

        isValid = false;
    }


    /*
        City
    */

    if (!validateCity(data.city)) {

        document.getElementById("cityError").textContent =
            "Please enter a valid city.";

        isValid = false;
    }


    /*
        State
    */

    if (!validateState(data.state)) {

        document.getElementById("stateError").textContent =
            "Please enter a valid state.";

        isValid = false;
    }


    /*
        Pincode
    */

    if (!validatePincode(data.pincode)) {

        document.getElementById("pincodeError").textContent =
            "Pincode must contain exactly 6 digits.";

        isValid = false;
    }


    /*
        If validation fails
    */

    if (!isValid) {
        return;
    }


    /*
        Registration successful
        Display submitted details
    */

    document.getElementById("resultName").textContent =
        data.name;

    document.getElementById("resultEmail").textContent =
        data.email;

    document.getElementById("resultPhone").textContent =
        data.phone;

    document.getElementById("resultDob").textContent =
        data.dob;

    document.getElementById("resultGender").textContent =
        data.gender;

    document.getElementById("resultCourse").textContent =
        data.course;

    document.getElementById("resultBranch").textContent =
        data.branch;

    document.getElementById("resultYear").textContent =
        data.year;

    document.getElementById("resultAddress").textContent =
        data.address;

    document.getElementById("resultCity").textContent =
        data.city;

    document.getElementById("resultState").textContent =
        data.state;

    document.getElementById("resultPincode").textContent =
        data.pincode;


    /*
        Show registration result
    */

    registrationResult.hidden = false;


    /*
        Scroll to result
    */

    registrationResult.scrollIntoView({
        behavior: "smooth"
    });


    /*
        Clear form
    */

    form.reset();

});


/*
    Export functions for Jest
*/

if (typeof module !== "undefined" && module.exports) {

    module.exports = {
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
    };
}