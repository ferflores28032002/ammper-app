import { getRandomColor } from "@/helpers/getRandomColor";
import { useBelvoStore } from "@/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TransactionBarChart = () => {
  const transactions = useBelvoStore((state) => state.Transaction);

  // Recorrer las transacciones para obtener las categorías y montos
  const categories: string[] = [];
  const amounts: any[] = [];
  const colors: string[] = []; // Array para almacenar los colores

  transactions.forEach((transaction) => {
    if (transaction.category) {
      categories.push(transaction.category);
      amounts.push(transaction.amount);

      colors.push(getRandomColor());
    }
  });

  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Transactions by Category",
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Monto",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
      bar: {
        grouping: false,
      },
    },
    series: [
      {
        name: "Monto",
        data: amounts.map((amount, index) => ({
          y: amount,
          color: colors[index], // Asignar color a cada valor de datos
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TransactionBarChart;
