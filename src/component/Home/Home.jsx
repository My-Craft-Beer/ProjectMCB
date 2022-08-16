import React from 'react';
import './Home.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo1 from './BeerLogo1.png';
import logo2 from './BeerLogo2.png';
import logo3 from './BeerLogo3.png';
import logo4 from './BeerLogo4.png';
import logo5 from './BeerLogo5.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function Home() {

  const LogoArray = [logo1, logo2, logo3, logo4, logo5];
  const RandomLogo = Math.floor(Math.random()*LogoArray.length);
  const LogoImg = LogoArray[RandomLogo];
  const Logo = styled.div`
    backgournd-imgage: url(${LogoImg});
    padding: 0px;
    width: 80px;
    height: 80px;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontWeight: 700
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12
    }
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.action.hover
    // },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));
  
  function createData(name, location, title, date ) {
    return { name, location, title, date };
  }
  
  const rows = [
    createData("1", "서울", "29일 7시 익선동", "2022.08.19"),
    createData("2", "부산", "30일 보실분", "2022.08.19"),
    createData("3", "대구", "22일 갑니다~", "2022.08.18")
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidersToShow: 4,
    slidersToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  }

  const BannerImg = styled.img`
    width: 355px;
    height: 224px;
    margin: 0 auto;
  `;

  return (
    <>
      <div><img className='logo' src="img/HomeLogo.png" alt="logo" width="141px" height="105px" /></div>
      <span className='recommendTitle'>Recommend</span>
      <div className='recommendContainer'>
        <div><img src="img/BeerLogo1.png" alt="logo"/></div>
        <div><img src="img/BeerLogo2.png" alt="logo"/></div>
        <div><img src="img/BeerLogo3.png" alt="logo"/></div>
      </div>

      <TableContainer className="tableContainer" component={Paper} sx={{maxWidth:360}}>
        <Table sx={{ minWidth: 360, maxWidth: 360}} size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="tableTitle" colSpan={3} >
                <span>소모임 최신글</span>
              </StyledTableCell>
              <StyledTableCell className="tableTitle" align="right">
                <span><Link to="/">more+</Link></span>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell width="30px" align="center">
                순번
              </StyledTableCell>
              <StyledTableCell width="30px" align="center">지역</StyledTableCell>
              <StyledTableCell align="center">제목</StyledTableCell>
              <StyledTableCell align="center">날짜</StyledTableCell>
            </TableRow>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.location}</StyledTableCell>
                <StyledTableCell align="center">{row.title}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>  

      <Slider className="banner" {...settings} >
        <div>
          <BannerImg src='img/EventBanner1.png' alt="banner" />
        </div>
        <div>
          <BannerImg src='img/EventBanner2.jpg' alt="banner" />
        </div>
        <div>
          <BannerImg src='img/EventBanner3.jpg' alt="banner" />
        </div>
        <div>
          <BannerImg src='img/EventBanner4.jpg' alt="banner" />
        </div>


      </Slider>
    </>
  )
}

export default Home;