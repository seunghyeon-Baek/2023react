function MainComp(props){
    return(
        <>
        <div className='container h100 primary flex-center'>메인페이지</div>
        <div className="container">
          <ul className="visualProduct">
            {
                props.viData.map(function(item, i){
                    return(
                        <>
                        <li className="visualitem">
                            <a href={`/product/${i}`}>
                                <img src={`./img/${item.img}`} alt="" />
                                <div className="bodyWrap">
                                    <h2>{item.title}</h2>              
                                    <h2>{item.content}</h2>   
                                </div>   
                             </a>        
                        </li>
                        </>
                    )
                })
            }
          </ul>
        </div>
        </>
    )
}
export default MainComp;