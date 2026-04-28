// console.log(  +true);
// // 1   
// console.log(  +false); 
// //  0
// console.log(  +null);
// // 0
// console.log(  +0);
// // 0
// console.log(  +"");
// // 0
// console.log(  +"0");
// // 0
// console.log(  +undefined);
// // NAN
// console.log(+"hello");
// // NAN
// console.log(  +NaN);
// // NAN
// //   اذا كان اشابة يعطينا النقاه -<->
// console.log(  -true);   
// // -1
// console.log(  -false); 
// // // -0
// console.log(  -null);
// // // -0
// console.log(  -0);
// // // -0
// console.log(  -"");
// // // -0
// console.log(  -"0");
// // -0
// console.log(  -undefined);
// // NAN
// console.log(-"hello");
// // // NAN
// console.log(  -NaN);
// // // NAN
// console.log(Number("1.2 "));
// // 1.2
// console.log(parseInt("1.6 M"));
// // 1
//  console.log(parseFloat("1.6 M"));
//  a = 1.2666767;
//  console.log(a.toFixed(10));

//  console.log(Number.MAX_VALUE);
//  console.log(Number.MIN_VALUE);
//  console.log(Number.MAX_SAFE_INTEGER);
//  console.log(Number.MIN_SAFE_INTEGER);

// let a =   Number.POSITIVE_INFINITY;
// let b = Number.POSITIVE_INFINITY  ;
// console.log(a === b);
// true


//  console.log(Number.NEGATIVE_INFINITY);
//  console.log(Number.POSITIVE_INFINITY);


// let a = "ahmed";
// let b = 5;
// console.log(Number.isNaN(a + b));
// // false













// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   e.returnValue = "";
// });
window.alert("مرحبا بك في  وقع حساب معدلك الدراسي المطور من قبل AT-DEV.");
btn = document.getElementById("btn");
btn.addEventListener("click",function(){
  let var1 = window.prompt("كيمياء");
let var2 = window.prompt("فيزياء");
let var3 = window.prompt("احياء");
let var4 = window.prompt("عربي");
let var5 = window.prompt("انجليزي");
let var6 = window.prompt("حاسوب");
let var7 = window.prompt("اسلاميه");
let var8 = window.prompt("رياضيات");
let var9 = window.prompt("رياضه");
let var10 = window.prompt("فنيه");
let var11 = window.prompt("كردي");
var1 = Number(var1);
var2 = Number(var2);
var3 = Number(var3);
var4 = Number(var4);
var5 = Number(var5);
var6 = Number(var6);
var7 = Number(var7);
var8 = Number(var8);
var9 = Number(var9);
var10 = Number(var10);
var11 = Number(var11);
if( var1==null || var2==null || var3==null 
  || var4==null || var5==null || var6==null 
  || var7==null || var8==null || var9==null || var10==null || var11==null){
  window.alert("هناك قيمه فارغه");
  console.log("هناك قيمه فارغه");
  console.log(var1 , var2 , var3 , var4 , var5 , var6 , var7 , var8 , var9 , var10 , var11);
  return;
}

if( 
  var1=="" || var2=="" || var3=="" 
  || var4=="" || var5=="" || var6=="" 
  || var7=="" || var8=="" || var9=="" || var10=="" || var11==""
){
  window.alert("هناك قيمه فارغه");
  console.log("هناك قيمه فارغه");
  console.log(var1 , var2 , var3 , var4 , var5 , var6 , var7 , var8 , var9 , var10 , var11);
  return;
}


if (isNaN(var1) || isNaN(var2) || isNaN(var3) || isNaN(var4) ||
      isNaN(var5) || isNaN(var6) || isNaN(var7) || isNaN(var8) ||
      isNaN(var9) || isNaN(var10) || isNaN(var11)) {
    window.alert("ادخل الدرجات بشكل صحيح");
       console.log("ادخل الدرجات بشكل صحيح");
       console.log(var1 , var2 , var3 , var4 , var5 , var6 , var7 , var8 , var9 , var10 , var11);  
     return;
      }

let avg = (var1 + var2 + var3 
  + var4 + var5 + var6 
  + var7 + var8 + var9 
  + var10 + var11 )/11;
avg = Number(avg);
if( var1 >=75 
  && var2>=75 
  && var3>=75 
  && var4>=75 
  && var5>=75   
  &&  var6>=75 
  && var7>=75 
  && var8>=75 
  && var9>=75 
  && var10>=75 
  && var11>=75 
  && avg >=85 ){
    console.log( "%c المعدل", "font-size:40px ; color:blue; background-color:yellow; font-weight:bold;border-radius:10px; ");
  console.log(avg);
  console.log("اعفاء عام ");
  window.alert( "مبروك اعفاء عام" +
     " " 
     + "معدلك" 
     + " " 
     + avg 
     + "%" + " "
     + "درجاتك"   
     +  " "  
     +  var1 + " " + var2 
     + " " + var3 + " " + var4 
     + " " + var5 + " " + var6 + " " 
     + var7 + " " + var8 + " " 
     + var9 + " " + var10 
     + " " + var11);
}
else
{console.log( "%c المعدل", "font-size:40px ; color:blue; background-color:yellow; font-weight:bold;");

  console.log(avg);
  console.log("غير عفاء عام ");
  window.alert("للاسف  ليس لديك اعفاء عام " + " " 
    + "معدلك" 
    + " " 
    + avg + "%" +" "
    + "درجاتك"   
    +  " "  +  var1 + " " + var2 
    + " " + var3 + " " + var4 
    + " " + var5 + " " + var6 
    + " " + var7 + " " + var8 + " "
     + var9 + " " + var10 
     + " " + var11);

  }})
console.log( "%c احسب معدلك الدراسي", "font-size:40px ; color:blue; background-color:yellow; font-weight:bold;");






































// let var1 = window.prompt("كيمياء");
// let var2 = window.prompt("فيزياء");
// let var3 = window.prompt("احياء");
// let var4 = window.prompt("عربي");
// let var5 = window.prompt("انجليزي");
// let var6 = window.prompt("حاسوب");
// let var7 = window.prompt("اسلاميه");
// let var8 = window.prompt("رياضيات");
// let var9 = window.prompt("رياضه");
// let var10 = window.prompt("فنيه");
// let var11 = window.prompt("كردي");
// var1 = Number(var1);
// var2 = Number(var2);
// var3 = Number(var3);
// var4 = Number(var4);
// var5 = Number(var5);
// var6 = Number(var6);
// var7 = Number(var7);
// var8 = Number(var8);
// var9 = Number(var9);
// var10 = Number(var10);
// var11 = Number(var11);
// let avg = (var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8 + var9 + var10 + var11 )/11;
// avg = Number(avg);
// if( var1 >=75 
//   && var2>=75 
//   && var3>=75 
//   && var4>=75 
//   && var5>=75   
//   &&  var6>=75 
//   && var7>=75 
//   && var8>=75 
//   && var9>=75 
//   && var10>=75 
//   && var11>=75 
//   && avg >=85 ){
//   console.log(avg);
//   console.log("اعفاء عام ");
//   window.alert( "مبروك اعفاء عام" + " " + "معدلك"  + " " + avg + "%");
// }
// else
// {
//   console.log("غير عفاء عام ");
//   window.alert("للاسف  ليس لديك اعفاء عام " + " " + "معدلك" + " " + avg + "%");
// }