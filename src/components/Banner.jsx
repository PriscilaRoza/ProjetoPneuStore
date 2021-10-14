import * as S from "../styles/styled";
import Cart from "../assets/images/cart.svg";

function Banner() {
  return (
    <>
      <S.BarraDiv>
        <S.IconCar src={Cart} />
        <S.TextoDiv>Meu Carrinho de Compras</S.TextoDiv>
      </S.BarraDiv>
      <S.Banner>
        <p>
          Cansado de adiar sua troca de pneu? com a pneustore movel nós montamos
          seu pneu no conforto da sua casa!
        </p>
        <img
          alt="PneuStore Móvel"
          src="https://pneustore.com.br/medias/sys_master/images/images/hbd/h52/9044541308958/VAN-PS-MOVEL-847x597px.png"
          style={{ height: "40vh" }}
        />
      </S.Banner>
    </>
  );
}
export default Banner;
