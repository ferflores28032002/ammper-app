import { useBelvoStore } from "@/store";
import { Transaction } from "@/store/interfaces/Transaction.interface";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TransactionPieChart = () => {
  const transactions = useBelvoStore((state) => state.Transaction);

  // Calcular el total gastado por cada categoría de transacción
  const categoryTotal = transactions.reduce(
    (acc: any, transaction: Transaction) => {
      if (transaction.category && transaction.amount > 0) {
        acc[transaction.category] =
          (acc[transaction.category] || 0) + transaction.amount;
      }
      return acc;
    },
    {}
  );

  // Convertir los totales de categorías en el formato adecuado para el gráfico de pastel
  const data = Object.entries(categoryTotal);

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Distribution of Expenses by Category",
    },
    series: [
      {
        name: "Monto",
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TransactionPieChart;
