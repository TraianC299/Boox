import React,{useEffect} from 'react'
import BarcodeScannerComponent from "react-webcam-barcode-scanner";


const Scanner = () => {
  //Creating a variable for isbn
    const [ ISBN, setISBN ] = React.useState();
    const variable = true

    const [object, setObject] = React.useState({
    })

    useEffect(()=>{
      console.log(ISBN)
       fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`)
       .then(response=>response.json())
       .then(data => 
           {if (ISBN) {console.log(data.items[0].volumeInfo.title)}
           else console.log("hello")});
    }, [ISBN])



    return (
        <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setISBN(result.text)
          else setISBN(false)
        }}
      />
    </>
    )
}

export default Scanner
