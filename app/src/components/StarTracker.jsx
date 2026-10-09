import star from "../assets/star.png"
const Stars = ({acerto, progress, setProgress}) => {
    let starList = []
    for (let i = 1;i<=acerto;i++){
        starList.push(<img className="acerto" key={i} src={star}/>)
    }
    return (
        <div className="stars-box">
            {starList}
        </div>
    )

}
export default Stars;