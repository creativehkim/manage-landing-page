import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [ values, setValues ] = useState({ email: "" })
  const [ errors, setErrors ] = useState({})
  const [isSubmitted, setIsSubmitted ] = useState(false)

  const handleChange = (e) =>{
    const { name, value } = e.target

    setValues({
      ...values, 
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitted(true)

  }

  useEffect(() => {
    // check to see if there are no errors
    if(Object.keys(errors).length=== 0 && isSubmitted) {
      callback()
    }
    // call our callback
    
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitted
  }
}

export default useForm