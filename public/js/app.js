console.log('Client side javascript loaded!!');

const weatherForm = document.querySelector('form');
const input = document.querySelector('input');
const para = document.querySelectorAll('p');




weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    para[1].innerText = 'Loading...';
    para[2].innerText = '';

    fetch(`/weather?address=${input.value}`).then((response) => {
    response.json().then((data) => {
        if (data.error){
            para[1].innerText = data.error;
        }
        else {
            para[1].innerHTML = `<b>Location</b> : ${data.location}`;
            para[2].innerHTML = `<b>Forecast</b> : ${data.forecast}`;
           
        }
    });
});

})