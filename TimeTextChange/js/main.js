function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var output_txt;
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);

    switch(true){
        case (h >= 6 && h < 12):
            output_txt = "Good morning! Beautiful day, isn't it? Let's have a breakfast and start new sunny day :)";
            break;
        case (h >= 12 && h<13):
            output_txt = "Time for lunch! Let's have relax and  some snacks:)";
            break;
        case (h >= 13 && h < 16):
            output_txt = "Good afternoon! This is time for dinner :) Eat something delicious and gain energy for a busy day ;) After dinner continue to do your work! And don't forget to smile :))";
            break;
        case (h >= 16 && h < 23):
            output_txt = "I think, you've done with all your work! Let's rest and do what you love. Maybe watch a movie ? :) What do you prefer ? Suggest a creative idea :)";
            break;
        default:
            output_txt = "Are you still awake ? It's time for bed. Sweet dreams, good night :3 ";

        
    }

    document.getElementById('current-time-caption').innerHTML = output_txt;

    // if (h >= 6 && h < 12) {
    //     output_txt = "Good morning! Beautiful day, isn't it? Let's have a breakfast and start new sunny day :)";
    //     console.log(1)
    // } else if (h >= 12 && h<13){
    //     console.log(2)
    //     output_txt = "Time for lunch! Let's have relax and  some snacks:)";
    // }else if ( h >= 13 && h < 16) {
    //     output_txt = "Good afternoon! This is time for dinner :) Eat something delicious and gain energy for a busy day ;) After dinner continue to do your work! And don't forget to smile :))";
    // }else if ( h >= 16 && h < 23 ){
    //     console.log(3)
    //     output_txt = "I think, you've done with all your work! Let's rest and do what you love. Maybe watch a movie ? :) What do you prefer ? Suggest a creative idea :)";
    // }
    // else {
    //     output_txt = "Are you still awake ? It's time for bed. Sweet dreams, good night :3 ";
    // }
    // document.getElementById('current-time-caption').innerHTML = output_txt;

}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}


function myTime() {
    date_value = document.getElementById("my_time").value;   //my time value
    var str = date_value.toString();
    var htv = str.substring(0,2);
    console.log(htv)
    var my_time_output;

    switch(true){
        case (htv >= 6 && htv < 12):
            my_time_output = "Good morning! Beautiful day, isn't it? Let's have a breakfast and start new sunny day :)";
            break;
        case (htv >= 12 && htv <13):
            my_time_output = "Time for lunch! Let's have relax and  some snacks:)";
            break;
        case (htv >= 13 && htv < 16):
            my_time_output = "Good afternoon! This is time for dinner :) Eat something delicious and gain energy for a busy day ;) After dinner continue to do your work! And don't forget to smile :))";
            break;
        case (htv >= 16 && htv < 23):
            my_time_output = "I think, you've done with all your work! Let's rest and do what you love. Maybe watch a movie ? :) What do you prefer ? Suggest a creative idea :)";
            break;
        default:
            my_time_output = "Are you still awake ? It's time for bed. Sweet dreams, good night :3 ";  
    }

    document.getElementById('my-time-print').innerHTML = my_time_output;

    // if (htv >= 6 && htv < 12) {
    //     my_time_output = "Good morning! Beautiful day, isn't it? Let's have a breakfast and start new sunny day :)";
       
    // } else if (htv >= 12 && htv<13){
 
    //     my_time_output = "Time for lunch! Let's have relax and  some snacks:)";
    // }else if ( htv >= 13 && htv < 16) {
    //     my_time_output = "Good afternoon! This is time for dinner :) Eat something delicious and gain energy for a busy day ;) After dinner continue to do your work! And don't forget to smile :))";
    // }else if ( htv >= 16 && htv < 23 ){
    //     my_time_output = "I think, you've done with all your work! Let's rest and do what you love. Maybe watch a movie ? :) What do you prefer ? Suggest a creative idea :)";
    // }
    // else if (htv == "") {
    //     my_time_output = "Please type time... :/";
    // }
    // else {
    //     my_time_output = "Are you still awake ? It's time for bed. Wish you sweet dreams, good night :3 ";
    // }
    
}


    