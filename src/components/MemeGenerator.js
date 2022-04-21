import { useState, useEffect } from "react";
import MemeForm from "./MemeForm";
import memesData
    from "./utils/memesData";


const MemeGenerator = () => {
    const [imageObject, setImageObject] = useState({});
    const [memeData, setMeme] = useState({
        firstLine: "",
        secondLine: ""
    })


    const getRandomImage = () => {
        const randIndex = Math.floor(Math.random() * memesData.data.memes.length)
        const randObject = memesData.data.memes[randIndex]

        setImageObject(randObject)
    }


    const handleFormChange = (event) => {
        const { name, value } = event.target

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value
            }
        })

    }

    useEffect(getRandomImage, [])

    return (
        <div className="meme-generator">
            <MemeForm
                firstLineValue={memeData.firstLine}
                secondLineValue={memeData.secondLine}
                onChangeFunc={handleFormChange} />
            <img className="meme-image"
                style={{
                    width: `${imageObject.width}px`,
                    height: `${imageObject.height}px`
                }}
                src={imageObject.url}
                alt="oups.." />
            <button className="meme-generate-button"
                onClick={getRandomImage}>Get a new image</button>
        </div>
    );
}

export default MemeGenerator;