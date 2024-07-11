import Modal from 'react-bootstrap/Modal';


export default function CanvasRating({showRating, handleCloseRating}){
    return(
        <Modal 
            show={showRating} onHide={handleCloseRating} 
            className="canvas-wrapper" 
            aria-labelledby="contained-modal-title-vcenter"
            centered 
        >
           <div className='modal-header'>
                <div className='h7 title'>Rating & Review</div>
                <span className='icon icon-close' onClick={handleCloseRating}></span>
           </div>
           <div className='modal-body'>
                <p className='text'>Strategic Roadmap PowerPoint Template</p>
                <form>
                    <fieldset className='fieldset box-field-rating'>
                        <div className='label'>Rating</div>
                        <div className='field-rating-item'>
                            <input type='radio' className="tf-check-2 sm circle" name='rating' id='rate-5'/>
                            <label className='rate-star rating-5' htmlFor='rate-5'>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                            </label>
                        </div>
                        <div className='field-rating-item'>
                            <input type='radio' className="tf-check-2 sm circle" name='rating' id='rate-4'/>
                            <label className='rate-star rating-4' htmlFor='rate-4'>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                            </label>
                        </div>
                        <div className='field-rating-item'>
                            <input type='radio' className="tf-check-2 sm circle" name='rating' id='rate-3'/>
                            <label className='rate-star rating-3' htmlFor='rate-3'>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                            </label>
                        </div>
                        <div className='field-rating-item'>
                            <input type='radio' className="tf-check-2 sm circle" name='rating' id='rate-2'/>
                            <label className='rate-star rating-2' htmlFor='rate-2'>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                            </label>
                        </div>
                        <div className='field-rating-item'>
                            <input type='radio' className="tf-check-2 sm circle" name='rating' id='rate-1'/>
                            <label className='rate-star rating-1' htmlFor='rate-1'>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                                <i className='icon icon-star-2'></i>
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className='fieldset'>
                        <label className='label'>Write a Review</label>
                        <textarea />
                    </fieldset>
                    <button className='tf-btn w-100'>Submit</button>
                </form>
           </div>
        </Modal>
    )
}