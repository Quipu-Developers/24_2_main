import React, { useState } from 'react';
import '../../../App.css';
import '../FriendShip/FriendShip.css';

function MT() {
    const imgs = ["/ActivityDetail-img/2023/MT/엠티1.jpg",
    "/ActivityDetail-img/2023/MT/엠티2.jpg",
    "/ActivityDetail-img/2023/MT/엠티3.jpg",]

    const [selectedImg, setSelectedImg] = useState(null);

    const handleImgClick = (img) => {
        setSelectedImg(img);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };

    return (
        <>
            <div className="FriendShip-container">
                {
                    imgs.map(function (img, index) {
                        return (
                            <img onClick={() => handleImgClick(img)} className="FriendShip-img" src={img}></img>
                        )
                    })
                }
            </div>

            {selectedImg && (
                <div className="img__modal--container" onClick={closeModal}>
                    <img src={selectedImg} className="img__modal" />
                </div>
            )}
        </>
    )
}

export default MT;