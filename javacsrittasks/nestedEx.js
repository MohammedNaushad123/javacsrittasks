// 1
let hospital = {
    name: "Sunrise Hospital",

    branches: {
        branch1: {
            location: "Hyderabad",
            phone: 9876543210,
        },

        branch2: {
            location: "Nizamabad",
            phone: 9876543211,
        },

        branch3: {
            location: "Warangal",
            phone: 9876543212,
        },
    },

    departments: {
        department1: {
            name: "Cardiology",
            doctor: "Dr. Ravi",
            fee: 1500,
        },

        department2: {
            name: "Neurology",
            doctor: "Dr. Kumar",
            fee: 2000,
        },

        department3: {
            name: "General Medicine",
            doctor: "Dr. Priya",
            fee: 800,
        },

        patients: {
            patient1: {
                name: "Rahul",
                age: 25,
                details: {
                    village: "Miryalaguda",
                    district: "Nalgonda",
                },
            },

            patient2: {
                name: "Gopika",
                age: 23,
                details: {
                    village: "Bhimavaram",
                    district: "West Godavari",
                },
            },

            patient3: {
                name: "Devi",
                age: 24,
                details: {
                    village: "Tadepalligudem",
                    district: "Eluru",
                },
            }
        }
    }
}


// Accessing data

console.log(hospital);

console.log(hospital.name);

console.log(hospital["branches"]);

console.log(hospital.branches.branch1.location);

console.log(hospital["departments"]);

console.log(hospital.departments.department2.doctor);

console.log(hospital.departments.patients.patient1.name);

console.log(
    hospital.departments.patients.patient2.details.district
);


// Updating data

hospital.departments.department1.fee = 1800;

console.log(
    "After updation =",
    hospital.departments.department1.fee
);


// Adding data

hospital.departments.patients.patient1.details.pincode = 508207;

console.log(
    "After adding =",
    hospital.departments.patients.patient1.details
);


// Deleting data

delete hospital.departments.department3.doctor;

console.log(
    "After deletion =",
    hospital.departments.department3
);

console.log(hospital);

// 2
let college = {

    name: "Narsimha Reddy Engineering College",

    branches: {

        branch1: {
            location: "Hyderabad",
            phone: 9000011111,
        },

        branch2: {
            location: "Secunderabad",
            phone: 9000022222,
        },

        branch3: {
            location: "Kukatpally",
            phone: 9000033333,
        },
    },

    courses: {

        course1: {
            name: "Computer Science Engineering",
            duration: "4 years",
            fee: 90000,
        },

        course2: {
            name: "Information Technology",
            duration: "4 years",
            fee: 85000,
        },

        course3: {
            name: "Electronics Engineering",
            duration: "4 years",
            fee: 75000,
        },

        students: {

            student1: {
                name: "Baby",
                year: 2026,

                address: {
                    village: "Bhimavaram",
                    district: "West Godavari",
                },
            },

            student2: {
                name: "Gopika",
                year: 2026,

                address: {
                    village: "NSP",
                    district: "East Godavari",
                },
            },

            student3: {
                name: "Devi",
                year: 2025,

                address: {
                    village: "Tadepalligudem",
                    district: "Eluru",
                },
            }
        }
    }
}


// Accessing

console.log(college);

console.log(college.name);

console.log(college.branches.branch1);

console.log(college.courses.course1.name);

console.log(college["courses"].course2.fee);

console.log(
    college.courses.students.student1.name
);

console.log(
    college.courses.students.student2.address.village
);


// Updating

college.courses.course2.fee = 95000;

console.log(
    "After updation =",
    college.courses.course2.fee
);


// Adding

college.courses.students.student3.address.pincode = 534101;

console.log(
    "After adding =",
    college.courses.students.student3.address
);


// Deleting

delete college.courses.course3.duration;

console.log(
    "After deletion =",
    college.courses.course3
);

console.log(college);

// 3
let bank = {

    name: "State Bank",

    branches: {

        branch1: {
            location: "Hyderabad",
            manager: "Ravi",
        },

        branch2: {
            location: "Nalgonda",
            manager: "Kiran",
        },

        branch3: {
            location: "Vijayawada",
            manager: "Suresh",
        },
    },

    accounts: {

        account1: {
            name: "Rahul",
            accountType: "Savings",
            balance: 50000,

            address: {
                village: "Miryalaguda",
                district: "Nalgonda",
            },
        },

        account2: {
            name: "Gopika",
            accountType: "Current",
            balance: 80000,

            address: {
                village: "Bhimavaram",
                district: "West Godavari",
            },
        },

        account3: {
            name: "Devi",
            accountType: "Savings",
            balance: 65000,

            address: {
                village: "Eluru",
                district: "Eluru",
            },
        }
    }
}


// Accessing

console.log(bank);

console.log(bank.name);

console.log(bank.branches.branch1.location);

console.log(bank["accounts"]);

console.log(bank.accounts.account1.name);

console.log(bank.accounts.account2.balance);

console.log(
    bank.accounts.account3.address.district
);


// Updating

bank.accounts.account1.balance = 75000;

console.log(
    "After updation =",
    bank.accounts.account1.balance
);


// Adding

bank.accounts.account2.address.pincode = 534201;

console.log(
    "After adding =",
    bank.accounts.account2.address
);


// Deleting

delete bank.accounts.account3.accountType;

console.log(
    "After deletion =",
    bank.accounts.account3
);

console.log(bank);