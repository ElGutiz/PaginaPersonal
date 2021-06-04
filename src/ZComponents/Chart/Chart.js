import React from "react";
import { Doughnut } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "./Chart.css";

const data = {
  labels: ["React", "Animaciones", "ESLint", "CSS/SASS", "Webpack"],
  datasets: [
    {
      label: "# of Votes",
      data: [18, 12, 10, 18, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.4)",
        "rgba(54, 162, 235, 0.4)",
        "rgba(255, 206, 86, 0.4)",
        "rgba(75, 192, 192, 0.4)",
        "rgba(153, 102, 255, 0.4)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <div className="Stat">
        <VisibilitySensor
          partialVisibility="top"
          offset={{ top: 800 }}
          onChange={(isVisible) => {
            this.setState({ visibility: isVisible });
          }}
        >
          <Fade top when={!visibility} distance="10%">
            <h1>Conocimiento de distintos temas (sobre 20)</h1>
            <div>
              <Doughnut
                width={400}
                height={400}
                options={{ maintainAspectRatio: false }}
                data={data}
              />
            </div>
          </Fade>
        </VisibilitySensor>
      </div>
    );
  }
}

export default DoughnutChart;
