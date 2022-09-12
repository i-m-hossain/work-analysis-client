const form = document.getElementById("myForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //getting form data
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formProps),
        });
        const result = await response.json()
        console.log({result, status: response.status});
        //if registration is successful, user will be redirected to login page
        if(response.status === 200){
            localStorage.setItem('token',JSON.stringify(result.token) )
            localStorage.setItem('user',JSON.stringify({email:result.email, role: result.role}) )
            window.location.href = '../src/index.html';
        }else{
            document.getElementById('error').textContent="email or password not matched!"
        }
    } catch (error) {
        document.getElementById('error').textContent="server error! couldn't login"
    }
});
