/*

Test with Jest
Learning objectives
By the end of this lesson, you should be able to:

Distinguish between developer dependencies and production dependencies.

Write unit tests using the jest framework.

Identify best practices for writing unit tests.

Use the coverage tool to help identify how your tests can be improved.

Guiding Questions
1. Take a look at the starter code. What is the purpose of each function?

Write a comment above each function describing what you believe the purpose of the function is.


2. Run the following command on your command line. What does this command do?

npm install jest --save-dev

installs jest.

adds Jest as a development dependency - (packages that are needed for development and testing but are not required for the production version of teh application). This means that Jest will be added to the `devDependencies` section of `package.json` file, rather than the `dependencies` section.

before
{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    // other dependencies
  }
}

after running the commant
}
{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    // other dependencies
  },
  "devDependencies": {
    "jest": "^27.0.0"
  }
}
In summary, this command installs Jest for your project and ensures it is listed under devDependencies in your package.json file, indicating that it is used for development purposes such as testing.


3. What file or files did the above command change?
package.json - it adds Jest to the devDependies section
package-lock.json - file is iupdated to reflect the exact version of Jest and its dependencies that were installed

4. What is a developer dependency? Why should you install Jest as a developer dependency?
A developer dependency is a package that is required only during the development and testing phases of the project. These dependencies are not needed when the applicaiton is running in production.
Jest is a testing framework, so it is only needed when developing and testing the application. By installing it as a developer dependency, you keep your production environment clean and lightweight, including only the packagres necessary to run the application in production.

5. Update the "scripts" key in your package.json file so that npm test runs the jest command.
{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    // other dependencies
  },
  "devDependencies": {
    "jest": "^27.0.0"
  },
  "scripts": {
    "test": "jest"
  }
}


6. What happens when you run npm test now? Why?
when you run the npm test, npm will execute the command defined under the "test" script in packsge.json file, which is jest in this case.
NPM uses the scriped defined in the package.json file to automate tasks. By setting "test": "jest", you tell npm to use jest as the test runner. running npm test will now initiate Jest, which will look for test files in your project. (typically files endign in .test.js or .spec.js) and execute them, providing feedback on which tests passed or failed. 

e.g.

> starter-jest-with-tests@1.0.0 test /path/to/your/project
> jest

 PASS  ./sum.test.js
  ✓ adds 1 + 2 to equal 3 (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.568s
Ran all test suites.

The output indicates that jest has successfully found and executed your tests, providing a summary of the test results. if there are no test files set up, jest will report that no tests were found.

7. Create a __tests__/ directory in the root of your starter code repository. Do you think this will change the output of the npm test command? Why or why not?

creating a _tests_/ directory should not change the output of the `npm test` command unless there are test files inside the directory. Jest by default looks for files with names that match the patter 

After you've made your guess, run the command and verify your guess.

since the directory is empty, jest will not find any test files, and the output should indicate that no tests were found.

8. Create a new test file in the __tests__/ directory. This file will test the src/products.js file. What should you name your file and why?
The test file should be named to reflect the file it is testing. naming convention helpws in easily identifying which files are being tested. using .test.js is a common practice.

9. Run npm test again. Has the output in your command line changed? Why or why not?
Output:

The output should still indicate that no tests were found because the new test file is empty.

10. Export both functions from src/products.js and require them into your test file. Why is this step necessary?

// __tests__/products.test.js

const { getFullName, getProductsPurchased } = require('../src/products');

// Tests will be added here

It's necessary because exporting and importing the functions is necessary to test them. Thsi allows the test file to call the functiosn and verify their behavior. 

11. You do not need to import the jest package into your test file. Why not?
No. because jest is a test running that automatically provides functiosn like `test`, `expect`, `describe` and more so there is no need to explicitly imprint it in your test files. 

12. You are now ready to write your first test. You'll be writing unit tests for each of the functions in src/products.js. What is the purpose of unit tests?
Unit tests are used to test individual units of code (usuallyt functions) isolation. The purpose is to ensure that each unit performs as expecterd under various conditions. 

13. First, you'll test the getFullName() function. Copy the code below into your test file. What is the purpose of this code?

describe("getFullName()", () => {
  // ...
});

//the `describe` block groups related test together, making it easier to read and understand the test output. It also helps organize tests logically.



// __tests__/products.test.js

const { getFullName, getProductsPurchased } = require('../src/products');

describe('getFullName', () => {
  test('should return full name', () => {
    const contact = { names: { first: 'John', surname: 'Doe' } };
    expect(getFullName(contact)).toBe('John Doe');
  });
});

describe('getProductsPurchased', () => {
  test('should return "No products purchased." when purchased array is empty', () => {
    const contact = { purchased: [] };
    expect(getProductsPurchased(contact)).toBe('No products purchased.');
  });

  test('should return the name of a single purchased product', () => {
    const contact = { purchased: [{ name: 'Product 1' }] };
    expect(getProductsPurchased(contact)).toBe('Product 1');
  });

  test('should return an array of product names when multiple products are purchased', () => {
    const contact = { purchased: [{ name: 'Product 1' }, { name: 'Product 2' }] };
    expect(getProductsPurchased(contact)).toEqual(['Product 1', 'Product 2']);
  });
});

13. First, you'll test the getFullName() function. Copy the code below into your test file. What is the purpose of this code?

describe("getFullName()", () => {
  // ...
});

//The describe block groups related tests together, making it easier to read and understand the test output. It also helps organize tests logically.


14. Replace the comment in the above describe() block with the code below. What is the purpose of this code?

test("", () => {
  // ...
});

//The `test` function defines an individaul test. It should contain a description and a function with test logic. 
Running npm test
Expectation:
Running npm test with the above code will indicate no tests found because the test does not contain any logic or description.

15. Try running npm test again. What happens? Why?


> starter-jest-with-tests@1.0.0 test
> jest

 PASS  _tests_/products.test.js
  getFullName()
    ✓  (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.197 s
Ran all test suites.

16. The getFullName() function expects a single argument that's an object. What is the required structure of this object for the function to work as intended?

{
  names: {
    first: "FirstName",
    surname: "LastName"
  }
}




17. Replace the comment in your existing test with the following code. What's the purpose of this code?

const input = { names: { first: "Chelsea", surname: "Hernandez" } };

The code within the `test` block will define the actual test. 

input definition:
const input = { names: { first: "Chelsea", surname: "Hernandez" } };
//Defines the input object that matches the required structure.


actual output:
const actual = getFullName(input);
//Calls the function with the input and stores the result in actual.

expected output:
const expected = "Chelsea Hernandez";
//Defines the expected result of the function call.

comparison:
expect(actual).toEqual(expected);
//Uses Jest's matcher to compate `actual` and expecterd` values.



18. Underneath that code, include the following code. What's the purpose of this code? Why is actual the name of the variable?

const actual = getFullName(input);

Calls the function with the input and stores the result in actual.

19. Underneath that code, define a new variable called expected. Set it equal to the value you expect to be returned from the function invocation. What value do you expect and why?

const expected = "Chelsea Hernandez";


Defines the expected result of the function call.

20. Finally, you'll need to use Jest's test matchers to compare the two values. Include the following code at the end of your test and then run your tests with npm test. Do your tests pass? Why or why not?

expect(actual).toEqual(expected);
Uses Jest's matcher to compare actual and expected values.

//The test should pass if the function works correctly. If there are no issues, npm test will output that 1 test passed.

21. Change the test() function to the it() function and then run your tests once again. Is anything different?

22. The it() alias function can be used to make it easier to read tests. Right now, your test does not have an accompanying descriptive string. Update the string with a test description. If you read the entire line from left to right, it should read something like, "It should..."

describe("getFullName()", () => {
  it("", () => {
    const input = { names: { first: "Chelsea", surname: "Hernandez" } };
    const actual = getFullName(input);
    const expected = "Chelsea Hernandez";
    expect(actual).toEqual(expected);
  });
});

The `it` function is an alias for `test`, making test descriptions more readable.


How did you choose to describe your test?

Descriptive Test String
Purpose:
Update the string in it to describe the test:
describe("getFullName()", () => {
  it("should return the full name in 'First Last' format", () => {
    const input = { names: { first: "Chelsea", surname: "Hernandez" } };
    const actual = getFullName(input);
    const expected = "Chelsea Hernandez";
    expect(actual).toEqual(expected);
  });
});

Expectation:
The test output will now be more descriptive, indicating what the test is checking.

23. Run npm test once more. How did your test output change?

describe("getFullName()", () => {
  it("should return the full name in 'First Last' format", () => {
    const input = { names: { first: "Chelsea", surname: "Hernandez" } };
    const actual = getFullName(input);
    const expected = "Chelsea Hernandez";
    expect(actual).toEqual(expected);
  });
});



24. Before moving on to test the next function, run Jest's coverage tool. To do so, run the following command. What does the output of this command tell you about the src/products.js file?
*The output will show coverage metrics for `src/products.js`*

Coverage Directory is created - it contains coverage reports, incluidng an `index.html` file with detailed overate info.

npm test -- --coverage


output//

> starter-jest-with-tests@1.0.0 test
> jest --coverage

 PASS  _tests_/products.test.js
  getFullName()
    ✓ should return the full name in 'First Last' format (1 ms)

-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------|---------|----------|---------|---------|-------------------
All files    |      25 |        0 |      50 |      25 |                   
 products.js |      25 |        0 |      50 |      25 | 10-25             
-------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.217 s, estimated 1 s
Ran all test suites.
➜  starter-test-with-jest git:(main) ✗ 

25. After running Jest's coverage tool, a new folder was added to your repository. What is contained inside this folder?
Coverage Directory
Contents:

Contains coverage reports, including an index.html file with detailed coverage information.


26. This folder should not be committed to GitHub as it will change every time the coverage tool is run. How do you force Git to ignore this folder? Make that change now.
echo "coverage/" >> .gitignore


27. The coverage/ directory includes an index.html file which will show you more detailed information about the coverage report. Open up that file. What part of src/products.js is untested?

Opening Coverage Report
Open coverage/index.html in a browser to see detailed coverage information. It will show which parts of the code are tested and which are not.

75% of src/products.js is untested

28. To complete coverage of this file, you'll need to write tests for the getProductsPurchased() function. The function expects a single argument, contact, to be passed into the function. What type of object does the function expect?

the `contact` oject with a `purchased` key.

Testing getProductsPurchased
Expected Object Structure:

contact object with a purchased key, which is an array of product objects.
javascript
Copy code
{
  purchased: [
    { name: "Product 1" },
    { name: "Product 2" }
  ]
}

29. It is often good practice to first begin to test the "happy path." This refers to the main use case of the function. Begin by writing a describe() and it() block in your test file.

Happy Path Test:

javascript
Copy code
describe("getProductsPurchased()", () => {
  it("should return an array of product names", () => {
    const input = { purchased: [{ name: "Product 1" }, { name: "Product 2" }] };
    const actual = getProductsPurchased(input);
    const expected = ["Product 1", "Product 2"];
    expect(actual).toEqual(expected);
  });
});

What did you choose to put into the string of the describe() block and why? What did you choose to put into the string of the it() block and why?

The "should return an array of product names"
it block: The string "should return an array of product names" succinctly describes the expected result of the function, making it clear what the test is verifying. This helps in understanding the purpose of the test at a glance.
Explanation
describe("getProductsPurchased()"): This groups all tests related to the getProductsPurchased function.
it("should return an array of product names"): This specific test checks if the function returns an array of product names when given a purchased array with product objects.
Purpose of Testing the Happy Path
Testing the "happy path" ensures that the function works as expected under normal conditions. It verifies that the function correctly handles typical inputs and produces the expected output, which is a critical aspect of validating the functionality. Once the happy path is tested and confirmed, additional tests can be written to cover edge cases and potential error conditions.

30. What input would allow the test to pass as expected? Create that input and assign it to the variable input now.

To create an input that would allow the test to pass as expected for the getProductsPurchased() function, we need an object with a purchased key, which contains an array of product objects. 

const input = {
  purchased: [
    { name: "Product 1" },
    { name: "Product 2" },
    // Additional products can be added if needed
  ]
};


31. What do you expect the end value to be after the function is called? Create that expected value and assign it to the variable expected now.

for getProductsPurchased() function, if the input object has a non-empty `purchased` array, the expected output should be an array containing the names of the purchased products. In this case, since we are creating an input where products have been purchased, we expect the end value to be an array of product names. 

const expected = ["Product 1", "Product 2"];



32. Complete the test by creating a variable named actual and assigning the invocation of the function to it. Then, use Jest's expect() function to compare values. After running npm test, did the test work as expected? Why or why not?

To complete the test, we'll invoke the getProductsPurchased() function with the input object and assign the result to a variable named actual. Then, we'll use Jest's expect() function to compare the actual value with the expected value.

const actual = getProductsPurchased(input);
expect(actual).toEqual(expected);

After running npm test, the test should work as expected because we have provided an input object with purchased products, and the function is expected to return an array containing the names of these products.


33. Run the coverage tool again and then return to the HTML version of the report. What code is still left untested?

After running the coverage tool and returning to the HTML version of the report, the code that is still left untested is likely related to branches or conditions within the getProductsPurchased() function. Specifically, it could be the conditional branches for handling empty or non-empty purchased arrays.


34. Write a new it() block to test whether or not the purchased key contains an empty array. Follow the same steps as before to write your test. Then, run npm test and the coverage tool. Were the results as you expected? Why or why not?

We can write a new it() block to test whether the purchased key contains an empty array. This test ensures that the function behaves correctly when there are no purchased products.

it("returns 'No products purchased.' if the purchased array is empty", () => {
  const input = { purchased: [] };
  const expected = "No products purchased.";
  const actual = getProductsPurchased(input);
  expect(actual).toEqual(expected);
});

After running npm test and the coverage tool, the results should align with expectations. The test ensures that the function correctly handles the scenario of an empty purchased array.

35. Create and complete all remaining tests so that the coverage tool passes with 100% across all metrics. How did the coverage tool help you decide what tests to write?

To achieve 100% coverage across all metrics, we need to write tests that cover all possible code paths within the getProductsPurchased() function. This includes tests for different scenarios such as empty and non-empty purchased arrays, as well as edge cases like invalid input.

36. Take a look at the functions and the tests you've written. Do these tests capture every possible situation for how the function could be used? Is it important to test every single scenario?

While the tests written so far cover various scenarios, it's essential to consider edge cases and potential errors that the function might encounter. It's not always necessary to test every single scenario exhaustively, but it's crucial to test critical paths and potential failure points to ensure the reliability and correctness of the function.

To find out which parts of `src/products.js` are untested, you need to open the detailed report for `products.js` provided by the coverage tool. From the summary in your `index.html` file, you can see the overall coverage statistics:

- **Statements:** 25% (3/12)
- **Branches:** 0% (0/4)
- **Functions:** 50% (1/2)
- **Lines:** 25% (3/12)

Here's what you should do:

1. **Open the Detailed Report:**
   - Open the `index.html` file in a web browser.
   - Click on the `products.js` link to view the detailed coverage report for that file.

2. **Analyze the Detailed Report:**
   - The detailed report will show you exactly which lines and branches of the code are covered by tests and which are not.
   - Look for lines and branches highlighted in red or yellow; these indicate code that is not covered by your tests.

Based on the summary, here are some possible insights:

- **Statements:** Only 25% of the statements are covered. This means 75% of the statements in `products.js` are not executed by any tests.
- **Branches:** None of the branches are covered, indicating that conditional logic (e.g., `if`, `else`, `switch` statements) is not being tested.
- **Functions:** 50% of the functions are covered. This means one function is tested, and the other is not.

### Steps to Improve Coverage

1. **Identify Untested Functions and Statements:**
   - Check which function has not been tested. If `getFullName` is tested, then `getProductsPurchased` likely needs tests.
   - Identify specific lines of code (statements) that are not executed by your tests.

2. **Write Tests for Untested Code:**
   - Write unit tests for the untested function(s).
   - Create tests that cover different branches and edge cases.

### Example of Detailed Steps for `getProductsPurchased`

1. **Describe Block for `getProductsPurchased`:**
   ```javascript
   describe("getProductsPurchased()", () => {
     //...
   });
   ```

2. **Happy Path Test:**
   ```javascript
   it("should return the correct products purchased by the contact", () => {
     const input = {
       purchases: [
         { name: "Product 1" },
         { name: "Product 2" }
       ]
     };
     const expected = ["Product 1", "Product 2"];
     const actual = getProductsPurchased(input);
     expect(actual).toEqual(expected);
   });
   ```

3. **Edge Case Test:**
   ```javascript
   it("should return an empty array if there are no purchases", () => {
     const input = { purchases: [] };
     const expected = [];
     const actual = getProductsPurchased(input);
     expect(actual).toEqual(expected);
   });
   ```

4. **Run Tests and Check Coverage:**
   - Run `npm test` to see if your tests pass.
   - Run `npm test -- --coverage` to generate the coverage report again.
   - Open the `index.html` file and verify if the coverage has improved.

### Ignoring Coverage Directory

Ensure your `.gitignore` file properly ignores the `coverage/` directory:

```plaintext
node_modules/
.DS_Store
coverage/
```

This ensures that the coverage reports are not committed to your Git repository.

By following these steps, you can systematically identify untested parts of your code and write appropriate tests to achieve better coverage.

*/