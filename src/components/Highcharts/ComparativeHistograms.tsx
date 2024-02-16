import { useBelvoStore } from "@/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ComparativeHistograms = () => {
  const transactions = useBelvoStore((state) => state.Transaction);

  // Extraer las fechas y montos de las transacciones
  const dates = transactions.map((transaction) => transaction.value_date);
  const amounts = transactions.map((transaction) => transaction.amount);

  const options = {
    title: {
      text: "Transaction History",
    },
    xAxis: {
      categories: dates, // Utiliza las fechas como categorías en el eje x
    },
    yAxis: {
      title: {
        text: "Monto",
      },
    },
    series: [
      {
        name: "Monto",
        type: "line",
        data: amounts, // Utiliza los montos de las transacciones como datos en el eje y
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ComparativeHistograms;
