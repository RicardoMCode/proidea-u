import React from "react";

const ImportantDates = () => {
  return (
    <div className="calendar_content">
      <iframe
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%2345637d&ctz=America%2FBogota&showTitle=0&showNav=0&showDate=1&showPrint=0&showTabs=0&showTz=1&showCalendars=0&src=MjhtNmJ1b2Ixcm43NnZyc2Y4NTl2cW04OXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZXMuY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5&color=%230B8043"
        style={{border: "solid 1px #777"}}
        width="300"
        height="400"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default ImportantDates;
