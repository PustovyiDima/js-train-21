// // const User = {
// //    login: null,
// //    password: null,
// //    role: null,
// //    age: null,
// // };

// // class User {}
// // let Class = class {}
// class Person {
//    constructor(name) {
//       this.name = name;
//    }
//    test = () => {
//       return `Echo test`;
//    };
// }
// class User extends Person {
//    constructor(login, password) {
//       super(login);
//       this.login = login;
//       this.password = password;
//    }

//    login = null;
//    password = null;
//    age = null;
//    id = null;
//    #role = null;
//    #id = 1000; // технічне поле що сховане всередині класу і юзера і не доступне ззовні

//    isAdmin = () => {
//       return this.role === "Admin";
//    };

//    static createNewUser = (login) => {
//       const password = this.generateRandomPassword();
//       return new User();
//    };

//    static generateRandomPassword = () => {
//       //для можливості виклику ф-ї тільки через клас а в сам елемент він не попадає
//       return;
//    };

//    static userId = () => {
//       retutn.log(this.#id); // виведе значення тільки через цю ф-ю
//    };

//    get admin() {
//       return this.#role === "Admin";
//    }
//    set admin(value) {
//       this.#role = "Admin";
//    }
// }

// const user = new User();
// // console.log(user);

// function verifyAdmin(fn) {
//    const res = fn();

//    if (!res) {
//       throw new Error("Not Admin");
//    }

//    return true;
// }
// // verifyAdmin(user.isAdmin.bind(this));

// // console.log(user);
// // console.log(User); //для перегляду статичних методів або властивостей
// // console.log(user.userId());

// // console.log(user.admin);
// // user.admin = true;
// // console.log(user.admin);

// const user1 = new User("Ivan", "18eNSDuenf");
// console.log(user1);
// console.log(user1.test());

// console.log(user1 instanceof Person);
// console.log(user1 instanceof String);
