import React from "react";
// React Icons
import { CiSettings } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

const PipelineStage = (props) => {
  return (
    <div className="col-xl-4">
      <div className="pipeline_stage_mainDiv2">
        <div id="pipeline_stage_div_text">
          <p>{props.name}</p>
        </div>
        <div id="pipeline_stage_div_icons">
          <div className="dropdown">
            <CiSettings
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#!">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div>
            <IoMdAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineStage;
