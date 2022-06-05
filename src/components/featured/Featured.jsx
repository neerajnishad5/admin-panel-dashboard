import "./featured.scss";

import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVertOutlined,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={50} text={"50%"} strokeWidth={2} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">550$</p>
        <p className="desc">
          Previous transactions processing. Last payments not included.
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmount">20$</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target </div>
            <div className="itemResult positive">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">20$</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target </div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">20$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
