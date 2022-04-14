import { useState, useEffect } from "react";
import memesData
    from "./utils/memesData";
const MemeGenerator = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [imageWidth, setImageWidth] = useState(null);
    const [imageHeight, setImageHeight] = useState(null);


    const getRandomImageUrl = () => {
        const urls = memesData.data.memes
        const randIndex = Math.floor(Math.random() * urls.length)
        const randomUrl = urls[randIndex]
        setImageWidth(randomUrl.width)
        setImageHeight(randomUrl.height)
        setImageUrl(randomUrl.url)
    }

    useEffect(getRandomImageUrl, [])

    return (
        <div className="meme-generator">
            <form className="form-generator">
                <input type="text" name="first-line"
                    defaultValue="Shut up" />
                <input type="text" name="second-line" defaultValue="and take my money" />
            </form>
            <img className="meme-image"
                style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`
                }}
                src={imageUrl} />
            <button className="meme-generate-button"
                onClick={getRandomImageUrl}>Get a new image</button>
        </div>
    );
}

export default MemeGenerator;