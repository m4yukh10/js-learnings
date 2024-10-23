let x = 30;

function display(num){
    console.log(num);
}

function decrement(){
    x = x - 1;
    const hello = display(x);
    return hello;
}

if (x != 0){
    setInterval(decrement, 3*1000);
}
