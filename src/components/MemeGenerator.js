import { useState, useEffect } from "react";
import MemeForm from "./MemeForm";
import memesData from "./utils/memesData";


const MemeGenerator = () => {
    const API_LINK = "https://api.imgflip.com/get_memes"

    const [memes, setMemes] = useState([]);
    const [imageObject, setImageObject] = useState({
        url: "http://i.imgflip.com/1bij.jpg"
    });
    const [memeData, setMeme] = useState({
        topText: "",
        bottomText: ""
    })


    useEffect(() => {
        async function getMemes() {
            const response = await fetch(API_LINK).catch(error => setMemes(memesData.data.memes))
            const data = await response.json()
            setMemes(data.data.memes)
        }

        getMemes()
    }, [])

    useEffect(() => getRandomImage(), [memes])


    const getRandomImage = () => {
        const randIndex = Math.floor(Math.random() * memes.length)
        const randObject = memes[randIndex]

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

    return (
        <div className="meme-generator">
            <MemeForm
                firstLineValue={memeData.firstLine}
                secondLineValue={memeData.secondLine}
                onChangeFunc={handleFormChange} />

            <div className="meme">
                {imageObject && <img className="meme-image"
                    style={{
                        width: `${imageObject.width}px`,
                        height: `${imageObject.height}px`
                    }}
                    src={imageObject.url}
                    alt="oups.." />
                }
                <h2 className="meme-text top">{memeData.topText}</h2>
                <h2 className="meme-text bottom">{memeData.bottomText}</h2>
            </div>
            <button className="meme-generate-button"
                onClick={getRandomImage}>Get a new image</button>
        </div>
    );
}

export default MemeGenerator;