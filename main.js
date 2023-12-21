var a=parseInt(prompt("Enter the n terms of number"))
var b=0
var c=0
function naturalNumber(){
while(b<a){
    b++
    document.write( b+" ")
    c=c+b
    
}
document.write("<br>"+"The sum of Natural number upto "+a+" terms : "+c)
}
 naturalNumber()