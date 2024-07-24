import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory hook

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); // Get history object from react-router

    useEffect(() => {
        const status = localStorage.getItem("loginned");
        if (status === "true") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleAuth = () => {
        const newStatus = !isLoggedIn;
        setIsLoggedIn(newStatus);
        localStorage.setItem("loginned", newStatus.toString());

        // Redirect to home page after logout
        if (!newStatus) {
            navigate('/');
        }
    };

    return (
        <Nav>
            <Logo src='/images/logo.svg' alt='logo' />
           
            {isLoggedIn && (
                <Menu>
                    <StyledLink to='/home'>
                        <HomeIcon src='/images/home-icon.svg' />
                        <Text>Home</Text>
                    </StyledLink>

                    <StyledLink to='/search'>
                        <SearchIcon src='/images/search-icon.svg' />
                        <Text>Search</Text>
                    </StyledLink>

                    <StyledLink to='/watchlist'>
                        <WatchListIcon src='/images/watchlist-icon.svg' />
                        <Text>Watchlist</Text>
                    </StyledLink>

                    <StyledLink to='/originals'>
                        <OriginalsIcon src='/images/original-icon.svg' />
                        <Text>Originals</Text>
                    </StyledLink>

                    <StyledLink to='/movies'>
                        <MoviesIcon src='/images/movie-icon.svg' />
                        <Text>Movies</Text>
                    </StyledLink>

                    <StyledLink to='/series'>
                        <SeriesIcon src='/images/series-icon.svg' />
                        <Text>Series</Text>
                    </StyledLink>
                </Menu>
            )}

            {isLoggedIn ? (
                <Logout onClick={handleAuth}>Logout</Logout>
            ) : (
                <Login onClick={handleAuth}>Login</Login>
            )}
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: #090b13;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    z-index: 3;
    letter-spacing: 1.5px;
`;

const Logo = styled.img`
    width: 80px;
    margin-top: 4px;
    height: 70px;
    display: inline-block;
    padding: 0;
    margin-right: 20px;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    margin-right: auto;
    padding: 0;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: white;
    transition: all 0.2s ease-in-out;
    margin: 0px 20px;

    &:before {
        content: '';
        position: absolute;
        bottom: 3px;
        left: 5px;
        right: 2px;
        width: 97%;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.2s ease-in-out;
    }

    &:hover:before {
        transform: scaleX(1);
    }
`;

const HomeIcon = styled.img`
    width: 25px;
    margin-right: 5px;
`;

const SearchIcon = styled.img`
    width: 25px;
    margin-right: 5px;
`;

const MoviesIcon = styled.img`
    width: 25px;
    margin-right: 5px;
`;

const SeriesIcon = styled.img`
    width: 25px;
    margin-right: 5px;
`;

const OriginalsIcon = styled.img`
    width: 25px;
    margin-right: 5px;
`;

const WatchListIcon = styled.img`
    width: 25px;
    margin-right: 5px;
`;

const Text = styled.p`
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.8);
    padding: 8px 18px;
    border: 1px solid #f9f9f9;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 4px;
    transition: all ease 0.2s;
    margin-right: 20px; /* Adjust margin to separate from menu items */

    &:hover {
        color: black;
        cursor: pointer;
        background-color: white;
        border: transparent;
        text-decoration: none; /* Ensure no underline on hover */
    }
`;

const Logout = styled.a`
    background-color: rgba(0, 0, 0, 0.8);
    padding: 8px 18px;
    border: 1px solid #f9f9f9;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 4px;
    transition: all ease 0.2s;
    margin-right: 20px; /* Adjust margin to separate from menu items */

    &:hover {
        color: black;
        cursor: pointer;
        background-color: white;
        border: transparent;
        text-decoration: none; /* Ensure no underline on hover */
    }
`;
