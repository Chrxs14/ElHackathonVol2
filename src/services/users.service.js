class UsersService {
    constructor() {
      this.users = [];
      this.addUser();
    }
  
    addUser() {
      const limit = 100;
      for (let i = 0; i < limit; i++) {
        this.users.push({
        });
      }
    }
  
    async createUser(data) {
      const newUser = {
        ...data,
      };
      this.users.push(newUser);
      return newUser;
    }
  
    async getUser() {
      return new Promise((resolve) => {
        resolve(this.users);
      });
    }
  
    async getUserById(id) {
      const user = this.users.find((user) => user.id === id);
      if (!user) {
        console.log('error')
      }
      if (user.isBlock) {
        console.log('error')
      }
      return user;
    }
  
    async updateUserById(id, changes) {
      const index = this.users.findIndex((user) => user.id === id);
  
      if (index === -1) {
        console.log('error')
      } else {
        const user = this.users[index];
        if (user.isBlock) {
          console.log('error')
        }
        this.user[index] = {
          ...user,
          ...changes,
        };
        return this.users[index];
      }
    }
  
    async deleteUserById(id) {
      const index = this.users.findIndex((user) => user.id === id);
      if (index === -1) {
        console.log('error')
      }
      this.users.splice(index, 1);
      return { id };
    }
  }
  
  module.exports = UsersService;