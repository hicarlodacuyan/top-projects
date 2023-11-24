function greetings() {
    const birthYear = Number(prompt('What is your birth year?'));
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');
    const thisYear = 2022;

    return `Hello! My name is ${firstName} ${lastName} and I am ${thisYear - birthYear} years old.`
}