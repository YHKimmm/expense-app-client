import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { GetStatistics } from "../services/statistitcs";
import { useEffect, useState } from "react";

const StatistcsPage = () => {
    const dispatch = useDispatch();
    const statistics = useSelector(state => state.statisticsSlice.statistics);

    const [dougnut, setDoughnut] = useState({
        labels: [],
        data: [],
    });

    console.log(statistics);
    console.log('donugh', dougnut)

    useEffect(() => {
        setDoughnut({
            labels: statistics.map((stat) => stat.key),
            data: statistics.map((stat) => stat.value),
        });
    }, [statistics]);

    useEffect(() => {
        GetStatistics(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const data = {
        labels: dougnut.labels,
        datasets: [
            {
                data: dougnut.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ]
            },
        ],
    };
    return (
        <div hidden={!statistics || !statistics.length}>
            <div className="m-auto text-center" style={{ maxWidth: '35rem', maxHeight: '35rem' }}>
                <h4 style={{ marginTop: '10px' }}>Expenses per Category</h4>
                <Doughnut data={data} />
            </div>
        </div>
    );
};

export default StatistcsPage;