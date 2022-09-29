import ".././styles/event.css";
import calendarIcon from ".././assets/Calendar.svg";
import localistaionIcon from ".././assets/Location.svg";
import { RiArrowRightSLine } from "react-icons/ri";

const Event = ({ event, photo }) => {
  const Startdate = event && event?.start?.split("T").join(" ");
  const endDate = event && event?.end?.split("T").join(" ");
  return (
    <div className="eventPage">
      <div className="wrapper">
        {" "}
        {event && (
          <div className="event">
            <img src={photo} alt={`${event.name} img`} />

            <div className="event-info">
              <h2>{event?.name}</h2>
              <p>
                Hosted by <span>{event.hostname}</span>
              </p>
              <div className="event-date">
                <img src={calendarIcon} alt="calendar icon" />
                <p>
                  {Startdate?.slice(11, 13) > 12
                    ? `${Startdate} PM`
                    : `${Startdate} AM`}{" "}
                  <br />
                  <span>
                    to :
                    {endDate?.slice(11, 13) > 12
                      ? `${endDate} PM`
                      : `${endDate} AM`}
                  </span>
                </p>
                <RiArrowRightSLine />
              </div>
              <div className="event-location">
                <img src={localistaionIcon} alt="localistaion icon" />
                <p>
                  Street Name <br />
                  <span>{event?.location}</span>
                </p>
                <RiArrowRightSLine />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
