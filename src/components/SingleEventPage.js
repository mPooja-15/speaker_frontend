import React, { useEffect, useState } from "react";
import "./css/SingleEventPage.css";
import user from "./images/profile.png";
import {
  BsChevronRight,
  BsChevronLeft,
  BsFlag,
  BsBookmark,
  BsCalendar3,
  BsLink45Deg,
  BsFillCalendarEventFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function SingleEventPage() {
  const navigate = useLocation()
  const [eventData, setEventData] = useState()

  const [singleEventData, setSingleEventData] = useState()
  console.log(singleEventData, "singleEventDatasingleEventData")
  useEffect(() => {
    if (navigate?.pathname?.split('/')[2]) {

      axios.get(`${process.env.REACT_APP_URL}/events/${navigate?.pathname?.split('/')[2]}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('@userData')).token}`
        }
      }).then((data) => {
        setSingleEventData(data?.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [])
  useEffect(() => {
    const userToken = localStorage.getItem('@userData')
    console.log(JSON.parse(userToken).token, "hjkhkjhkh")
    axios.get(`${process.env.REACT_APP_URL}/events`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(userToken).token}`
      }
    }).then((d) => setEventData(d?.data)).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className="mp-parent">
      <div className="mp-left">
        <div className="sep-eventinfo">
          <div className="sep-einfo-head">
            <button>
              <span style={{ position: "relative", top: "3px" }}>
                <BsChevronLeft />
              </span>
              <span>Back to Events Search </span>
            </button>
            <div>
              <div>
                <BsFlag />
              </div>
              <div>
                <BsBookmark />
              </div>
            </div>
          </div>
          <div className="sep-einfo-body" style={{ paddingBottom: '0', paddingRight: '0' }}>
            <div className="eib-left">
              <div className="eibl-ename">{singleEventData?.name}</div>
              <div className="eibl-eplace">{singleEventData?.city}, {singleEventData?.country}</div>
              <div className="eibl-oname" style={{ marginBottom: "0.4rem" }}>
                <span>Organiser Name: </span>
                <span>Mohit Gopal</span>
              </div>
              <div className="eibl-mode" style={{ marginBottom: "0.4rem" }}>
                <span>Event Mode: </span>
                <span>ONLINE</span>
              </div>
              <div className="eibl-date" style={{ marginBottom: "0.4rem" }}>
                <span
                  style={{ position: "relative", top: "3px", marginLeft: "0" }}
                >
                  <BsCalendar3 />
                </span>
                <span>Date:</span>
                <span>{singleEventData?.submitted_on}</span>
              </div>
              <div className="eibl-location" style={{ marginBottom: "0.4rem" }}>
                <span
                  style={{ position: "relative", top: "3px", marginLeft: "0" }}
                >
                  <BiMap />
                </span>
                <span>Location:</span>
                <span>**Not required</span>
              </div>
              <div className="eibl-link" style={{ marginBottom: "0.4rem" }}>
                <span
                  style={{ position: "relative", top: "3px", marginLeft: "0" }}
                >
                  <BsLink45Deg />
                </span>
                <span>Link:</span>
                <span> {singleEventData?.website}</span>
              </div>
            </div>
            <div className="eib-right">
              <div className="eibr-header">About this event:</div>
              <div className="eibr-body">
                <span>
                  Tags: Film Industry, Actors, Hotel, Speaking, Guests
                </span>
                <p>
                  {singleEventData?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="sep-einfo-foot">
            This is an event hosted by one of the event managers. Click on the link above to apply as a speaker.
          </div>
        </div>
        <div style={{ margin: "1rem" }}>
          <span
            style={{
              fontSize: "medium",
              marginLeft: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Similar Events
          </span>
        </div>
        <div className="mp-lower">
          <div className="vc-sec">
            {eventData?.map((data) => {
              return (
                <div className="event-card">
                  <div className="ec-section1">
                    <div className="eds1-l">
                      <p className="e1">{data?.name}</p>
                      <p className="e2">{data?.state}</p>
                    </div>
                    <div className="eds1-r">
                      <BsFillBookmarkFill />
                    </div>
                  </div>
                  <div className="ec-section2">
                    <span>
                      <div style={{ marginRight: "0.5rem", fontSize: "medium" }}>
                        <BsFillCalendarEventFill />
                      </div>
                      <p>{data?.start_time}</p>
                    </span>
                    <p className="e8">ONLINE</p>
                  </div>
                  <div className="ec-section3">
                    Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
                  </div>
                  <div className="ec-section4">
                    {data?.description}
                  </div>
                  <div className="ec-section5">
                    <a href={`/single-event/${data?.id}`}>

                      <button
                        className="eprbtn2"
                        style={{
                          background: "#ffbf19",
                          padding: "0.5rem 2rem",
                        }}
                      >
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              )
            })}


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
            <div>
              <BsChevronRight />
            </div>
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
            <div>
              <BsChevronRight />
            </div>
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
            <div>
              <BsChevronRight />
            </div>
          </span>
          <div
            style={{ marginTop: "10px" }}
            className="eprbtn1"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
