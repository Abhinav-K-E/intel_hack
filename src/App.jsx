import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

const App = () => {
  const [video, setVideo] = useState(null);
  const [selectedDetectors, setSelectedDetectors] = useState([]);
  const fileInputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [plotImage, setPlotImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setVideo(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*', // Accept only video files
    multiple: false, // Allow only one file to be uploaded
  });

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDetectors((prevDetectors) => [...prevDetectors, value]);
    } else {
      setSelectedDetectors((prevDetectors) =>
        prevDetectors.filter((detector) => detector !== value)
      );
    }
  }

  function selectFiles() {
    fileInputRef.current.click();
  }

  async function uploadFile() {
    if (!video) {
      alert('Please select a video file!');
      return;
    }

    const models = selectedDetectors;

    const formData = new FormData();
    formData.append('file', video);
    formData.append('models', models.join(','));

    try {
      const response = await fetch('http://localhost:8000/models/', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setResult(result);
      setPlotImage(null); // Reset plotImage when uploading a new file
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  async function fetchPlot() {
    try {
      const response = await fetch('http://localhost:8000/get_file');
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPlotImage(url);
      } else {
        console.error('Error fetching plot:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching plot:', error);
    }
  }

  return (
    <div className='app'>
      <div className='wrapper'>
        <div className='grid-left'>
          {result ? (
            <div className='result-content'>
              <div className='head'>Result</div>
              <div className='graph'></div>
            </div>
          ) : (
            <div className='no-result-content'>
              <div className='main-txt'>Enter something</div>
              <div className='sub-txt'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                pariatur quam labore sapiente aperiam tempora! Iure ducimus
                error ex sapiente magnam, delectus iste nesciunt quos
                repudiandae, doloremque ipsam, harum architecto?
              </div>
            </div>
          )}
        </div>
        <div className='grid-right'>
          <div className='upload-card'>
            <div className='upload-preview'>
              {video ? (
                <div>
                  <video controls className='video-preview'>
                    <source
                      src={URL.createObjectURL(video)}
                      type={video.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div {...getRootProps()} className='upload-preview-grp'>
                  <input {...getInputProps()} />
                  {/* Your upload SVG icon and text here */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={100}
                    height={100}
                    fill='none'
                  >
                    <path
                      fill='#007AFF'
                      d='M80.625 41.833C77.792 27.458 65.167 16.667 50 16.667c-12.042 0-22.5 6.833-27.708 16.833C9.75 34.833 0 45.458 0 58.333c0 13.792 11.208 25 25 25h54.167C90.667 83.333 100 74 100 62.5c0-11-8.542-19.917-19.375-20.667M58.333 54.167v16.666H41.667V54.167h-12.5l19.375-19.375a2.063 2.063 0 0 1 2.958 0l19.333 19.375z'
                    />
                  </svg>

                  <p>Drag & drop a video file here</p>
                </div>
              )}
            </div>
            <div className='check-boxs'>
              {selectedDetectors.map((detectorValue, index) => (
                <div key={index} className='check-grp'>
                  <label className='container'>
                    <input
                      type='checkbox'
                      value={detectorValue}
                      onChange={handleCheckboxChange}
                      checked={selectedDetectors.includes(detectorValue)}
                    />
                    <div className='checkmark' />
                  </label>
                  <div className='check-name'>check 1</div>
                </div>
              ))}
            </div>
            <div className='upload-btn' onClick={uploadFile}>
              Upload
            </div>
            <div className='upload-btn' onClick={fetchPlot}>
              Get Result
            </div>
          </div>
        </div>
      </div>

      {/* Your popup window container here */}
      <div className='popup-window-container' style={{ display: 'none' }}>
        <div className='popup-window'>
          <div className='top-box'>
            <div className='faces'>
              <img src='' alt='img' className='face' />
              <img src='' alt='img' className='face' />
              <img src='' alt='img' className='face' />
              <img src='' alt='img' className='face' />
            </div>
          </div>
          <div className='bottom-box'>
            <div className='next-btn'>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
