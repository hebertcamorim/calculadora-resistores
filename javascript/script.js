const corSelect1 = document.getElementById('band1');
const color1 = document.querySelector('.color1');

corSelect1.addEventListener('change', () => {
    const corSelecionada = corSelect1.value;

    switch (corSelecionada) {
        case 'black':
            color1.style.backgroundColor = 'black';
            strip1 = "0";
            break;
        case 'brown':
            color1.style.backgroundColor = 'brown';
             strip1 = "1";
            break;
        case 'red':
            color1.style.backgroundColor = 'red';
            strip1 = "2";
            break;
        case 'orange':
            color1.style.backgroundColor = 'orange';
            strip1 = "3";
            break;
        case 'yellow':
            color1.style.backgroundColor = 'yellow';
            strip1 = "4";
            break;
        case 'green':
            color1.style.backgroundColor = 'green';
            strip1 = "5";
            break;
        case 'blue':
            color1.style.backgroundColor = 'blue';
            strip1 = "6";
            break;
        case 'violet':
            color1.style.backgroundColor = 'violet';
            strip1 = "7";
            break;
        case 'grey':
            color1.style.backgroundColor = 'grey';
            strip1 = "8";
            break;
        case 'white':
            color1.style.backgroundColor = 'white';
            strip1 = "9";
            break;
        default:
            color1.style.backgroundColor = 'transparent';
            break;
    }
});

const corSelect2 = document.getElementById('band2');
const color2 = document.querySelector('.color2');

corSelect2.addEventListener('change', () => {
    const corSelecionada = corSelect2.value;
  
    switch (corSelecionada) {
        case 'black':
            color2.style.backgroundColor = 'black';
            strip2 = "0"; 
            break;
        case 'brown':
            color2.style.backgroundColor = 'brown';
            strip2 = "1";
            break;
        case 'red':
            color2.style.backgroundColor = 'red';
            strip2 = "2";
            break;
        case 'orange':
            color2.style.backgroundColor = 'orange';
            strip2 = "3";
            break;
        case 'yellow':
            color2.style.backgroundColor = 'yellow';
            strip2 = "4";
            break;
        case 'green':
            color2.style.backgroundColor = 'green';
            strip2 = "5";
            break;
        case 'blue':
            color2.style.backgroundColor = 'blue';
            strip2 = "6";
            break;
        case 'violet':
            color2.style.backgroundColor = 'violet';
            strip2 = "7";
            break;
        case 'grey':
            color2.style.backgroundColor = 'grey';
            strip2 = "8";
            break;
        case 'white':
            color2.style.backgroundColor = 'white';
            strip2 = "9";
            break;
        default:
            color2.style.backgroundColor = 'transparent';
        break;
    }
});

const corSelect3 = document.getElementById('band3');
const color3 = document.querySelector('.color3');

corSelect3.addEventListener('change', () => {
    const corSelecionada = corSelect3.value;
  
    switch (corSelecionada) {
        case 'black':
            color3.style.backgroundColor = 'black';
            strip3 = "0";
            break;
        case 'brown':
            color3.style.backgroundColor = 'brown';
            strip3 = "1";
            break;
        case 'red':
            color3.style.backgroundColor = 'red';
            strip3 = "2";
            break;
        case 'orange':
            color3.style.backgroundColor = 'orange';
            strip3 = "3";
            break;
        case 'yellow':
            color3.style.backgroundColor = 'yellow';
            strip3 = "4";
            break;
        case 'green':
            color3.style.backgroundColor = 'green';
            strip3 = "5";
            break;
        case 'blue':
            color3.style.backgroundColor = 'blue';
            strip3 = "6";
            break;
        case 'violet':
            color3.style.backgroundColor = 'violet';
            strip3 = "7";
            break;
        case 'grey':
            color3.style.backgroundColor = 'grey';
            strip3 = "8";
            break;
        case 'white':
            color3.style.backgroundColor = 'white';
            strip3 = "9";
            break;
        default:
            color3.style.backgroundColor = 'transparent';
            break;
    }
});

const corSelect4 = document.getElementById('band4');
const color4 = document.querySelector('.color4');

corSelect4.addEventListener('change', () => {
    const corSelecionada = corSelect4.value;
    
    switch (corSelecionada) {
        case 'black':
            color4.style.backgroundColor = 'black';
            strip4 = Math.pow(10, 0);
            break;
        case 'brown':
            color4.style.backgroundColor = 'brown';
            strip4 = Math.pow(10, 1);
            break;
        case 'red':
            color4.style.backgroundColor = 'red';
            strip4 = Math.pow(10, 2);
            break;
        case 'orange':
            color4.style.backgroundColor = 'orange';
            strip4 = Math.pow(10, 3);
            break;
        case 'yellow':
            color4.style.backgroundColor = 'yellow';
            strip4 = Math.pow(10, 4);
            break;
        case 'green':
            color4.style.backgroundColor = 'green';
            strip4 = Math.pow(10, 5);
            break;
        case 'blue':
            color4.style.backgroundColor = 'blue';
            strip4 = Math.pow(10, 6);
            break;
        case 'violet':
            color4.style.backgroundColor = 'violet';
            strip4 = Math.pow(10, 7);
            break;
        case 'grey':
            color4.style.backgroundColor = 'grey';
            strip4 = Math.pow(10, 8);
            break;
        case 'white':
            color4.style.backgroundColor = 'white';
            strip4 = Math.pow(10, 9);
            break;
        default:
            color4.style.backgroundColor = 'transparent';
            break;
    }
});

const corSelect5 = document.getElementById('band5');
const color5 = document.querySelector('.color5');

corSelect5.addEventListener('change', () => {
    const corSelecionada = corSelect5.value;
    
    switch (corSelecionada) {
        case 'brown':
            color5.style.backgroundColor = 'brown';
            strip5 = " ±1%" 
            break;
        case 'red':
            color5.style.backgroundColor = 'red';
            strip5 = " ±2%" 
            break;
        case 'orange':
            color5.style.backgroundColor = 'orange';
            strip5 = " ±3%" 
            break;
        case 'yellow':
            color5.style.backgroundColor = 'yellow';
            strip5 = " ±4%" 
            break;
        case 'green':
            color5.style.backgroundColor = 'green';
            strip5 = " ±0.5%" 
            break;
        case 'blue':
            color5.style.backgroundColor = 'blue';
            strip5 = " ±0.25%" 
            break;
        case 'violet':
            color5.style.backgroundColor = 'violet';
            strip5 = " ±0.1%" 
            break;
        case 'grey':
            color5.style.backgroundColor = 'grey';
            strip5 = " ±0.05%" 
            break;
        case 'gold':
            color5.style.backgroundColor = '#d4af37';
            strip5 = " ±5%" 
            break;
        case 'silver':
            color5.style.backgroundColor = '#c0c0c0';
            strip5 = " ±10%" 
            break;
        default:
            color5.style.backgroundColor = 'transparent';
            break;
    }
});

function calcular() {  
    let calc = (strip1 + strip2 + strip3) * strip4;
    parseInt(calc);
    
    if(calc >= 0 && calc < 10**3) {
        unit = " Ω"
    }
    else if (calc >= 10**3 && calc < 10**6) {
        calc/= 10**3;
        unit = " KΩ"
    }
    else if (calc >= 10**6 && calc < 10**9) {
        unit = " MΩ"
        calc/= 10**6;
    }
    else if (calc >= 10**9) {
        unit = " GΩ"
        calc/= 10**9;
    }
    let result = calc + `${unit} ${ strip5}`;
    
    document.querySelector('.result').innerHTML = result;

}

function limpar() {
    document.querySelector('.result').innerHTML = '';
}