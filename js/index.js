//uploading data
async function photoUpload(event) {
    event.preventDefault()
    var input = document.querySelector('input[type="file"]')

    var data = new FormData()
    data.append('file', input.files[0])
    console.log(data)
    try {
        const response = await fetch("http://localhost:5000/upload-data", {
            method: "POST",
            body: data,
        });
        const result = await response.json()
        console.log({result, status: response.status});
        alert('file is uploaded')
    } catch (error) {
        console.log(error);
    }
    
};



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