document.getElementById("popup").addEventListener("click",mypop)
function mypop(){
    document.getElementById("search").style.display="block";
    
}
document.getElementById("close").addEventListener("click",myclose)
function myclose(){
    
    document.getElementById("search").style.display="none";



}
// 

document.getElementById("openup").addEventListener("click",mytop2)

function mytop2(){
    if(document.getElementById("roseup").style.display ==="none"){
        console.log(0)
        document.getElementById("roseup").style.display="block"
    }else{
        document.getElementById("roseup").style.display="none"
        console.log(7)
    }
}