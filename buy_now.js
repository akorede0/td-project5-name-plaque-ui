const form= document.getElementById('fm')
const msg= document.getElementById('errormessage')


const buyNow = () => {
    if(document.querySelector('.me').value == ''){
        msg.innerHTML='Please input a value, as the input box can not be empty';

    }
    if(document.querySelector('.me').value == 'Your Name'){
        msg.innerHTML='Entered name cannot be same with value name';

    }
    const que=document.querySelector('.me').value
    if(que.length > 15){
        msg.innerHTML='Value is more than required input length';

    }

}



//function reset (){
    //if(document.querySelector('.me').value == 'reset'){
        //msg.innerHTML='reset';

    //}

//}
 
    
