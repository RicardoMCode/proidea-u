import React from "react";

const ImportantDates = () => {
  return (
    <div className="calendar_content">

      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FBogota&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&mode=MONTH&src=MjhtNmJ1b2Ixcm43NnZyc2Y4NTl2cW04OXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23616161"
        className="border-width:0"
        width="380"
        height="450"
        // height="285"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default ImportantDates;
