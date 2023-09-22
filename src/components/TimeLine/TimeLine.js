import React from "react";
import "./TimeLine.scss";

const TimeLine = () => {
  return (
    <div className="timeline-parent">
      <div className="timeline-container">
        <div className="timeline-head">
          <h1 className="timeline-title">timeline</h1>
          <p className="supporting-text">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="timeline-content">
          {/* <div className="timeline-tracking"> */}
          <div className="track-container">
            <div className="left">
              <h3 className="tracktitle">hackathon announcemment</h3>
              <p className="paragraph">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="middle">
              <div className="line"></div>
              <div className="circle">1</div>
            </div>
            <div className="last">
              <h3 className="last-item">November 18, 2023</h3>
            </div>
            {/* </div> */}
          </div>
          <div className="track-container-two">
            <div className="left">
              <h3 className="tracktitle">November 18, 2023</h3>
            </div>
            <div className="middle">
              <div className="line"></div>
              <div className="circle">2</div>
            </div>
            <div className="last">
              <h3 className="last-item">Teams Registration begins</h3>
              <p className="paragraph">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            {/* </div> */}
          </div>
          <div className="track-container">
            <div className="left">
              <h3 className="tracktitle">Teams Registration ends</h3>
              <p className="paragraph">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="middle">
              <div className="line"></div>
              <div className="circle">3</div>
            </div>
            <div className="last">
              <h3 className="last-item">November 18, 2023</h3>
            </div>
            {/* </div> */}
          </div>
          <div className="track-container-four">
            <div className="left">
              <h3 className="tracktitle">November 18, 2023</h3>
            </div>
            <div className="middle">
              <div className="line"></div>
              <div className="circle">4</div>
            </div>
            <div className="last">
              <h3 className="last-item">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="paragraph">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="track-container-five">
            <div className="left">
              <h3 className="tracktitle">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="paragraph">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="middle">
              <div className="line"></div>
              <div className="circle">5</div>
            </div>
            <div className="last">
              <h3 className="last-item">November 18, 2023</h3>
            </div>
            {/* </div> */}
          </div>
          <div className="track-container-two">
            <div className="left">
              <h3 className="tracktitle">November 18, 2023</h3>
            </div>
            <div className="middle">
              <div className="line"></div>
              <div className="circle">6</div>
            </div>
            <div className="last">
              <h3 className="last-item">Demo Day</h3>
              <p className="paragraph">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
