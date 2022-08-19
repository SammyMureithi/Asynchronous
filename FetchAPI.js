fetch( "" )
    .then( res => {
        if ( res.status ) {
        console.log("Fetch Done Successfully")
        }
        else {
            console.log("Fetch Failed")
        }
        return res
    } )
    .then( res => res.json() )
    .then( data => console.log( data ) )
.catch(error => console.log(error))