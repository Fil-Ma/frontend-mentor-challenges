import ExpenseChartBar from "@components/ExpensesChart/ExpenseChartBar";
import { ExpensesChartContainer, ExpensesChartContent } from "@components/ExpensesChart/ExpensesChart.styles";

const ExpensesChart = () => {
  return (
    <ExpensesChartContainer>
      <ExpensesChartContent>
        <header>
          My balance
        </header>
        <main>
          Spending - Last 7 days
          <ExpenseChartBar />
        </main>
      </ExpensesChartContent>
    </ExpensesChartContainer>
  )
}

export default ExpensesChart;