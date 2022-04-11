
const MemeGenerator = () => {
    return (
        <div className="meme-generator">
            <form className="form-generator">
                <input type="text" name="first-line" defaultValue="Shut up" />
                <input type="text" name="second-line" defaultValue="and take my money" />


            </form>
        </div>
    );
}

export default MemeGenerator;