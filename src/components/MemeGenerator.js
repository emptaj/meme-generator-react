import { useState } from "react";

const MemeGenerator = () => {
    return (
        <div className="meme-generator">
            <form className="form-generator">
                <input type="text" name="first-line"
                    defaultValue="Shut up" />
                <input type="text" name="second-line" defaultValue="and take my money" />
            </form>
            <button className="meme-generate-button">Get a new image</button>
        </div>
    );
}

export default MemeGenerator;