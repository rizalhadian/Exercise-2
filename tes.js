var calc_screen_text = "";
var calc_screen_math = "";

var calc_screen_text_arr = [];
var calc_screen_math_arr  = [];
var arr_current = 0;




function addSomething(value){
    if(value==":"){
        calc_screen_text += value;
        calc_screen_math += "/";
    }else if(value=="x"){
        calc_screen_text += value;
        calc_screen_math += "*";
    }else if(value=="."){
        if(calc_screen_text == ""){
            calc_screen_text += "0.";
            calc_screen_math += "0.";
        }else{
            calc_screen_text += value;
            calc_screen_math += value;
        }
    }else if(value=="akar"){
        calc_screen_text += "&radic;(";
        calc_screen_math += "Math.sqrt(";

    }else if(value=="pangkat"){
        calc_screen_text += "^";

    }else if(value=="pi"){
        calc_screen_text += "&Pi;";
        calc_screen_math += Math.PI;

    }else if(value=="sin"){
        calc_screen_text += "sin(";
        calc_screen_math += "Math.sin(";

    }else if(value=="cos"){
        calc_screen_text += "cos(";
        calc_screen_math += "Math.cos(";

    }else if(value=="tan"){
        calc_screen_text += "tan(";
        calc_screen_math += "Math.tan(";

    }else if(value=="log"){
        calc_screen_text += "log(";
        calc_screen_math += "Math.log(";

    }else if(value=="<<"){
        console.log('========= History ========');
        arr_current--;
        console.log("Arr ("+(calc_screen_text_arr.length-1)+"+"+arr_current+")");        
        console.log('==========================');
        calc_screen_text = calc_screen_text_arr[(calc_screen_text_arr.length-1)+arr_current];
        calc_screen_math = calc_screen_math_arr[(calc_screen_math_arr.length-1)+arr_current];

    }else if(value==">>"){
        console.log('========= History ========');
        arr_current++;
        console.log("Arr ("+(calc_screen_text_arr.length-1)+"+"+arr_current+")");
        console.log('==========================');
        calc_screen_text = calc_screen_text_arr[(calc_screen_text_arr.length-1)+arr_current];
        calc_screen_math = calc_screen_math_arr[(calc_screen_math_arr.length-1)+arr_current];

    }else{
        calc_screen_text += value;
        calc_screen_math += value;
    }


    document.getElementById('calc_screen_text').innerHTML = calc_screen_text;
    console.log('========= Math ========');
    console.log('String Text = '+calc_screen_text);
    console.log('Math Text = '+calc_screen_math);
    console.log('=======================');
    
    if(value!="<<" && value!=">>"){
        calc_screen_text_arr.push(calc_screen_text);
        calc_screen_math_arr.push(calc_screen_math);
    }
    

    console.log(calc_screen_text_arr);
}

function hasil(){
    if(eval(calc_screen_math) == 0){
        calc_screen_text = "";
        calc_screen_math = "";        
    }else{
        calc_screen_text = eval(calc_screen_math);
        calc_screen_math = eval(calc_screen_math);
    }
    
    document.getElementById('calc_screen_text').innerHTML = eval(calc_screen_math);
    console.log('========= Hasil =======');
    console.log(eval(calc_screen_math));
    console.log('=======================');

    calc_screen_text_arr = [];
    calc_screen_math_arr = [];
    arr_count = 0;
}

function hapusSemua(){
    calc_screen_text = "";
    calc_screen_math = "";
    document.getElementById('calc_screen_text').innerHTML = 0;
    console.log('=======================');
    console.log('========= Hapus =======');
    console.log('=======================');

    calc_screen_text_arr = [];
    calc_screen_math_arr = [];
    arr_current = 0;
}
