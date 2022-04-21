
const MemeForm = (props) => {
    const { firstLineValue, secondLineValue, onChangeFunc } = props

    return (
        <form className="form-generator">
            <input
                type="text"
                name="firstLine"
                value={firstLineValue}
                onChange={event => onChangeFunc(event)} />

            <input type="text"
                name="secondLine"
                value={secondLineValue}
                onChange={event => onChangeFunc(event)}
            />
        </form>
    )
}

export default MemeForm