document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector('.search-form');
    const loginForm = document.querySelector('.login-form-container');

    document.querySelector('#search-btn').addEventListener('click', function() {
        searchForm.classList.toggle('active');
    });

    document.querySelector('#login-btn').addEventListener('click', function() {
        loginForm.classList.toggle('active');
    });

    document.querySelector('#close-login-btn').addEventListener('click', function() {
        loginForm.classList.remove('active');
    });

    window.onscroll = () => {
        searchForm.classList.remove('active');

        if(window.scrollY > 80){
            document.querySelector('.header .header-2').classList.add('active');
        }else{
            document.querySelector('.header .header-2').classList.remove('active');
        }
    };

    window.onload = () => {
        if(window.scrollY > 80){
            document.querySelector('.header .header-2').classList.add('active');
        }else{
            document.querySelector('.header .header-2').classList.remove('active');
        }
    };
});
