const button = document.getElementById( "set-alarm" )
const output = document.getElementById( "output" );
const name = document.getElementById( "name" );
const delay = document.getElementById( "delay" );

function setAlarm(person,delay) {
    return new Promise( ( resolve) => {
        if ( delay < 0 ) {
            throw new Error(`Must be greater than zero`);
        }
        setTimeout( () => {
           resolve(`Wake up ${person}`)
        },delay)
    })
   
}
button.addEventListener( "click", async () => {
    try {
        const message = await setAlarm( name.value, delay.value );
        output.textContent = message;
    }
    catch ( error ) {
        output.textContent=`Could not setAlarm ${error}`
    }
    
})