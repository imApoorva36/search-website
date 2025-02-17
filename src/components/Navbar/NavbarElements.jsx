import styled from "styled-components";
import { Link as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "var(--dark-bg)" : "transparent")};
    box-shadow: ${({ scrollNav }) => (scrollNav ? "0px 2px 10px var(--accent-transparent)" : "none")};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1600px;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left:10px;
    font-weight: normal;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    ${({ active }) => active && "border-bottom: 3px solid var(--accent);"}
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;