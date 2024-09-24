const createbutton = document.querySelectorAll('.button');
console.log(createbutton);
const body = document.querySelector('.body');
createbutton.forEach(function (getbutton) {
  console.log(getbutton);
  getbutton.addEventListener('click', function (eventvalue) {
    console.log(eventvalue);
    console.log(eventvalue.target);
    if(eventvalue.target.id == "grey")
    {
      body.style.backgroundColor = eventvalue.target.id
    }
  });
});
