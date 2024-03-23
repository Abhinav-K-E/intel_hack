import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

const App = () => {
  const [video, setVideo] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setVideo(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*', // Accept only video files
    multiple: false, // Allow only one file to be uploaded
  });

  return (
    <div className='wrapper'>
      <div className='grid-left'>
        <div className='main-txt'>Enter something</div>
        <div className='sub-txt'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          pariatur quam labore sapiente aperiam tempora! Iure ducimus error ex
          sapiente magnam, delectus iste nesciunt quos repudiandae, doloremque
          ipsam, harum architecto?
        </div>
      </div>
      <div className='grid-right'>
        <div className='upload-card'>
          <div className='upload-preview'>
            {video ? (
              <div>
                <video controls className='video-preview'>
                  <source src={URL.createObjectURL(video)} type={video.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
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
            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className='check-name'>check 1</div>
            </div>
          </div>
          <div className='upload-btn'>Upload</div>
        </div>
      </div>
    </div>
  );
};

export default App;
