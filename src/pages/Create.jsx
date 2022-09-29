import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import eventPic from "../assets/event.webp";
import "../styles/create.css";
import Event from './Event';

const Create = ({ event, handleChange, handleFileUpload }) => {
  console.log(event);
  return (
    <div className="createPage">
      <div className="createPageInfo">
        <h2>Create your event :</h2>
        <form action="">
          <label htmlFor="name">- Event name : </label>
          <input type="text" name="name" id="name" onChange={handleChange} />

          <label htmlFor="hostname">- Event hostname : </label>
          <input
            type="text"
            name="hostname"
            id="hostname"
            onChange={handleChange}
          />

          <label htmlFor="start">- Event start date : </label>
          <input
            type="datetime-local"
            name="start"
            id="start"
            onChange={handleChange}
          />

          <label htmlFor="end">- Event end date : </label>
          <input
            type="datetime-local"
            name="end"
            id="end"
            onChange={handleChange}
          />

          <label htmlFor="location">- Event location :</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
          />

          <label id="photoUploadBtn" htmlFor="photo">
            - Event photo : <span>(Click Here)</span>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={handleFileUpload}
            />
          </label>
        </form>
      </div>
      <div className="createBtn">
        <Link to="/event">🎉 Add your event</Link>
        <img src={eventPic} alt="event img" />
      </div>
      <Event />
    </div>
  );
};

export default Create;
