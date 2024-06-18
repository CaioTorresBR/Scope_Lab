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