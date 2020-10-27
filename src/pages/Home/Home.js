import React from "react";
import { ResponsiveLine } from "@nivo/line";

const Home = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(250, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 13,
        },
        {
          x: "helicopter",
          y: 152,
        },
        {
          x: "boat",
          y: 275,
        },
        {
          x: "train",
          y: 49,
        },
        {
          x: "subway",
          y: 208,
        },
        {
          x: "bus",
          y: 253,
        },
        {
          x: "car",
          y: 269,
        },
        {
          x: "moto",
          y: 148,
        },
        {
          x: "bicycle",
          y: 178,
        },
        {
          x: "horse",
          y: 180,
        },
        {
          x: "skateboard",
          y: 74,
        },
        {
          x: "others",
          y: 54,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(334, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 225,
        },
        {
          x: "helicopter",
          y: 7,
        },
        {
          x: "boat",
          y: 1,
        },
        {
          x: "train",
          y: 38,
        },
        {
          x: "subway",
          y: 17,
        },
        {
          x: "bus",
          y: 234,
        },
        {
          x: "car",
          y: 64,
        },
        {
          x: "moto",
          y: 205,
        },
        {
          x: "bicycle",
          y: 102,
        },
        {
          x: "horse",
          y: 248,
        },
        {
          x: "skateboard",
          y: 86,
        },
        {
          x: "others",
          y: 298,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(283, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 274,
        },
        {
          x: "helicopter",
          y: 278,
        },
        {
          x: "boat",
          y: 132,
        },
        {
          x: "train",
          y: 276,
        },
        {
          x: "subway",
          y: 56,
        },
        {
          x: "bus",
          y: 119,
        },
        {
          x: "car",
          y: 217,
        },
        {
          x: "moto",
          y: 224,
        },
        {
          x: "bicycle",
          y: 15,
        },
        {
          x: "horse",
          y: 270,
        },
        {
          x: "skateboard",
          y: 34,
        },
        {
          x: "others",
          y: 211,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(360, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 142,
        },
        {
          x: "helicopter",
          y: 153,
        },
        {
          x: "boat",
          y: 21,
        },
        {
          x: "train",
          y: 15,
        },
        {
          x: "subway",
          y: 174,
        },
        {
          x: "bus",
          y: 15,
        },
        {
          x: "car",
          y: 299,
        },
        {
          x: "moto",
          y: 148,
        },
        {
          x: "bicycle",
          y: 103,
        },
        {
          x: "horse",
          y: 281,
        },
        {
          x: "skateboard",
          y: 249,
        },
        {
          x: "others",
          y: 204,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(135, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 211,
        },
        {
          x: "helicopter",
          y: 49,
        },
        {
          x: "boat",
          y: 258,
        },
        {
          x: "train",
          y: 217,
        },
        {
          x: "subway",
          y: 192,
        },
        {
          x: "bus",
          y: 173,
        },
        {
          x: "car",
          y: 61,
        },
        {
          x: "moto",
          y: 137,
        },
        {
          x: "bicycle",
          y: 225,
        },
        {
          x: "horse",
          y: 163,
        },
        {
          x: "skateboard",
          y: 62,
        },
        {
          x: "others",
          y: 283,
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Hello World!</h1>
      <div style={{ width: '100%', height: '800px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
      </div>

    </div>
  );
};
export default Home;
