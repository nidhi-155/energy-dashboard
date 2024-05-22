
// Mock data for a user
//{userid: 1, name: "John Doe", email: "john.doe@abc.com", 
//   consumption: {min: 4.7, max: 4.9, week: [4.3, 4.5, 4.3, 4.54, 4.7, 4.5, 4.5], month: [4.3, 4.2, 4.3, 4.5], year: [4.1, 4.2, 4.3, 4.5, 4.7, 4.9, 4.3, 4.1, 4.5, 4.2, 4.0, 3.9]},
//   generation: {min: 2.7, max: 2.9, week: [2.3, 2.5, 2.3, 2.54, 2.7, 2.5, 2.5], month: [2.3, 2.2, 2.3, 2.5], year: [2.1, 2.2, 2.3, 2.5, 2.7, 2.9, 2.3, 2.1, 2.5, 2.2, 2.0, 3.1]},
//}


function generateUserData(userId, name, email) {
  function generateEnergyData() {
    const week = Array.from({ length: 7 }, () => (Math.random() * (4.9 - 4.3) + 4.3).toFixed(2));
    const month = Array.from({ length: 4 }, () => (Math.random() * (4.9 - 4.3) + 4.3).toFixed(2));
    const year = Array.from({ length: 12 }, () => (Math.random() * (4.9 - 4.3) + 4.3).toFixed(2));
    const min = (Math.random() * (1 - 6) + 2).toFixed(1); //Math.min(...week, ...month, ...year);
    const max = (Math.random() * (3 - 9) + 2).toFixed(1);//Math.max(...week, ...month, ...year);
    return { min, max, week, month, year };
  }

  return {
    userId,
    name,
    email,
    consumption: generateEnergyData(),
    generation: generateEnergyData(),
  };
}

// Use the function to generate new data
// generateUserData(1, "John Doe", ""),
// generateUserData(2, "Jane Doe", "jane.doe@abc.com"),
// console.log(userData);

//create data for 10 users

  const usersData = [
    generateUserData(1, "John Doe", "John.Doe@abc.com"),
    generateUserData(2, "Jane Doe", "Jane.Doe@abc.com"),
    generateUserData(3, "Alice Smith", "Alice.Smith@abc.com"),
    generateUserData(4, "Bob Brown", "Bob.Brown@abc.com"),
    generateUserData(5, "Charlie White", "Charlie.White@abc.com"),
    generateUserData(6, "David Green", "David.Green@abc.com"),
    generateUserData(7, "Eve Black", "Eve.Black@abc.com"),
    generateUserData(8, "Frank Grey", "Frank.Grey@abc.com"),
    generateUserData(9, "Grace Silver", "Grace.Silver@abc.com"),
    generateUserData(10, "Henry Gold", "Henry.Gold@abc.com"),
  ];



//create a method to return user data
function getUserData(userId) {
  return usersData.find(user => user.userId == userId);
}
module.exports = getUserData;