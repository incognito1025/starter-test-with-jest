const { getFullName, getProductsPurchased } = require("../src/products");

describe("getFullName()", () => {
    it("should return the full name in 'First Last' format", () => {
        const input = { names: { first: "Chelsea", surname: "Hernandez" } };
        const actual = getFullName(input);
        const expected = "Chelsea Hernandez";
        expect(actual).toEqual(expected);
    });
});

describe("getProductsPurchased()", () => {
    it("should return an array of product names", () => {
        const input = { purchased: [{ name: "Product 1" }, { name: "Product 2" }] };
        const actual = getProductsPurchased(input);
        const expected = ["Product 1", "Product 2"];
        expect(actual).toEqual(expected);
    });

    it("returns 'No products purchased.' if the purchased array is empty", () => {
        const input = { purchased: [] };
        const expected = "No products purchased.";
        const actual = getProductsPurchased(input);
        expect(actual).toEqual(expected);
    });
});

// function getProductsPurchased(contact) {
//     const purchased = contact.purchased;
  
//     if (!purchased || !purchased.length) {
//       return "No products purchased.";
//     }
  
//     const result = [];
//     for (let product of purchased) {
//       result.push(product.name);
//     }
  
//     return result;
//   }


//   describe("getProductsPurchased()", () => {
//     it("should return a statement if no products have been purchased", () => {
//       const input = {};
//       const actual = getProductsPurchased(input);
//       const expected = "No products purchased.";
//       expect(actual).toEqual(expected);
//     });
//   });
