import React, { useEffect, useState } from "react";
// Shared Component
import DashboardSection2Table from "./shared/DashboardSection2Table";

// Chart
import DonutChart from "./shared/DonutChart";

// Controllers Api Method
import { pipelineDeals } from "../controller/fetchApi";

const DashboardSection2 = () => {
  const userIdTokenData = JSON.parse(localStorage.getItem("user"));
  const uid = userIdTokenData?.data?.userId;
  const tokenId = userIdTokenData?.data?.token;
  const [pipelineDealsData, setPipelineDealsData] = useState([]);
  useEffect(() => {
    // (async () => {
    //   try {
    //     // pipelineDeals(uid, tokenId).then((res) => {
    //     //   setPipelineDealsData(res || null);
    //     // });
    //     let result = await pipelineDeals(uid, tokenId);
    //     if (result === null || result === undefined) {
    //       setPipelineDealsData(null);
    //     } else {
    //       setPipelineDealsData(result);
    //     }
    //   } catch (error) {
    //     setPipelineDealsData(null);
    //   }
    // })();

    (async () => {
      try {
        const result = await pipelineDeals(uid, tokenId);
        if (result === null || result === undefined) {
          setPipelineDealsData();
        } else {
          setPipelineDealsData(result);
        }
      } catch (error) {
        console.error("Error fetching pipeline deals:", error);
        setPipelineDealsData();
      }
    })();
  }, [uid, tokenId]);
  const getDataArray = () => {
    if (!pipelineDealsData || !Array.isArray(pipelineDealsData)) {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    return pipelineDealsData.map((deal) => deal.dealCount);
  };
  console.log("get data array:", getDataArray());
  return (
    <div className="row dashboard_row1">
      <div className="col-xl-8 col-md-8">
        <DashboardSection2Table />
      </div>
      <div className="col-xl-4 col-md-4 dashboard_section2_row2">
        <div>
          <div className="row dashboard_table_main_heading">
            <div className="col dashboard_section1_table">
              <h4>My Pipeline Deals By Stage</h4>
            </div>
          </div>
        </div>
        <div className="dashboard_section2_chart_mainDiv">
          <div className="dashboard_section2_chart_div">
            <DonutChart
              data={getDataArray()}
              // data={[]}
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardSection2;
