import Modal from 'react-bootstrap/Modal';


export default function CanvasRefund({showRefund, handleCloseRefund}){
    return(
        <Modal 
            show={showRefund} onHide={handleCloseRefund} 
            className="canvas-wrapper" 
            aria-labelledby="contained-modal-title-vcenter"
            centered 
        >
           <div className='modal-header'>
                <div className='h7 title'>Request of refund</div>
                <span className='icon icon-close' onClick={handleCloseRefund}></span>
           </div>
           <div className='modal-body'>
                <p className='text'>Item Product Roadmap Keynote Template</p>
                <form>
                    <fieldset className='fieldset'>
                        <label className='label'>Subject</label>
                        <input type='text'/>
                    </fieldset>
                    <fieldset className='fieldset'>
                        <label className='label'>Reason</label>
                        <textarea />
                    </fieldset>
                    <button className='tf-btn w-100'>Submit</button>
                </form>
           </div>
        </Modal>
    )
}