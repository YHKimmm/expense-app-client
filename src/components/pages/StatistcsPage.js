import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { GetStatistics } from "../../services/statistitcs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="m-auto text-center max-w-xl">
            <h4 className=" text-gray-500 font-bold mt-3">Expenses per Category</h4>
            {!statistics || !statistics.length ? (
                <div className="text-center mt-3">
                    <h5 className="mt-3">
                        <Link to='/expenses' className="font-bold text-purple-400 hover:text-purple-600 uppercase">Go add your new expense!</Link>
                    </h5>
                </div>
            ) : <Doughnut data={data} />}
        </div>
    );
};

export default StatistcsPage;