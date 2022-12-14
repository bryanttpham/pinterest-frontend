import React, {useState} from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from "styled-components"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header(props) {
const [input,setInput] = useState("");
const onSearchSubmit = (e)=>
{
    e.preventDefault();
    props.onSubmit(input)
}
  return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon/>

                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Homepage</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <form>
                        <input type="test" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit} />
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconWrapper>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <FaceIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon/>
                </IconButton>
            </IconWrapper>
        </Wrapper>   

    )
}

export default Header

const Wrapper =styled.div`
    display:flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const LogoWrapper= styled.div`
    .MuiSvgIcon-root{
        color:#e60023;
        font-size: 32px;
        cursor: pointer;
    }
`

const HomeButtons = styled.div`
    display:flex;
    height:48px;
    min-width: 123px;
    align-items:center;
    justify-content:center;
    border-radius:24px;
    cursor:pointer;
`

const HomePageButton = styled(HomeButtons)`

    background-color: rgb(17,17,17);

    a{
        text-decoration:none;
        color:white;
        font-weight: 700;

    }
`

const FollowingButton = styled(HomeButtons)`

    background-color:white;
    a{
        text-decoration:none;
        font-weight:700;
        color:black;

    }

    :hover{
        background-color:#e1e1e1
    }
`
const SearchWrapper = styled.div`
    flex:1;
`

const SearchBarWrapper = styled.div`
    background-color:#efefef;
    display:flex;
    height:48px;
    width:100%;
    border-radius:50px;
    border:none;
    padding-left:10px;

    form{
        display:flex;
        flex:1;
    }

    form>input{
        background-color:transparent;
        border:none;
        width:100%;
        margin-left:5px;
        font-size:16px;
    }

    form>button{
        display:none;
    }


`
const IconWrapper = styled.div`
display:flex;
padding-left:20px;
padding-right:5px;

`

