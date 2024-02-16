import { useBelvoStore } from "@/store";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TransactionTypePieChart: React.FC = () => {
  const transactions = useBelvoStore((state) => state.Transaction);

  // Contar el número de transacciones por tipo
  const transactionCounts: Record<string, number> = {};
  transactions.forEach((transaction) => {
    if (!transactionCounts[transaction.type]) {
      transactionCounts[transaction.type] = 0;
    }
    transactionCounts[transaction.type]++;
  });

  // Crear los datos para el gráfico de pastel
  const data = Object.entries(transactionCounts).map(([type, count]) => ({
    name: type,
    y: count,
  }));

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Distribution of Transaction Types",
    },
    series: [
      {
        type: "pie",
        name: "Porcentaje",
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TransactionTypePieChart;
