
function insert(num){
  document.querySelector(".textview").value += num
  console.log(num);
  return num ;
  }
  
  function equals(){
    let a = document.querySelector('.textview').value ;

    let b = eval(a);

    document.querySelector('.textview').value = b;

    return b ;
      
  }
  
  function clean(){
    document.querySelector('.textview').value = ''
  }
  
  function back(){
  }