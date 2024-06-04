import React, { useEffect, useState } from "react";
// Shared Component
import DashboardSection2Table from "./shared/DashboardSection2Table";

// Chart
import DonutChart from "./shared/DonutChart";

// Controllers Api Method
import { pipelineDeals } from "../controller/fetchApi";
import Loader2 from "../pages/Loader2";
const DashboardSection2 = () => {
  const [loading, setLoading] = useState();
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [pipelineDealsData, setPipelineDealsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await pipelineDeals(uid, tokenId);
        if (result === null || result === undefined) {
          setPipelineDealsData();
          setLoading(false);
        } else {
          setPipelineDealsData(result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching pipeline deals:", error);
        setPipelineDealsData();
        setLoading(false);
      }
    })();
  }, [uid, tokenId]);
  // const getDataArray = () => {
  //   if (!pipelineDealsData || !Array.isArray(pipelineDealsData)) {
  //     return [0, 0, 0, 0, 0, 0, 0];
  //   }
  //   return pipelineDealsData.map((deal) => deal.dealCount);
  // };
  console.log("pipelineDealsData", pipelineDealsData?.length);
  return (
    <div className="row dashboard_row1">
      {/* Dashboard Section 2 table */}
      <div className="col-xl-8 col-md-8">
        <DashboardSection2Table />
      </div>
      {/* My Pipeline Stage */}
      <div className="col-xl-4 col-md-4 dashboard_section2_row2">
        <div>
          <div className="row dashboard_table_main_heading">
            <div className="col dashboard_section1_table">
              <h4>My Pipeline Deals By Stage</h4>
            </div>
          </div>
        </div>
        <div className="dashboard_section2_chart_mainDiv">
          {loading ? (
            <Loader2 />
          ) : (
            <div className="dashboard_section2_chart_div">
              <DonutChart
                // data={getDataArray()}
                data={pipelineDealsData}
                labels={[
                  "Need Analysis",
                  "Value",
                  "Identify Decision Maker",
                  "Proposal",
                  "Negosition",
                  "Won",
                  "Lost",
                ]}
                height={50}
                width={50}
              />
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardSection2;
