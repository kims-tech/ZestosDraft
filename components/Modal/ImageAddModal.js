
"use client";

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { toast } from "react-hot-toast";
import { useAuthToken } from "../../contexts/authContext";
import { useMutation, useQueryClient } from "react-query";
//import cityApi from "../../utils/Api/city.api";

function CityModal({ displayIM, toggleIM }) {

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


//   const [cityName, setCityName] = useState("");
//   const queryClient = useQueryClient();
//   const token = useAuthToken();
//   const { mutate } = useMutation({
//     mutationFn: (data) => cityApi.addNewCity(data, token),
//     onSuccess: () => {
//       toast.success(`${cityName} city added successfully`);
//       queryClient.invalidateQueries({ queryKey: ["getAllcities"] });
//       setCityName("");
//     },
//     onError: (error) => {
//       const message =
//         error?.response?.data?.message || "Mobile Number does not exist";
//       toast.error(message);
//       setCityName("");
//     },
//   });
  const handleSubmit = (e) => {
    e.preventDefault();
    // mutate({ name: cityName });
  };

//   const onChnageHandler = (e) => {
//     setCityName(e.target.value);
//   };

  return (
    <div
      className={
        displayIM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
      }
      id="loginRegisterModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Tabs>
            <button
              type="button"
              className="close"
              onClick={() => {
                toggleIM(!displayIM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Add Images
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    <span className="sub-title">
                      <span>Add Images</span>
                    </span>

                    <form onSubmit={(e) => {handleSubmit(e);}}>
                      {/* <div className="form-group">
                        <input
                          type="text"
                          placeholder="add city"
                          className="form-control"
                        />
                      </div> */}

                        <div {...getRootProps()} className='dropzone add-listings-box'>
                            <h3>add images</h3>
                            {files.length > 0 ? (
                                <div className='gallery-flex'>
                                {thumbs}
                                <input {...getInputProps()} />
                                </div>
                            ) : (
                                <div className='file-upload-box'>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop , or click to select files</p>
                                </div>
                            )}
                        </div>

                      <button
                        type="submit"
                        onClick={() => {
                          toggleCM(!displayCM);
                        }}
                      >
                        Add Imges
                      </button>
                      
                      <button
                        type="submit"
                        onClick={() => {
                          toggleCM(!displayCM);
                        }}
                      >
                        Clear All Imges
                      </button>
                    </form>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default CityModal;
