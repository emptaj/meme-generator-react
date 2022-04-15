import { useState, useEffect } from "react";
import memesData
    from "./utils/memesData";

const MemeGenerator = () => {
    const [imageObject, setImageObject] = useState({});

    const getRandomImage = () => {
        const urls = memesData.data.memes
        const randIndex = Math.floor(Math.random() * urls.length)
        const randObject = urls[randIndex]

        setImageObject(randObject)
    }

    useEffect(getRandomImage, [])

    return (
        <div className="meme-generator">
            <form className="form-generator">
                <input type="text" name="first-line"
                    defaultValue="Shut up" />
                <input type="text" name="second-line" defaultValue="and take my money" />
            </form>
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