document.getElementById("loginbtn").addEventListener("click", function() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (email === '' || password === '') {
        alert("Please fill in all fields");
        return;
    }
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let foundUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });
if (foundUser) {
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        window.location.href = 'home.html';
    } else {
        alert('The email or password is incorrect. Please try again.');
    }
});