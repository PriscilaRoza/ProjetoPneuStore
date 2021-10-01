

import styled from 'styled-components'

export const HeaderTop = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    z-index: 999;
    height: 12vh;
    
    
    justify-content: center;
    margin: auto;
    min-width: 31.25rem;
    max-width: 100vw;
    align-items: center;
    

    /* padding-right: 100px; */
    background-color: var(--primary-color);
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        padding: 0 50px;
        min-width: 0;
        
    }
    @media (min-width: 1024px) {
        
    }

  
`;
export const Lgn = styled.div`
    font-size:15px;
    display: inline;
    /* background-color: tan; */
    margin-left: 15px;
    width: 50px;
    height: 33px;
`;
export const IconDown = styled.img`
    margin-top: 33px;
    width: 10px;
    height: 10px;
    z-index: 90;
    margin-left: -25px;
    @media (max-width: 768px) {
        display: none;
  }
    @media (min-width: 1024px) {
        
  }

`;


export const Container = styled.div`

`;


export const Logo = styled.img`
    max-width: 10.5rem;
    /* width: 100%; */

    @media (max-width: 768px) {
        margin: 0 50px;
        justify-content: center;
        /* justify-content: space-around; */
    }
    @media (min-width: 1024px) {

    }
    
    
`;


export const Search = styled.div`
    display: flex;
    position: relative;
    & input {
        @media (max-width: 768px) {
       bottom: -35px;
       position: absolute;
       /* margin: 0; */
       width: 300px;
       height: 35px;
       z-index: 90;
       margin-left:-250px;
       visibility: hidden;
       
    }
    @media (min-width: 1024px) {
        width: 490px;
        height: 35px;
        margin-left: 35px;
        padding-left: 15px;
        border-radius: 5px 0px 0px 5px;
        border: 1px solid gray;
        margin-bottom: 25px;
        margin-top: 25px;
}   
    }
    & button {
        @media (max-width: 768px) {
        opacity: none;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border:none;
        /* padding-left: 150px; */
        
    }
    @media (min-width: 1024px) {
        width: 48px;
        height: 35px;
        background-color: var(--secondary-color);
        border-radius: 5px;
        border:none;
        align-items: center;
        z-index:0;
        margin-top:25px;
        margin-right:40px;
        margin-left:-2px;
        opacity: 0.5;
    }   
    }
    img {
        /* float: right; */
        padding: 0 20px;
        
    }
`;
export const Input = styled.input`

`;
export const ButtonGlass = styled.button`
    
`;

export const Icon = styled.img`
    
    /* margin-left:50px; */
    @media (max-width: 768px) {
        visibility: hidden;
    }
    @media (min-width: 1024px) {

    }

`;
export const IconCar = styled(Icon)`
    width: 50px;
    height: 40px;
    visibility: visible;
    
`;

export const LoginOK = styled.div`
    color: #fff;
    display: flex;
    & img {
        width: 50px;
        height: 40px;
        margin-top: 0.19rem;
    }
    
    @media (max-width: 768px) {
        display:none;
        
        
    }
    @media (min-width: 1024px) {
        font-size: 1rem;
        
    }
`;
// export const Login = styled.p`
//     color: #fff;
//     @media (max-width: 768px) {
//         visibility: hidden;
//     }
//     @media (max-width: 1024px) {
//         font-size: 1rem; 
//     }
// `;
// -------------------------------------------------------

export const BarraDiv = styled.div`
    /* width: 100%; */
    height: 3.125rem;
    background-color: var(--secondary-color);
    align-items: center;
    justify-content: center;
    padding-bottom: 25px;
    padding-top:25px;    
    display: flex;
    
    @media (max-width: 768px) {
        font-size: 1.0rem;
        min-width: 0;
        justify-content: normal;
        transition: 0.2;
        padding: 0 50px;
        align-items: center;
        display: flex;
        flex-direction: row ;
        
    }
    @media (min-width: 1024px) {
        
    }
    
`;
export const TextoDiv = styled.h2`
    color: #4e008e;
    text-align: center;
    font-weight:0%;
    align-items: center;
    padding-top:7px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 768px) {
        font-size:20px;
    }
    @media (min-width: 1024px) {
  
    }
`;

export const Back =  styled.img`
    visibility: hidden;
    @media (max-width: 768px) {
        visibility: visible;
        /* margin-right: 55px; */
        float: left;
    }
    @media (min-width: 1024px) {
    }
`;