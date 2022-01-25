import React from "react";
import "./css/addeventpage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import user from "./images/profile.png";
import { BsChevronRight } from "react-icons/bs";

export default function Addeventpage() {
  return (
    <>
      <div className="mp-parent">
        <div className="mp-left">
          <div className="mp-lower">
            <div className="mpl-right">
              <div className="mpl-heading">
                <p>Event Details</p>
                <button>Show previous events hosted</button>
              </div>
              <div className="mplower-body">
                <div className="mpedit-section">
                  <div className="mpes-form">
                    <p>Name of the event</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Date of the event</p>
                    <input
                      type="date"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Mode</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      <option value="Online" selected>
                        Choose Mode
                      </option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                    <p>Location</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Topic covered</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Audience Size</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Payment Terms</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      {/* <option value="Online" selected>Choose Mode</option> */}
                      <option value="Online" selected>
                        Paid
                      </option>
                      <option value="Offline">Offline</option>
                    </select>
                  </div>
                  <div className="mpes-form">
                    <p>This event includes (in short):</p>
                    <textarea
                      rows="4"
                      cols="46"
                      placeholder="A small about the event that is going to be held for the speakers."
                      style={{
                        background: "#F5F5F5",
                        borderRadius: "10px",
                        padding: "0.5rem",
                        marginBottom: "1rem",
                      }}
                      res
                    ></textarea>
                    <p>About (elaborate)</p>
                    <textarea
                      rows="5"
                      cols="46"
                      placeholder="A small about the event that is going to be held for the speakers."
                      style={{
                        borderRadius: "10px",
                        padding: "0.5rem",
                        marginBottom: "1rem",
                      }}
                      res
                    ></textarea>
                    <p>Contact Information:</p>
                    <input
                      type="number"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Session Type</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      <option value="Online" selected>
                        Choose Mode
                      </option>
                      <option value="Online" selected>
                        Conference
                      </option>
                      <option value="Offline">Offline</option>
                    </select>
                    <p>Audience Type</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Tags</p>
                    <div className="tag-div">
                      <input
                        type="text"
                        className="mpes-input"
                        placeholder="first"
                      />
                      <button>ADD</button>
                    </div>
                    <ul className="tags-parent">
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                      <li>fifth</li>
                    </ul>
                  </div>
                </div>
                <div className="confirmation">
                  <div className="con-upper">
                  <input type="checkbox" style={{position:'initial'}} class="apply1" name="apply1"/>
                  <div className="conu-text">
                  <h4>Apply for SpeakerOre Exclusive</h4>
                  <span>Events only for SpeakerOre subscribers. All the speaker in these events will be selected among speakers or members.</span>
                  </div>
                  </div>
                  <div className="con-lower">
                        <button className="con-lower-btn eprbtn2" style={{
                            margin: '1rem', border:'1px solid #ffbf19',background:'none'
                        }}>Cancel Event</button>
                        <button className="con-lower-btn eprbtn1" style={{
                            margin: '1rem'
                        }}>Add Event</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ep-right">
          <div className="eprcard">
            <div className="avatar-parent">
              <img src={user} alt="" />
            </div>
            <p>
              Hi, <b style={{ fontWeight: "500" }}>Mohit Gopal!</b>
            </p>
            <span className="eprtext1">Event Manager</span>
            <div style={{ marginTop: "3rem" }} className="eprbtn2">
              Create a new event
            </div>
            <div className="eprbtn2">SpeakerOre exclusive Events</div>
            <div
              style={{
                marginTop: "0",
                background: "rgba(255, 191, 25, 0.4)",
              }}
              className="eprbtn1"
            >
              Subscribed
            </div>
          </div>

          <div className="eprcard">
            <p>
              <b style={{ fontWeight: "500" }}>Reources</b>
            </p>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.3rem",
              }}
              className="eprtext1"
            >
              <div>About Us</div>
              <div><BsChevronRight/></div>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.3rem",
              }}
              className="eprtext1"
            >
              <div>How it works</div>
              <div><BsChevronRight/></div>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.3rem",
              }}
              className="eprtext1"
            >
              <div>Privacy Policy</div>
              <div><BsChevronRight/></div>
            </span>
            <div
              style={{ marginTop: "10px", marginTop: "5rem" }}
              className="eprbtn1"
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
