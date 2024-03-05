import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ["Crowdsale investors", "Foundation"],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#FAA002", "#0082FF"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutoutPercentage: 10,
};

const Tokenomics = () => {
  return (
    <div className="bg-white rounded-xl p-5 ">
      <div className="text-2xl font-semibold">Tokenomics</div>

      <div className="py-4 flex flex-col gap-3">
        <div className="text-[20px] font-semibold">Initial Distribution</div>
        <div className=" max-h-40 flex gap-10">
          <Doughnut
            data={data}
            options={options}
            style={{ width: "100px ", height: "100px" }}
          />
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex gap-2">
              <div className="h-3 w-3 bg-[#FAA002]  rounded-full"></div>
              <div className="text-[#3E424A] text-sm">Crowdsale investors</div>
              <div className="text-[#3E424A] text-sm">80%</div>
            </div>

            <div className="flex gap-2">
              <div className="h-3 w-3 bg-[#0082FF] rounded-full"></div>
              <div className="text-[#3E424A] text-sm">Foundation</div>
              <div className="text-[#3E424A] text-sm">20%</div>
            </div>

            <div></div>
          </div>
        </div>
      </div>

      <div className="text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </div>
    </div>
  );
};

export default Tokenomics;
