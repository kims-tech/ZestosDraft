"use client";

import React, { useEffect, useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { toast } from "react-hot-toast";
import { useAuthToken } from "../../contexts/authContext";
import { useMutation, useQueryClient } from "react-query";
import cityApi from "../../utils/Api/city.api";

function CityModal({ displayCM, toggleCM }) {
  const [cityName, setCityName] = useState("");
  const queryClient = useQueryClient();
  const token = useAuthToken();
  const { mutate } = useMutation({
    mutationFn: (data) => cityApi.addNewCity(data, token),
    onSuccess: () => {
      toast.success(`${cityName} city added successfully`);
      queryClient.invalidateQueries({ queryKey: ["getAllcities"] });
      setCityName("");
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || "Mobile Number does not exist";
      toast.error(message);
      setCityName("");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name: cityName });
  };

  const onChnageHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div
      className={
        displayCM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
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
                toggleCM(!displayCM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Add City
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    <span className="sub-title">
                      <span>Add City</span>
                    </span>

                    <form
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          onChange={onChnageHandler}
                          value={cityName}
                          placeholder="add city"
                          className="form-control"
                        />
                      </div>

                      <button
                        type="submit"
                        onClick={() => {
                          toggleCM(!displayCM);
                        }}
                      >
                        Add City
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
