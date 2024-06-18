let userRole = "admin";
let accessLevel;

// verifies the user's role using if, else if and else conditions
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

// 
let isLoggedIn = true;
let userMessage;
// nested loop, verifies two conditions
// if the user is logged in, and if his role is an admin or not
if (isLoggedIn) {
    if (userRole == "admin") {
        userMessage = "Welcome, admin!";
    } else {
        userMessage = "Welcome, user!"
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("user Messsage:", userMessage);

// defining variables and switch statement for userTpe and 
// userCategory

let userType = "Subscriber";
let userCategory;

// implement and execute the switch statement to evaluate te value
// of userType by providing different case values

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory)

// using ternary operator for isAuthenticated
// and authenticationStatus

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
// if isAuthenticated is true, the condition before (Authenticated)
// is assigned to authenticationStatus
// if not, the condition after is assigned to authenticationStatus

console.log("Authentication Status:", authenticationStatus)


/// ------------ PRACTICE TASK ----------

// Suppose an organization arranges a "Dietary Services" program to
//provide diets to its employees and customers, based on a person's
//weight and day-to-day routine. You need to create an
//authorization-based code to provide access to people based on their
//roles in organization, such as employees, enrolled members for
//"Dietary Services," and subscribers.

// If the person is an Employee, they are authorized to have access to "Dietary Services".
// If the person is an Enrolled Member, they are authorized to have access to "Dietary Services"
//and one-on-one interaction with a dietician.
// If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.
// If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.

// You need to communicate with the user by printing a message indicating whether that person is eligible
//to avail which type of services

let dietaryServices = "This is a dietary service for employees of this company!";
console.log(dietaryServices);

let role = "Employee";

let accessDietaryServices;
let accessOneOnOne;

switch (role){
    case "Employee":
        accessDietaryServices = "yes";
        accessOneOnOne = false;
        break;
    
    case "Enrolled Member":
        accessDietaryServices = "yes";
        accessOneOnOne = true;
        break;
    
    case "Subscriber":
        accessDietaryServices = "other";
        accessOneOnOne = false;
        break;

    case "Non-Subscriber":
        accessDietaryServices = "no"
        accessOneOnOne = false;
        break;
    }

//verifies if person has access to dietary services
if (accessDietaryServices === "yes"){
    accessDietaryServices = "You have access for the 'Dietary Services'!";
} else if (accessDietaryServices === "no"){
    accessDietaryServices = "You need to enroll first to have access to the dietary services";
} else {
    accessDietaryServices = "You have partial access for the 'Dietary Services'";
}

//verifies if person is authorized for one-on-one
if (accessOneOnOne){    
    accessOneOnOne = "You are authorized for one-on-one interaction with a dietician"
} else {accessOneOnOne = "Unfortunately, you're not authorized for an one-on-one with an dietician"};

console.log("Role:", role)
console.log("Access for 'Dietary Services':", accessDietaryServices)
console.log("Authorization for one-on-one with a dietician:", accessOneOnOne, )