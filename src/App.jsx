import React from 'react';
import './App.css';

const App = () => {
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
          <div className='upload-preview'></div>
          <div className='check-boxs'>
            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>


            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>

            <div className='check-grp'>
              <label className='container'>
                <input defaultChecked='checked' type='checkbox' />
                <div className='checkmark' />
              </label>
              <div className="check-name">
                check 1
              </div>
            </div>
          </div>
          <div className='upload-btn'>Upload</div>
        </div>
      </div>
    </div>
  );
};

export default App;
