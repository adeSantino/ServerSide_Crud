// Example user model (you can adjust later)
const users = []; // temporary in-memory storage

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    users.push(this);
    return this;
  }

  static findAll() {
    return users;
  }
}

module.exports = User;
