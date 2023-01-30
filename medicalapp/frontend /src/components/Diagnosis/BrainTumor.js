import React, { useState } from 'react';
import TumorImage from'./images/Tumorimge.jpg'
import './imageContainer.css'
function BrainTumor() {
  const [result, setResult] = useState(null);
 
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append('imagefile', image);

    try {
      
      const res = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResponse(data);
      console.log(data);
      setResult(data);
      this.setState({ data: response.data });
    } catch (err) {
      console.error(err);
    }
    
  }

  return (
    <div>
      <div className='The-head '>
      <h1> Brain Tumor prediction</h1>
      <img src={TumorImage} alt="tumor" />
      <h3>Please drop and drag your image and press the button to see your result</h3>

     </div> 
    
    <div className="image-input-container">
      
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} accept="image/*" />
      <button type="submit">Upload</button>
      {response && <div>{response.message}</div>}
      <h1> {result}</h1>
    </form>
    </div>
    </div>
  );
}

export default BrainTumor;