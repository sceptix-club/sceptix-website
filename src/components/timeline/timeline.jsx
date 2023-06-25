
import "./timeline.css";

import timelineElement from "./timelineElements"

import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline (){
  let workIconStyle = {background:"#06d6A0"}
  let schoolIconStyle = {background:"#f9c47f"}
  return ( <div>
    <h1>Timeline</h1>
    <VerticalTimeline>
      {
        timelineElement.map(element => {
let isWorkIcon = element.icon == "work";
let showButton = 
element.buttonText !== undefined && 
element.buttonText !== null && 
element.buttonText !=="";
          return (
            <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            // iconStyle={isWorkIcon ? WorkIconStyle : schoolIcon}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
                </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
                </h5>
              <p id="description">
                {element.description}
                </p>
                {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">{element.buttonText}</a>)}


            </VerticalTimelineElement>
          );
        })
      }
    </VerticalTimeline>
  </div>
  );
}
export default Timeline