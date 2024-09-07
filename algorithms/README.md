# 💼 Interview Task: Longest Tenured Employee Finder

## 📄 Description

This task is designed to evaluate the applicant's problem-solving skills, understanding of recursion, and ability to implement a depth-first search (DFS) algorithm. The goal is to traverse a company's hierarchical structure represented as a tree-like data structure in JavaScript and identify the longest tenured employee.

We will assess the applicant's:

-   🌀 Knowledge of **recursion** and how to apply it.
-   🔍 Understanding of **depth-first search** (DFS) algorithms.
-   ⏳ Awareness of the **time complexity** of the solution.
-   🧹 Attention to **code quality**, including readability and efficiency.

## Example Company Tree

```javascript
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
```

## Example Output

The script will output the following based on the example company tree using the console.table() method:

```bash
┌──────────────┬───────────────────────┐
│   (index)    │       Values           │
├──────────────┼───────────────────────┤
│    name      │         'Eve'          │
│   position   │    'Backend Developer' │
│ yearsInCompany │          16          │
└──────────────┴───────────────────────┘
```
