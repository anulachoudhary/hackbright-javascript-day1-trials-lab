// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');




// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo(accountHolder, accountNumber, businessName) {
    console.log(`Account Holder Name: ${accountHolder}`);
    console.log(`Account Holder Number: ${accountNumber}`);
    console.log(`Business Name: ${businessName}`);
}

printAccountInfo(accountHolder, accountNumber, businessName);
// Add function to print all addresses, including a header
function showAddresses(addresses) {
    console.log('Addresses:');

    for (let i=0; i<addresses.length; i+=1) {
        console.log(`${addresses[i]}` );
    }
}

showAddresses(addresses);

// Add function to print phone types and numbers
function showPhones(phoneNumbers) {
    console.log("Phone Numbers: ");

    for (let k of phoneNumbers) {
        console.log(k[0] + ": " + k[1]);
    }
}

showPhones(phoneNumbers);

// ///////////////////////////////////////////////////////
// Transactions:
const transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
    transactions.set(date, amount);
}

// Create a map of transactions
addTransaction("May-22", -500);
addTransaction("May-3", +1200);
addTransaction("May-5", -100);
addTransaction("May-26", -359);
addTransaction("May-23", +2,200);

for (let k of transactions) {
        console.log(k[0] + ": " + k[1]);
    }

// Add function to show balance status
function showBalanceStatus(balance) {
    if (balance < 0) {
        console.log("YOU ARE OVERDRAWN");
    }else if (balance < 20) {
        console.log("Warning: You are close to zero balance."); 

    } else {
        console.log("Thank you for your business.");
    }
    
}

showBalanceStatus(24)

// Add function to show transactions
function showTransactions(transactions, balance) {
    
    console.log(`Beginning balance: (${balance})`);

    for (let k of transactions) {
        balance += k[1];
        if (balance < 0)
            balance -= 25;

        console.log("Date: " + k[0]);

        if (k[1] < 0) {
            console.log("Transaction Type: Withdrawl");
        }
        else {
            console.log("Transaction Type: Deposit")
        }
        console.log("Amount Changed: " + k[1]);
        console.log("Balance: ", balance);
        showBalanceStatus(balance);
    }
}

showTransactions(transactions, 26000);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info


// Function to add customer attributes


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours






