import { getRandomColor } from "@/helpers/getRandomColor";
import { useBelvoStore } from "@/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ComparativeHistogramChart = () => {
  const transactions = useBelvoStore((state) => state.Transaction);

  // Agrupar transacciones por período de tiempo
  const transactionsByPeriod: Record<string, number[]> = {};
  transactions.forEach((transaction) => {
    const date = new Date(transaction.value_date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const period = `${year}-${month}`;
    if (!transactionsByPeriod[period]) {
      transactionsByPeriod[period] = [];
    }
    transactionsByPeriod[period].push(transaction.amount);
  });

  // Calcular el total de cada período
  const periods = Object.keys(transactionsByPeriod);
  const periodTotals: number[] = periods.map((period) =>
    transactionsByPeriod[period].reduce((acc, amount) => acc + amount, 0)
  );

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Comparative Histograms by Time Period",
    },
    xAxis: {
      categories: periods,
      title: {
        text: "Período",
      },
    },
    yAxis: {
      title: {
        text: "Total",
      },
    },
    series: [
      {
        name: "Total",
        data: periodTotals.map((total) => ({
          y: total,
          color: getRandomColor(), // Asignar un color aleatorio a cada barra
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ComparativeHistogramChart;
