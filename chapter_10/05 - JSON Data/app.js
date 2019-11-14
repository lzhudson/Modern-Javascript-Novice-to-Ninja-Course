const getTodos = (callback) =>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () =>{
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        /*  console.log(request);
            console.log(request.responseText); */
        } else if(request.readyState === 4){
            // console.log('could not fetch data');
            callback('could not fetch data', undefined);
        }
    })
    request.open('GET', 'todos.json');
    request.send();
}
console.log(1);
console.log(2);
getTodos((error, data) =>{
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
});
console.log(3);
console.log(4);
