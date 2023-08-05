login = (email, password) => {
  try {
    return db.Admin.findOne({ email, password }).then((admin) => {
      console.log(admin);
      if (admin) {
        return {
          status: true,
          statusCode: 200,
          message: "Login successful",
          admin,
        };
      } else {
        return {
          status: false,
          statusCode: 401,
          message: "Incorrect email or password",
        };
      }
    });
  } catch (error) {
    console.log(error);
    return {
      status: false,
      statusCode: 500,
      message: "An error occurred during login",
    };
  }
};


registerUser = (email, username, password) => {
  try {
    return db.User.findOne({ email }).then((user) => {
      if (user) {
        return {
          status: false,
          statusCode: 400,
          message: "User already present",
        };
      } else {
        const newUser = new db.User({
          email,
          username,
          password,
        });
        newUser.save();
        const nUser = new db.Usser({
          email,
        });
        nUser.save();

        return {
          status: true,
          statusCode: 200,
          message: "register success",
        };
      }
    });
  } catch (error) {
    console.log(error);
    return {
      status: false,
      statusCode: 500,
      message: "An error occurred while adding a doctor",
    };
  }
};

module.exports = {
  login,
registerUser
  

};
