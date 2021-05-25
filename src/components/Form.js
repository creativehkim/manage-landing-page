import React from 'react'
import useForm from './useForm'

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit)

  function submit() {
    console.log('submitted')
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit} >
        <input
          className='footer-input'
          name='email'
          type='email'
          placeholder='Updates in your inbox...'
          value={values.email}
          onChange={handleChange}
        />
        {/* error message here */}
        <button type='submit' className='footer-go-btn'>Go</button>
      </form> 
    </div>
  )
}

export default Form
