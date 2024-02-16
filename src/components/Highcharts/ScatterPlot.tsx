import { getRandomColor } from "@/helpers/getRandomColor";
import { useBelvoStore } from "@/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TransactionScatterPlot = () => {
  const transactions = useBelvoStore((state) => state.Transaction);

  // Convertir los datos de transacciones en el formato adecuado para el gráfico de dispersión
  const data = transactions.map((transaction) => ({
    x: transaction.amount,
    y: transaction.balance,
    color: getRandomColor(), // Asignar un color aleatorio a cada punto
  }));

  const options = {
    chart: {
      type: "scatter",
    },
    title: {
      text: "Relationship between Transaction Amount and Balance",
    },
    series: [
      {
        name: "Data",
        data: data,
      },
    ],
    xAxis: {
      title: {
        text: "Monto",
      },
    },
    yAxis: {
      title: {
        text: "Balance",
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TransactionScatterPlot;
