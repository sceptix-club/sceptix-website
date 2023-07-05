import React from "react";
import Timeline from "../timeline/timeline.jsx";
import Footer from "../footer/footer.jsx";

function main_timeline() {
  return (
    <div>
      <Timeline />
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default main_timeline;
