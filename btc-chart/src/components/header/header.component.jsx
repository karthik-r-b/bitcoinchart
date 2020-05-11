import React from 'react';
import  {HeaderContainer, TitleContainer} from './header.styles';

const Header = ({title}) => {
    return(
        <HeaderContainer>
            <TitleContainer>{title}</TitleContainer>
        </HeaderContainer>
    )
}

export default Header;