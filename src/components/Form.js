import React from 'react'
import validate from './validateEmail'
import useForm from './useForm'

const Form = () => {
  const { handleChange, handleSubmit, values, errors, isSubmitted} = useForm(submit, validate)

  function submit() {
    console.log('submitted')
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <div className='input-wrapper'>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Updates in your inbox...'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          {!errors.email && isSubmitted ? <p style={{color: 'teal'}}>Submitted Successfully!</p> : ''}
        </div>
        <button type='submit' className='footer-go-btn'>Go</button>
      </form> 
    </div>
  )
}

export default Form
