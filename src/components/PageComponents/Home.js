import styled from "styled-components";
import {useState} from "react"
import BookScroller from "../GeneralUse/BookScroller"
import Categories from '../../components/Categories';
import image1 from "../../book-images/46dfb5a6-e761-4de6-8857-657586bd75c5_1.jpg"
import image2 from "../../book-images/907f93c4-5df1-4372-8d69-8cbbe8df935c_1.jpg"
import image3 from "../../book-images/ee6a5b80-a453-44d3-a55d-11ff5430f5aa_1.jpg"
import image4 from "../../book-images/arta-negocierii-tehnicile-negociatorului-sef-fbi-invata-de-la-cel-mai-bun-cum-sa-iesi-invingator-din-orice-negociere_1_fullsize.jpg"
import image5 from "../../book-images/dd62be14-4ab8-4d6d-bcc5-20e884e262ab_1 (1).jpg"
import image6 from "../../book-images/bcd7be8b-0b40-4143-b66b-fc420cfe9e12_1.jpg"
import image7 from "../../book-images/curajul-de-a-nu-fi-pe-placul-celorlalti_1_fullsize.jpg"


//Styled elements outside of the dynamic component:
const Container= styled.div`
  background: #f2f1f7;
  width: 100%;
  height: fit-content;
  max-height: 100vh;
  margin-bottom: 30px;
  padding: 3rem 4vw;

  >h2{
    font-size: 4rem;
      color: #565656;
      margin-bottom: 3vh;
    }

  >h2:nth-child(odd){
    text-align: right;
    }


  @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
         

        >img{
          width: 10vw;
        height: 15vw;
        margin: 2vw;
        border-radius: 15px;
        box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
        }
        >h2{
            width: 100%;
            margin-bottom: 5vh;
            height: fit-content;
          }
      }

      @media (min-width: 768px) and (max-width: 1024px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
       

        >img{
          margin: 2vh;
          width: 10vw;
        height: 15vw;
        border-radius: 10px;
        }
      }

  

  
  `  
const BooksContainer1 = styled.div`
margin: auto;
display: flex;
justify-content: space-between;
width: 90vw;
height: 15vh;
margin-bottom: 30px;
margin-top: 6.5rem;
>*{
  border-radius: 10px;
}
`
const BooksContainer2 = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 90vw;
  height: 12vh;
  margin-bottom: 30px;
  >*{
    border-radius: 7px;
  }
  `
const BooksContainer3 = styled.div`
margin: auto;
display: flex;
justify-content: space-between;
width: 90vw;
height: 9vh;
margin-bottom: 30px;
>*{
  border-radius: 3px;
}
`

function Home() {
  
const [screenSize, setScreenSize] = useState(window.innerWidth)

let images1 = [image1,image2, image3]
let images2 = [image4, image5, image6, image1]
let images3 = [image7, image1, image4, image5, image6]

let images = [...images1, ...images2, ...images3]


    return (
      <>

      {screenSize<768?
      (<Container>
        <h2>Why buy books...</h2>
        <h2>When you can swap them?</h2>

        <BooksContainer1>
        {images1.map(image=>{
              return <img src={image}></img>})}
        </BooksContainer1>

        <BooksContainer2>
        {images2.map(image=>{
              return <img src={image}></img>})}
        </BooksContainer2>

        <BooksContainer3>
        {images3.map(image=>{
              return <img src={image}>
              </img>})}
        </BooksContainer3>

      </Container>):
        (
        <Container>

          <h2>Why buy books...</h2>
        <h2>When you can swap them?</h2>
          {
          images.map(image=>{
          return <img src={image}></img>})}
          </Container>)}
      <BookScroller text={<h2 style={{ color:"#565656"}}>Reccomended<br></br>for you</h2>}></BookScroller>
      <Categories></Categories>
      </>
    );
  }
  
  export default Home;