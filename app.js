const buttonEL = document.querySelector('.GenerateButton')

buttonEL.addEventListener('click' , () => {
    getQR()
})



const clearEL = document.querySelector('.clearButton')

clearEL.addEventListener('click' , () => {
    clearText()
})

async function getQR(){
    
    
    try{
        const inputEL = document.querySelector('input').value;
        if (inputEL.trim() === ""){
            alert ("Please enter text or a link")
            return;
        }
      
        const response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example');
        const blob = await response.blob();
        const imgURL = URL.createObjectURL(blob);



        const img = document.createElement("img")
        img.src = imgURL
        

        const divEL = document.querySelector('.QR');
        divEL.appendChild(img)
    }
    catch(error){
        console.error("Error fetching image:", error);
        
    }



}

function clearText(){
    return (document.querySelector('inputEL').reset());
}
