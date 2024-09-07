const companyTree = {
    name: "Alice",
    position: "CEO",
    yearsInCompany: 15,
    subordinates: [
        {
            name: "Bob",
            position: "CTO",
            yearsInCompany: 10,
            subordinates: [
                {
                    name: "Charlie",
                    position: "Lead Developer",
                    yearsInCompany: 6,
                    subordinates: [
                        {
                            name: "Diana",
                            position: "Frontend Developer",
                            yearsInCompany: 3,
                            subordinates: [],
                        },
                        {
                            name: "Eve",
                            position: "Backend Developer",
                            yearsInCompany: 16,
                            subordinates: [],
                        },
                    ],
                },
                {
                    name: "Frank",
                    position: "DevOps Engineer",
                    yearsInCompany: 8,
                    subordinates: [
                        {
                            name: "Grace",
                            position: "Cloud Specialist",
                            yearsInCompany: 2,
                            subordinates: [],
                        },
                    ],
                },
            ],
        },
        {
            name: "Hannah",
            position: "CFO",
            yearsInCompany: 12,
            subordinates: [
                {
                    name: "Ivy",
                    position: "Accountant",
                    yearsInCompany: 5,
                    subordinates: [
                        {
                            name: "Jack",
                            position: "Junior Accountant",
                            yearsInCompany: 1,
                            subordinates: [],
                        },
                    ],
                },
                {
                    name: "Kevin",
                    position: "Financial Analyst",
                    yearsInCompany: 4,
                    subordinates: [],
                },
            ],
        },
        {
            name: "Laura",
            position: "COO",
            yearsInCompany: 13,
            subordinates: [
                {
                    name: "Mark",
                    position: "Operations Manager",
                    yearsInCompany: 7,
                    subordinates: [],
                },
                {
                    name: "Nina",
                    position: "Logistics Coordinator",
                    yearsInCompany: 3,
                    subordinates: [],
                },
            ],
        },
        {
            name: "Oscar",
            position: "CMO",
            yearsInCompany: 11,
            subordinates: [
                {
                    name: "Paul",
                    position: "Marketing Manager",
                    yearsInCompany: 5,
                    subordinates: [
                        {
                            name: "Quinn",
                            position: "Digital Marketer",
                            yearsInCompany: 2,
                            subordinates: [],
                        },
                    ],
                },
                {
                    name: "Rita",
                    position: "Content Strategist",
                    yearsInCompany: 6,
                    subordinates: [],
                },
            ],
        },
        {
            name: "Steve",
            position: "HR Director",
            yearsInCompany: 14,
            subordinates: [
                {
                    name: "Tracy",
                    position: "Recruiter",
                    yearsInCompany: 3,
                    subordinates: [],
                },
                {
                    name: "Uma",
                    position: "Employee Relations",
                    yearsInCompany: 5,
                    subordinates: [],
                },
            ],
        },
    ],
};

// Initialize the variable to store the longest working employee's years in the company
let longestWorkingEmployee = 0;

// Function to compare the years in the company of the current employee with the longest working employee
function compareYearsInCompany(employee) {
    // If the current employee has worked longer than the recorded longest, update the record
    if (employee.yearsInCompany > longestWorkingEmployee) {
        longestWorkingEmployee = employee.yearsInCompany;
    }
}

// Recursive function to traverse the company tree and find the longest working employee
function getLongestWorkingEmployee(companyTree) {
    // Base case: if the current node has no subordinates, compare its years in the company
    if (companyTree.subordinates.length === 0) {
        // i call the function to compare the years in the company
        compareYearsInCompany(companyTree);
        return;
    }

    // Compare the current node's years in the company
    compareYearsInCompany(companyTree);

    // Recursively check each subordinate
    for (let i = 0; i < companyTree.subordinates.length; i++) {
        getLongestWorkingEmployee(companyTree.subordinates[i]);
    }
}

// Start the search from the root of the company tree
getLongestWorkingEmployee(companyTree);

// Output the longest working employee's years in the company
console.log(longestWorkingEmployee);

// time complexity is O(n) where n is the number of employees in the company tree.
