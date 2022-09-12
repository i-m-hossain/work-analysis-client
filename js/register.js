const form = document.getElementById("myForm");
const registerButton = document.getElementById("registerButton");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //getting form data
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formProps),
        });
        console.log({response, status: response.status});
        //if registration is successful, user will be redirected to login page
        if(response.status === 201){
            window.location.href = '../src/login.html';
        }else{
            document.getElementById('error').textContent="server error! couldn't register"
        }
    } catch (error) {
        document.getElementById('error').textContent="server error! couldn't register"
    }
});
