
let myText = document.getElementsByClassName("demo")[0]
let text = " Ekaji Onah.       ";       
let i = 0;
let speed = 150;

const cssStyles = [
    { style: 'Josefin_Sans', background: '#EE666B' }, 
    { style: 'Lora', background: '#F24F50' },
    { style: 'Dosis', background: '#101B1F' },
]




let typewrite = () => {

    
    if(i < text.length){
        myText.className = 'Josefin_Sans'
        myText.textContent += text.charAt(i) ;
        i++;
        if(i >= text.length){
            i = 0;
            myText.textContent = text.charAt(i);
            i++
            
        }
setTimeout( typewrite, speed );	 
}
}
typewrite()
