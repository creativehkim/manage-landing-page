import { useState } from 'react'

const useForm = (callback) => {
  const [ values, setValues ] = useState({ email: "" })
  const [ errors, setErrors ] = useState({ email: "" })

  const handleChange = (e) =>{
    const { name, value } = e.target

    console.log(e.target.value)
    console.log(e.target.name)
    setValues({
      ...values, 
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    callback()

  }

  return (
    handleChange,
    handleSubmit,
    values
  )
}

export default useForm