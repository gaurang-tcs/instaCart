import React, { useState } from "react";

const GuranteeModal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div>
            {
                modal && (
                    <div className="w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-20">
                        <div className="bg-[rgba(49,49,49,0.5)] w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-20" onClick={toggleModal}></div>
                        <div className="flex-col h-[40rem] w-[30rem] bg-white z-20 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
                        </div>
                    </div>
                )
            }
            <div className="flex -ml-4 -mt-1" onClick={toggleModal}>
                <img src='https://i.postimg.cc/3RyHRysf/correct-2.jpg' alt="icon"
                    className="h-3 w-3 m-[0.1rem] mt-[0.3rem]" />
                <span className="text-sm text-sky-500 mt-[0.1rem]">100% satisfaction gurantee</span>
                <div className='text-gray-500 ml-1 mr'>&#10095;</div>
            </div>
        </div>
    )
};

export default GuranteeModal;