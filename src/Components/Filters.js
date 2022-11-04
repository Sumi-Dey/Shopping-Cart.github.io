import React, { useState } from 'react'
import Rating from './Rating';

const Filters = () => {
    const [rate,setRate] = useState();
    return (
        <div className='filters'>
            <h4>Filter Products</h4>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Ascending
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Descending
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Include Out of Stock
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Fast Delivery Only
                        </label>
                </div>
                <div>
                    Ratings: <Rating rating={rate} onClick={(i)=>setRate(i+1)} style={{cursor:"pointer"}} />
                </div>
                <button type="button" style={{width:"100%"}} className="btn btn-light">Clear Filters</button>
            </div>
        </div>
    )
}

export default Filters
