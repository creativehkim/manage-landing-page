export default function validateInfo(value) {
  let errors = {}

  if (!value.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = 'Email address is invalid';
  }

  return errors;
}