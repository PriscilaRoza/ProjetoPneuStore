import React from 'react';
import '../styles/global.css';
import * as S from '../styles/styled';
import LogoImg from '../styles/PneuStore.svg';
import Search from '../styles/search.svg';
import down from '../styles/down.svg';
import Back from '../styles/back.svg';
import User from '../styles/user.svg';


function Header() {
    return(

        <S.HeaderTop>
            <S.Back src={Back} />
            <S.Logo src={LogoImg} />
        <S.Search>
            <S.Input placeholder=" Pesquise por Marca e Medida (exemplo 205/55R16)"/>
            <S.ButtonGlass>
                <img src={Search} />
            </S.ButtonGlass>
        </S.Search>

            <S.LoginOK>
                <img src={User} alt="icone usuario" />
                    <p>Entrar</p>
            </S.LoginOK>
                <S.IconDown src={down} />
        </S.HeaderTop>
        
    
    )
}

export default Header;