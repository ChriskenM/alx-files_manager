// utils/user.js
class UserUtils {
  static getUserDetails() {
    // Add logic to get user details
    return { id: 1, name: 'John Doe' };
  }

  static createUser(data) {
    // Add logic to create a new user
    return { id: 2, name: data.name };
  }

  // Add more user related utilities here
}

module.exports = UserUtils;

