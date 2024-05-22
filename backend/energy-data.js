//generate sample data for energy dashboard which stores the energy consumption and generation of users
// the user data stored is a unique user-id, name and email id
// and the energy data is for consumption and generation recorded for each user in kwh for current week, month and year
// example of a users data: {userid: 1, name: "John Doe", email: "john.doe@abc.com", 
//   consumption: {min: 4.7, max: 4.9, week: [4.3, 4.5, 4.3, 4.54, 4.7, 4.5, 4.5], month: [4.3, 4.2, 4.3, 4.5], year: [4.1, 4.2, 4.3, 4.5, 4.7, 4.9, 4.3, 4.1, 4.5, 4.2, 4.0, 3.9]},
//   generation: {min: 2.7, max: 2.9, week: [2.3, 2.5, 2.3, 2.54, 2.7, 2.5, 2.5], month: [2.3, 2.2, 2.3, 2.5], year: [2.1, 2.2, 2.3, 2.5, 2.7, 2.9, 2.3, 2.1, 2.5, 2.2, 2.0, 3.1]},
//}
// generate values for energy consumption & generation data for 4 users using format from example above

// sample data for energy consumption and generation for users
const sampleData = [
    {userid: 1, name: "John Doe", email: "",
    consumption: {min: 4.7, max: 4.9, week: [4.3, 4.5, 4.3, 4.54, 4.7, 4.5, 4.5], month: [4.3, 4.2, 4.3, 4.5], year: [4.1, 4.2, 4.3, 4.5, 4.7, 4.9, 4.3, 4.1, 4.5, 4.2, 4.0, 3.9]},
    generation: {min: 2.7, max: 2.9, week: [2.3, 2.5, 2.3, 2.54, 2.7, 2.5, 2.5], month: [2.3, 2.2, 2.3, 2.5], year: [2.1, 2.2, 2.3, 2.5, 2.7, 2.9, 2.3, 2.1, 2.5, 2.2, 2.0, 3.1]}},
    {userid: 2, name: "Jane Doe", email: "",
    consumption: {min: 3.7, max: 3.9, week: [3.3, 3.5, 3.3, 3.54, 3.7, 3.5, 3.5], month: [3.3, 3.2, 3.3, 3.5], year: [3.1, 3.2, 3.3, 3.5, 3.7, 3.9, 3.3, 3.1, 3.5, 3.2, 3.0, 2.9]},
    generation: {min: 1.7, max: 1.9, week: [1.3, 1.5, 1.3, 1.54, 1.7, 1.5, 1.5], month: [1.3, 1.2, 1.3, 1.5], year: [1.1, 1.2, 1.3, 1.5, 1.7, 1.9, 1.3, 1.1, 1.5, 1.2, 1.0, 1.9]}},
    {userid: 3, name: "John Smith", email: "",
    consumption: {min: 5.7, max: 5.9, week: [5.3, 5.5, 5.3, 5.54, 5.7, 5.5, 5.5], month: [5.3, 5.2, 5.3, 5.5], year: [5.1, 5.2, 5.3, 5.5, 5.7, 5.9, 5.3, 5.1, 5.5, 5.2, 5.0, 4.9]},
    generation: {min: 3.7, max: 3.9, week: [3.3, 3.5, 3.3, 3.54, 3.7, 3.5, 3.5], month: [3.3, 3.2, 3.3, 3.5], year: [3.1, 3.2, 3.3, 3.5, 3.7, 3.9, 3.3, 3.1, 3.5, 3.2, 3.0, 2.9]}},
    {userid: 4, name: "Jane Smith", email: "",
    consumption: {min: 6.7, max: 6.9, week: [6.3, 6.5, 6.3, 6.54, 6.7, 6.5, 6.5], month: [6.3, 6.2, 6.3, 6.5], year: [6.1, 6.2, 6.3, 6.5, 6.7, 6.9, 6.3, 6.1, 6.5, 6.2, 6.0, 5.9]},
    generation: {min: 4.7, max: 4.9, week: [4.3, 4.5, 4.3, 4.54, 4.7, 4.5, 4.5], month: [4.3, 4.2, 4.3, 4.5], year: [4.1, 4.2, 4.3, 4.5, 4.7, 4.9, 4.3, 4.1, 4.5, 4.2, 4.0, 3.9]}},
  ];