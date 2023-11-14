// 컴포넌트 등록
function Modal({vContent, onClose}){
    return(
      <>
        <div className="modal">
          <div>
              <h3>제목</h3>
              <p>{vContent}</p>
          </div>
          <div className="btnWrap">
            <button onClick={onClose}>닫기</button>
          </div>
        </div>
      </>
    )
  }
  // 다른 파일에서 쓰려면 export 해야됨
export default Modal;