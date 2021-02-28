import React from 'react';
import Image from 'react-bootstrap/Image';

const StockList = (props) => {
    return(
        <div className="bg-light d-block border-right">
            <div className="px-4 py-5">
            <h4 className="font-weight-bold">Popular Coins</h4>
            {props.stocks.map((obj,index) => {
                //console.log("obj :: ",obj);
                return(
                    <div onClick={()=>props.onStockClick(obj)} key={index} className='mt-4 bg-white p-3 d-flex justify-content-between align-items-center cursor-pointer'>
                        <div className="left-block d-flex">
                            <Image className="icon-img" src={obj.image} width={50} height={50} />
                            <div className="ml-3">
                            <h5 className="font-weight-bold text-capitalize">{obj.id}</h5>
                            <h6 className="ctext-secondary text-uppercase" style={{lineHeight:0.5}}>{obj.symbol}</h6>
                            </div>
                        </div>
                        <h6 className="ctext-secondary">${obj.current_price.toFixed(2)}</h6>
                    </div>
                )
            }) }  
            </div>
        </div>
    )
}

export default StockList