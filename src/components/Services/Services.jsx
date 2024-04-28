import React from 'react';
import './services.css';
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRemoveCircle } from "react-icons/md";

const Services = () => {
  return (
    <>
        <div className='service-div'>
            <div className='row'>
                <div className='col-md-4'><img src='https://dummyimage.com/80x30/808080/000000' /></div>
                <div className='col-md-2'>SMP</div>
                <div className='col-md-2'>Hair Transplant</div>
                <div className='col-md-2'>Hair System</div>
                <div className='col-md-2'>Rogaine/Propecia</div>
            </div>
            <div className='row'>
                <div className='col-md-4'>Non surgical</div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><FaCircleCheck /></div>
            </div>
            <div className='row'>
                <div className='col-md-4'>Immediate Result</div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
            </div>
            <div className='row'>
                <div className='col-md-4'>Low Maintenance</div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
            </div>
            <div className='row'>
                <div className='col-md-4'>Affordable</div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
                <div className='col-md-2'><FaCircleCheck /></div>
            </div>
            <div className='row'>
                <div className='col-md-4'>Looks realistic</div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><FaCircleCheck /></div>
                <div className='col-md-2'><MdOutlineRemoveCircle style={{ color: 'red', fontSize: '25px' }} /></div>
            </div>
        </div>
    </>
  )
}

export default Services