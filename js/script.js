



//focuses on first text field (the name text field)
$("#name").focus();


//if "other" is selected, textbox will show

$jobr=$("#title");
$("#other-title").hide();

$("#title").change(function(){
    if($(this).val()=="other"){//checks if other value is selected
        $("#other-title").show().focus();}
    else{
        $("#other-title").hide().focus();
    }
});





//tshirt info



// $("#color").append(`<option value="plz" selected>Please select a T-shirt theme</option>`);


//hides entire color category until chosen
$("#colors-js-puns").hide();


//hides all except the last value, which is the option asking for a theme
// $("#color").children().each(function(index) {
//     if(index<6){
//         $(this).hide();
//     }
// });


//when design is chosen show values that corelate
$("#design").change(function(){

    //shows color category once the design is changed
    $("#colors-js-puns").show();


    //shows js puns colors when js puns is chosen
    if($(this).val()=="js puns"){
        $("#color").children().each(function(index) {
            //selects the first
            if(index==0){
                $(this).prop('selected', true);
            }
            //shows the js puns
            if(index<3){
                $(this).show();
            }
            //hides the heart js
            else if(index>=3 && index != 6){
                $(this).hide();
            }

            else{
                $(this).hide();
            }

            //select first option

        });


    }


    //shows js heart colors when js heart is chosen
    if($(this).val()=="heart js"){
        $("#color").children().each(function(index) {
            //selects the first
            if(index==3){
                $(this).prop('selected', true);
            }
            //hides js puns
            if(index<3){
                $(this).hide();
            }
            //shows heart js
            else if(index>=3 && index != 6){
                $(this).show();
            }
            //hides js puns
            else{
                $(this).hide();
            }

        });


    }

});


//activities section

//total $ spent
var tot=0;
var cnt=0;

$('input[type="checkbox"]').click(function(){
    //if selected
    if($(this).prop("checked")==true){
        //tallies the values for each value bought
        if($(this).prop("name")=="all"){
            tot+=200;
        
        }
        if($(this).prop("name")=="js-frameworks"){
            tot+=100;
            //crosses out other values that overlap
            $("input[name='express']").attr("disabled", true);
            $("input[name='express']").parent().css("text-decoration", "line-through");
        }
        if($(this).prop("name")=="js-libs"){
            tot+=100;
            //crosses out other values that overlap
            $("input[name='node']").attr("disabled", true);
            $("input[name='node']").parent().css("text-decoration", "line-through");
        }
        if($(this).prop("name")=="express"){
            tot+=100;
            //crosses out other values that overlap
            $("input[name='js-frameworks']").attr("disabled", true);
            $("input[name='js-frameworks']").parent().css("text-decoration", "line-through");
        }
        if($(this).prop("name")=="node"){
            tot+=100;
            //crosses out other values that overlap
            $("input[name='js-libs']").attr("disabled", true);
            $("input[name='js-libs']").parent().css("text-decoration", "line-through");
        }
        if($(this).prop("name")=="build-tools"){
            tot+=100;
        }
        if($(this).prop("name")=="npm"){
            tot+=100;
        }

    }

    //if not selected
    if($(this).prop("checked")==false){
        //tallies the values for each value bought
        if($(this).prop("name")=="all"){
            tot-=200;
        }
        if($(this).prop("name")=="js-frameworks"){
            tot-=100;
            //uncrosses out other values that overlap
            $("input[name='express']").attr("disabled", false);
            $("input[name='express']").parent().css("text-decoration", "");
        }
        if($(this).prop("name")=="js-libs"){
            tot-=100;
            //uncrosses out other values that overlap
            $("input[name='node']").attr("disabled", false);
            $("input[name='node']").parent().css("text-decoration", "");
        }
        if($(this).prop("name")=="express"){
            tot-=100;
            //uncrosses out other values that overlap
            $("input[name='js-frameworks']").attr("disabled", false);
            $("input[name='js-frameworks']").parent().css("text-decoration", "");
        }
        if($(this).prop("name")=="node"){
            tot-=100;
            //uncrosses out other values that overlap
            $("input[name='js-libs']").attr("disabled", false);
            $("input[name='js-libs']").parent().css("text-decoration", "");
            
        }
        if($(this).prop("name")=="build-tools"){
            tot-=100;
        }
        if($(this).prop("name")=="npm"){
            tot-=100;
        }

    }
    cnt++;
    $(".activities").after(`<p class=runningtotal${cnt}>${tot}</p>`);
     var tots= "." + "runningtotal" + (cnt-1);
     $(tots).hide();

});


//payment info

//by default have credit card show
$("#paypal").hide();
$("#bitcoin").hide();
$("#payment").children().each(function(index){
    if(index==1){
        $(this).prop('selected', true);
    }


});

//when payment is changed
$("#payment").change(function(){

    //if it is credit card, hide the other two
    if($("#payment option:selected").val()=="Credit Card"){
        $("#paypal").hide();
        $("#bitcoin").hide();
        $("#credit-card").show();

    }

    //if it is paypal, hide the other two
    if($("#payment option:selected").val()=="PayPal"){
        $("#paypal").show();
        $("#bitcoin").hide();
        $("#credit-card").hide();

    }

    //if it is bitcoin, hide the other two
    if($("#payment option:selected").val()=="Bitcoin"){
        $("#paypal").hide();
        $("#bitcoin").show();
        $("#credit-card").hide();

    }

});




//form validation

//variables
var finform=false;
var subname=false;
var submail=false;
var subbox=false;
var subcard= false;
var subcode=false;
var subcvv=false;

//functions

//email format
function isValidEmail(email) {

    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

//credit card format
function isValidCC(email) {

    return /\b\d{13,16}\b/g.test(email);
}

//zip format
function isValidZip(zip) {

    return /\d{5}/g.test(zip);
}

//CVV format
function isValidCVV(cvv) {

    return /\b\d{3}\b/g.test(cvv);
}




//name validation
$("#name").change(function(){
    //checks if name is filled
    if($(this).val()==""){
        subname=false;
    }
    else{
        subname=true;
    }
});

//email validation
$("#mail").change(function(){
    //checks if email format is correct
    if(isValidEmail($(this).val())){
        submail=true;
    }
    else{
        submail=false;
    }
});

//register validation
$('input[type=checkbox]').change(function(){
    //checks if something has been bought
    if(tot==0){
        subbox=false;
    }
    else{
        subbox=true;
    }

});

//cc # validation
$("#cc-num").change(function(){
    if($('#payment option[value="Credit Card"]').prop('selected')==true){
        //checks if formatting is correct
        if(isValidCC($("#cc-num").val())==true){
            subcard==true;
        }
        else{
            subcard=false;

        }
    }

});

//cc zip code validation
$("#zip").change(function(){
    if($('#payment option[value="Credit Card"]').prop('selected')==true){
        //checks if formatting is correct
        if(isValidZip($("#zip").val())==true){
            subcode=true;
        }
        else{
            subcode=false;
        }
    }

});

//cc zip code validation
$("#cvv").change(function(){
    if($('#payment option[value="Credit Card"]').prop('selected')==true){
        if(isValidCVV($("#cvv").val())==true){
            subcvv=true;
        }
        else{
            subcvv=false;
        }
    }

});


$("button").on("click", function(){
    //if paying by card
    if($('#payment option[value="Credit Card"]').prop('selected')==true){
        //if 
        if(subname &&
            submail &&
            subbox &&
            subcard &&
            subcode &&
            subcvv){

            finform=true;
        }
        
    }
    //if paying in other form
    else if(subname && submail && subbox){
        finform=true;
    }

    //prevents form from working if needed areas are not filled
    if(finform==false){
        event.preventDefault();
    }

    //adds red border if not filled
    if(subname==false){
        $("#name").css("border-color", "red");
    }
    else{
        $("#name").css("border-color", "");
    }

    //adds red border if not filled
    if(submail==false){
        $("#mail").css("border-color", "red");
    }
    else{
        $("#mail").css("border-color", "");
    }

    //adds red border if not filled
    if(subbox==false){
        $(".activities").css("border-color", "red");
    }
    else{
        $(".activities").css("border-color", "");
    }


    //info involving card
    if($('#payment option[value="Credit Card"]').prop('selected')==true){
        //adds red border if not filled
        if(subcard==false){
            $("#cc-num").css("border-color", "red");
        }
        else{
            $("#cc-num").css("border-color", "");
        }
        
        //adds red border if not filled
        if(subcode==false){
            $("#zip").css("border-color", "red");
        }
        else{
            $("#zip").css("border-color", "");
        }

        //adds red border if not filled
        if(subcvv==false){
            $("#cvv").css("border-color", "red");
        }
        else{
            $("#cvv").css("border-color", "");
        }
    }


});
