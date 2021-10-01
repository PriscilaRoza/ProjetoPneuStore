import * as S from '../styles/styled';
import Cart from '../assets/images/cart.svg';

function Banner() {
    return(
        <S.BarraDiv>
            <S.IconCar src={Cart} />
            <S.TextoDiv>Meu Carrinho de Compras</S.TextoDiv>
        </S.BarraDiv>
    )

}
export default Banner;