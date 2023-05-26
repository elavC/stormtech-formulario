let imgRelampago = document.getElementById('relampago');
let wrapper = document.getElementById('loader');
let form = document.getElementById('form');

function load() {
  imgRelampago.style.opacity = '0';
}

const loopInterval = ( callBack, numberOfLoop, delay ) => {  
  let counter = 0;
  let i = setInterval( ()=> {
      callBack([counter, numberOfLoop]);
      let result = counter += 15;

      imgRelampago.style.opacity = '1';
      
      if(result === numberOfLoop ) clearInterval(i);
      imgRelampago.style.marginLeft = `${-100 + result}%`;
      
      if(result >= 100) {
          wrapper.style.display = "none";
          form.style.display = "flex";
        }
  }, delay);
};

const runThisFunctionAsCallBack = ( x ) => console.log(x);
loopInterval( runThisFunctionAsCallBack, 120, 300 );