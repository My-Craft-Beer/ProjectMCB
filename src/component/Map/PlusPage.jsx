import React from 'react';
import styled from "styled-components";
import './Plus_Page.scss'

const PlusPage = () => {

    const PageDiv = styled.div`
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.4);
    position:fixed;
    top: 0;
    left: 0;
    `;

    return (
        <>
            <PlusPage>
                <div className='Main_Page'>
                    <div className='select_box'>

                    </div>
                </div>

            </PlusPage>
        </>
    );
};

export default PlusPage;