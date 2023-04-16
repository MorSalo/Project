const URL = "http://localhost:3000/users"

$("#logIn").click(function (e) {
    e.preventDefault()
    logIn()
})
function logIn()
{
    const email = $("#email").val()
    const password = $("#password").val()
    const data = {
        email,
        password
    }
    $.ajax({
        type: "POST",
        url: URL + '/auth',
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (res) {
            localStorage.setItem('token', res.token);
            const {isAdmin} = res.isAdmin;
            console.log('innnnn')
            if(isAdmin){
                window.location.href = '../main/main.html';
            }
            else
            {
                window.location.href = '../main/mainUser.html';
            }
        },
        error: function (res) {
            alert(res.responseText)
        }
    });
}