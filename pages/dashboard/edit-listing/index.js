
import Link from "next/link";
import Image from "next/image";

import ImageAddModal from "../../../components/Modal/ImageAddModal";

import React, { useState,useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import * as yup from "yup";

import useCities from "../../../utils/Hooks/useCities";
import useFacilites from "../../../utils/Hooks/useFacilities";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import { useMutation } from "react-query";
import listingApi from "../../../utils/Api/addListing.api";
import { useAuthToken } from "../../../contexts/authContext";

const AddListing = () => {
  const [displayIM, toggleIM] = useState(false);
  
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name} className='drop-gallery-thumb'>
      <img src={file.preview} />
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <DashboardNavbar />

      <div className='main-content d-flex flex-column'>

        <div className='breadcrumb-area'>
          <h1>Edit Listing</h1>
        </div>


        {/* list of listings */}
        <div className="add-listings-box">
          <h3>lists</h3>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Availability</th>
                <th scope="col">occupancy</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* image show section */}
        <div className="add-listings-box">
          
          <h3>images</h3>
          
          <div className="gallery-flex">

              <div  className='drop-gallery-thumb'>
                <div className="close">X</div>
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="noimg" />
            </div>

            <div  className='drop-gallery-thumb'>
                <div className="close">X</div>
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="noimg" />
            </div>

          </div>

          <div className='add-listings-btn sub-btn'>
            <button type='submit' onClick={()=>{toggleIM(!displayIM)}}>Add Images</button>
          </div>
        </div>

        {/* <div className='add-listings-btn sub-btn'>
          <button type='submit' onClick={()=>{toggleIM(!displayIM)}}>Add Images</button>
        </div> */}

        

        {/* dropzone */}
        {/* <div {...getRootProps()} className='dropzone add-listings-box'>
          <h3>Gallery</h3>
          {files.length > 0 ? (
            <div className='gallery-flex'>
              {thumbs}
              <input {...getInputProps()} />
            </div>
          ) : (
            <div className='file-upload-box'>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          )}
        </div> */}

        
        {/* facilities */}
        {/* <div className='add-listings-box'>
          <h3>Facilities</h3>

          <div className='form-group'>
            <ul className='facilities-list'>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='free-wifi'
                    defaultChecked
                  />
                  <span>Free WiFi</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='parking'
                  />
                  <span>Parking</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='fitness-center'
                    defaultChecked
                  />
                  <span>Fitness Center</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='non-smoking-rooms'
                  />
                  <span>Non-smoking Rooms</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='airport-shuttle'
                    defaultChecked
                  />
                  <span>Airport Shuttle</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='air-conditioning'
                  />
                  <span>Air Conditioning</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='events'
                  />
                  <span>Events</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='friendly-workspace'
                  />
                  <span>Friendly Workspace</span>
                </label>
              </li>
            </ul>
          </div>
        </div> */}
        
        

        <div className='add-listings-btn'>
          <button type='submit'>Update Listings</button>
        </div>

        <div className='flex-grow-1'></div>

      </div>

{/*..........................Image MODAL................................................. */}
      <ImageAddModal displayIM={displayIM} toggleIM={toggleIM} />
    </>
  );
};

export default AddListing;
