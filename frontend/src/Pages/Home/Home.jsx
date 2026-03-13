import AmaderSeba from "./Seba/AmaderSeba.jsx"
import BrakingNews from "./BrekingNews.jsx"
import ImageSlider from './ImageSlider/ImageSlider.jsx'

export default function Home(){
  return(
    <>
      <div>
        <BrakingNews />
        <ImageSlider />
        {/*Amader seba*/}
        <AmaderSeba />
        
      </div>
    </>
    )
}



//fa-solid fa-file-pdf