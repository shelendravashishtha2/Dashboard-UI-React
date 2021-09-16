import { Doughnut } from "react-chartjs-2";
let PieChartComp = () => {
  const data = {
    datasets: [
      {
        data: [45, 25, 30],
        borderColor: ["#6345AD", "#2D9BFF", "#FE5260"],
        backgroundColor: ["#6345AD", "#2D9BFF", "#FE5260"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default PieChartComp;
