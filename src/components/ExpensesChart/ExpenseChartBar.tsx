import colors from "@constants/colors";
import styled from "styled-components";

const {primary, neutral} = colors["expenses-chart"];

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function getHeight() {
  return Math.floor(Math.random() * 101);
}


const ExpenseChartBar = () => {
  const expenses = days.map((day) => ({
    name: day,
    active: days[new Date().getDay()] === day,
    height: getHeight(),
  }))
  return (
    <BarList>
      {expenses.map(({name, active, height}) => (
        <li key={name}>
          <Bar  $active={active} $height={height} />
          <p>{name}</p>
        </li>
          

      ))}
    </BarList>
  )
}

export default ExpenseChartBar;

const BarList = styled.ol`
height: 200px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: stretch;
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${neutral.mediumBrown};

  li {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-end;
    align-items: center;
  }

  li > p {
    font-size: 12px;
    line-height: 14px;
    margin: 0;
  }
`

const Bar = styled.div<{ $active: boolean; $height: number }>`
  background-color: ${(props) => props.$active ? primary.cyan : primary.softRed };
  height: ${(props) => props.$height}%;
  width: 36px;
  border-radius: 4px;
  `