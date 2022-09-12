const logoutButton = document.getElementById("logout")//uploading data
async function fileUpload(event) {
    event.preventDefault();
    var input = document.querySelector('input[type="file"]');
    var data = new FormData();
    data.append("file", input.files[0]);

    if (input.files[0]) {
        try {
            const response = await fetch("http://localhost:5000/upload-data", {
                method: "POST",
                body: data,
            });
            const result = await response.json();
            console.log({ result, status: response.status });
            alert("file is uploaded");
            if(response.status === 200){
                setTimeout(()=>{
                    location.reload()
                },65000)
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("please select a file");
    }
}
async function fetchWorkerCount(){
    try{
        const result = await fetch("http://localhost:5000/worker-count")
        return await result.json()
    }catch(err){
        console.log(err);
        return err
    }
}
let time=[]
let worker_count=[]
const data = {
    labels: time,
    datasets: [
        {
            label: "Worker count analysis",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: worker_count, //time
        },
    ],
};
const config = {
    type: "line",
    data: data,
    options: {},
};
fetchWorkerCount().then(res=> {
    console.log("graph data",res);
    res.workers.forEach(item=>{
        worker_count.push(item.worker_count)
        time.push(item.datetime.hour)
    })
    new Chart(document.getElementById("myChart"), config);

})

document.getElementById("logout").addEventListener('click',()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    location.replace("../src/login.html");
})




