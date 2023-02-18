import styled from 'styled-components';
import DisplayLottie from '../../components/DisplayLottie';

const HeroStyled = styled.div`
  color: #fff;
  background-color: #14c38e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(30,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2300FFAB'/%3E%3Cstop offset='1' stop-color='%2300FFAB'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(7,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2300FFAB'/%3E%3Cstop offset='1' stop-color='%2300FFAB'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='8.91'%3E%3Cpath transform='translate(-148.4 16) rotate(5.199999999999999 1409 581) scale(0.9690880000000001)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='2.9700000000000006' transform='translate(-152 104) rotate(15.200000000000001 800 450) scale(1.019424)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(42.4 -168) rotate(136 401 736) scale(1.019424)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='2.7'%3E%3Cpath transform='translate(624 -9.600000000000001) rotate(2.4000000000000004 150 345) scale(0.9576960000000001)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='5.940000000000001' transform='translate(-240 -276) rotate(144 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-444.8 131.2) rotate(24.000000000000004 1400 132) scale(0.84)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
`;

const Hero = () => {
  return (
    <>
      <HeroStyled>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center pt-5">
            <div className="col-12 col-md-7 col-sm-12">
              <h1>Aooopa! Julitos aqui!</h1>
              <p>
                Neste blog eu tenho a missão de compartilhar tudo sobre o mundo
                de desenvolvimento de software e tecnologia. Aqui você encontra
                minhas experiências e dicas sobre linguagens de programação,
                frameworks, ferramentas e técnicas para quem quer se atualizar e
                melhorar suas habilidades. Falo também sobre as tendências mais
                recentes em tecnologia e curiosidades interessantes sobre o
                mundo da programação e afins, além de informações sobre eventos
                e conferências da área.. Se você gosta de programação e quer
                expandir seus conhecimentos, vem comigo!
              </p>
            </div>
            <div className="col-12 col-md-5 col-sm-12">
              <DisplayLottie animationPath="./lottie/blog-hero.json" />
            </div>
          </div>
        </div>
      </HeroStyled>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#14C38E"
          fillOpacity="1"
          d="M0,0L34.3,10.7C68.6,21,137,43,206,69.3C274.3,96,343,128,411,128C480,128,549,96,617,101.3C685.7,107,754,149,823,160C891.4,171,960,149,1029,165.3C1097.1,181,1166,235,1234,266.7C1302.9,299,1371,309,1406,314.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
