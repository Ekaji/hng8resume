let greet = 0;
const updateGreeting = () => {
    const helloArray = [
        {English : 'Hello'}, 
        {Yoruba : 'Bao ni'}, 
        {Igbo : 'Kedu'}, 
        {Nigerian_Pidgin : 'How fa'}, 
        {Hausa : 'Sannu'}
    ];

    const currentGreeting = document.createTextNode(Object.values(helloArray[greet]));
    const emptyGreeting = document.createTextNode('');
    const greeting = document.querySelector('.greeting');
    const newDiv = document.createElement("DIV");
                newDiv.classList.add("animate__animated", "animate__fadeIn");
                newDiv.appendChild(currentGreeting);
                greeting.appendChild(newDiv);

    setTimeout(() => {
        if (greet == helloArray.length -1) greet = 0;
            greet++;
    const removeGreeting = greeting.replaceChild(emptyGreeting, newDiv);
    updateGreeting();
    },4000);
};
updateGreeting();