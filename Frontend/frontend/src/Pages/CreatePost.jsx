import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post('http://localhost:3000/create-post', formData)
    .then( (res) => {
    
      navigate("/feed")
      alert("post created successfully")
      e.target.reset()

    })
    .catch( (err) => {

      console.log(err)
      alert("Error creating post")

    })
  }

  return (
    <div className='container'>
      
      <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" placeholder='Enter Caption' name='caption' required />
            <button type='submit'>Submit</button>
        </form>

      </section>

    </div>
  )
}

export default CreatePost
