//configuring chart

const worker_count = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
];
const data = {
    labels: worker_count,
    datasets: [
        {
            label: "Worker count analysis",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45], //time
        },
    ],
};
const config = {
    type: "line",
    data: data,
    options: {},
};
const myChart = new Chart(
    document.getElementById("myChart"),
    config
);