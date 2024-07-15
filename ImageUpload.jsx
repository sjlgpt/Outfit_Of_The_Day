import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UploadContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-family: 'Arial', sans-serif;
  color: #3e4152;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  border: 1px solid #d4d5d9;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #ff3f6c;
  }
`;

const FileInput = styled(Input)`
  &::file-selector-button {
    padding: 8px 16px;
    border: none;
    background-color: #ff3f6c;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: #ff3f6c;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff527b;
  }
`;

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username', username);

    try {
      await axios.post('http://localhost:5005/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // console.log('Response:', response.data);
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload image. Please try again.');
    }
  };

  return (
    <UploadContainer>
      <Title>Upload Your Image</Title>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          onChange={handleUsernameChange} 
          placeholder="Username" 
          required 
        />
        <FileInput 
          type="file" 
          onChange={handleFileChange} 
          required 
        />
        <Button type="submit">Upload</Button>
      </Form>
    </UploadContainer>
  );
}

export default ImageUpload;