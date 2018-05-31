/**
 * Test function to check hooks
 * @param person String name for a person
 */
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
