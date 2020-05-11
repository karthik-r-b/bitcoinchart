import React from 'react';
import {CardContainer, CardContentContainer, CryptoTitleContainer, PriceContainer} from './card.styles';
const Card = ({title,price}) => {
    return(
        <CardContainer>
            <CardContentContainer>
                <CryptoTitleContainer>{title}</CryptoTitleContainer>
                <PriceContainer>${price}</PriceContainer>
            </CardContentContainer>            
        </CardContainer>
    )
}

export default Card;