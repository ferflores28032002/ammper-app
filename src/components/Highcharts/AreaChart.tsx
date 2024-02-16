import { getRandomColor } from "@/helpers/getRandomColor";
import { useBelvoStore } from "@/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AreaChart = () => {
  const transactions = useBelvoStore((state) => state.Transaction);

  // Convertir las fechas de las transacciones y los montos en el formato adecuado para el gráfico de área
  const data = transactions.map((transaction) => ({
    date: new Date(transaction.value_date).getTime(), // Convertir la fecha a milisegundos
    amount: transaction.amount,
    color: getRandomColor(), // Generar un color aleatorio para cada punto del área
  }));

  const options = {
    chart: {
      type: "area",
    },
    title: {
      text: "Transaction Amount Trend over Time",
    },
    xAxis: {
      type: "datetime", // Tipo de eje x para fechas
      title: {
        text: "Fecha",
      },
    },
    yAxis: {
      title: {
        text: "Monto",
      },
    },
    series: [
      {
        name: "Monto",
        data: data.map((item) => ({
          x: item.date,
          y: item.amount,
          color: item.color, // Asignar color a cada punto del área
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaChart;
