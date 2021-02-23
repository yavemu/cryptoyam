const Login = (req, res, next) => {
  try {
    res.send("HOLA MUNDO DESDE LOGIN");
  } catch (error) {
    next(error);
  }
};

module.exports = Login;
