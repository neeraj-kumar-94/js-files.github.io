// Note :- jab bhi fat arrown ka use karte hai to pahle usko define karte hai
// 1000,2000,3000,4000 isliye kyoki ek second ke baad doosri second aati hai aur aisa hi chalta rahta hai 


const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    
    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "#f8b627"
    },1000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
    },2000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
    },3000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#d63031"
    },4000);

   }


   tempLoad();
   
   setInterval(tempLoad, 5000);

   