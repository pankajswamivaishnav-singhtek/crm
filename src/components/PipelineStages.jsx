import React from "react";

// CSS
import "../styles/pipelineStage.component.css";
// Shared Components
import PipelineStage from "./shared/PipelineStage";
const PipelineStages = () => {
  return (
    <div className="container-fluid pipeline_stage_mainDiv">
      <div className="row flex-nowrap overflow-auto row-div">
        <PipelineStage name = {"NEW"} />
        <PipelineStage name = {"Qualified"}/>
        <PipelineStage name = {"Proposition"}/>
        <PipelineStage name = {"Won"}/>
        {/* Add more divs with col-xl-4 for additional content */}
      </div>
    </div>
  );
};

export default PipelineStages;
