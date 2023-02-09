import './App.css';
import React, { useEffect } from "react";

function Library() {
  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
  }, []);

  return (
    <div className="Library">
      <div className="Librarybg">
        <div className='Library-home'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='Library-img'>
                  <h2>Library</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Library;
