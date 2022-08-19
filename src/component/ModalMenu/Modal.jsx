import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Modal = ({ modalClose }) => {
  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
};
    return (
        <div className="modal__container" onClick={onCloseModal}>
            <div className="modal">
                <div className='topContainer'>
                    <div className='profileContainer'>
                        <div className='profile'>
                            <img src="img/profileImg.svg" alt="profile" />
                            <Link to="/Login">Log In</Link>
                        </div>
                    </div>
                    <div className='menuContainer'>
                        <div>
                            <Link to="/"><HomeIcon fontSize='large' /></Link>
                        </div>
                        <div>
                            <Link to="/"><NotificationsIcon fontSize='large' /></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='btmContainer'>
                        <div className='navMenu'>
                            <Link to="/mypage">
                                <img id="Mypage" src="img/MypageIcon.png" alt="mypage" />
                                <div>마이페이지</div>
                            </Link>
                        </div>
                        <div className='navMenu'>
                            <Link to="/MacVigation">
                                <img id="MacVigation" src="img/MacVigationIcon.png" alt="맥Vigation" />
                                <div>맥Vigation</div>
                            </Link>
                        </div>
                    </div>
                    <div className='btmContainer'>
                        <div className='navMenu'>
                            <Link to="/MaBTI"><img id="MacBTI" src="img/MacBTIIcon.png" alt="맥BTI" /></Link>
                        </div>
                        <div className='navMenu'>
                            <Link to="/community">
                                <img id="Community" src="img/CommunityIcon.png" alt="community" />
                                <div>커뮤니티</div>
                            </Link>
                        </div>
                    </div>
                    <div className='serviceInfo'><Link to="/serviceInfo">서비스 안내</Link></div>
                </div>
            <CloseIcon fontSize='large' className="modal__button" onClick={modalClose} />
      </div>
    </div>
  );
};

export default Modal;
