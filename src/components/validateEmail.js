export default function validate(values) {
  let errors = {}

  if(!values.email) {
    errors.email = "Email field is empty"
  } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  return errors
} 

// email validation
// the string to be more than 0 chars
// need the string to be an email
