total=0;
function admission(age,member){
var result=0;
if (age=='Adult'&& member=='Member')
result=7.50;
else if(age=="Adult"&& member=="Nonmember")
result=9.50;
else if(age=='Youth'&& member=="Member")
result=5.50;
else if (age=="Youth"&& member=="Nonmember")
result=6.50;
return result;
}
function computeHandler(){

  var ageSelector, memberSelector, resultPar;
  var age, member, priceForm, textForm;

  age=$('#age option:selected').text();
  member=$('#member option:selected').text();


  formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
  price= admission(age,member);
  total=total+price;
  priceForm= formatter.format(price);
  textForm = formatter.format(total);

  ticketType=age+' '+member;

  $('#tickets tr:last').after("<tr><td>"+ticketType+"</td><td>"+ priceForm+"</td></tr>");
  $('#table').show();

  $('#result').text('Your total is '+ textForm+' dollar.');
}

function setup(){
  var computeButton;
  $('#purchase').click(computeHandler);


  $('#table').hide();


}


$(document).ready(setup);
