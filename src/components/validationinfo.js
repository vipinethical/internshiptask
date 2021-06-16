export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.name) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must contain Minimum eight characters, at least one letter, one number and one special character";
  }
  if (!values.address) {
    errors.address = "Address required";
  }
  if (!values.phone) {
    errors.phone = "Mobile number required";
  }

  return errors;
}
