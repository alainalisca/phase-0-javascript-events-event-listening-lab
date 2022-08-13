function addingEventListener() {
    const input = document.getElementById('input');
    console.log ("TOAST" + input)
    input.addEventListener('click', function () {
        alert('I was clicked!')
    })
}

// addingEventListener(); 
