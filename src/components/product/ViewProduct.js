import { useParams } from "react-router-dom";

function ViewProduct(props){
    const {item} = useParams();
    return(
        <>
        <div className="container h200 bg pro flex-center">제품소개페이지</div>
        <div className="container">
            <div>
                <img src={`../img/${props.viData[item].img}`} alt=""></img>
                <h2>{props.viData[item].title}</h2>
                <p>{props.viData[item].content}</p>
            </div>
        </div>
        </>
    )
}

export default ViewProduct;