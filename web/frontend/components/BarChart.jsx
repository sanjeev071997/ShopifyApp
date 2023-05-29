import React from 'react'
import { Chart } from "react-google-charts";

const BarChart = () => {
    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2015", 1000, 400, 200],
        ["2016", 1170, 460, 250],
        ["2017", 660, 1120, 300],
        ["2018", 1030, 540, 350],
        ["2019", 1000, 400, 200],
        ["2020", 1170, 460, 250],
        ["2021", 660, 1120, 300],
        ["2022", 1030, 540, 350],
        ["2023", 1000, 400, 200],
    ];

    const options = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2015-2023",
        },
    };

    return (
        <>
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}

export default BarChart



