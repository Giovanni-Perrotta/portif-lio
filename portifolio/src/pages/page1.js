import React from "react";
import '../styles/landingPage.css';
import Capybara from '../../src/imgs/capybara.png';
import Card from '../styles/Card.js';
import Burguer from '../../src/imgs/burguer.webp';
import Coca from '../../src/imgs/coca.webp';
import Suco from '../../src/imgs/suco.webp';
import Batata from '../../src/imgs/batata.jpg';
import Nugget from '../../src/imgs/nugget.jpg';
import Onion from '../../src/imgs/onion.jpg';
import Sorvete from '../../src/imgs/sorvete.webp';
import Brownie from '../../src/imgs/brownie.webp';
import Pudim from '../../src/imgs/pudim.webp';

function LandingPage() {
    return (
        <div id="main_container">
            <header>
                <div>
                    <h1>
                        CAPY        <br />
                        BURGUER
                    </h1>

                    <img src={Capybara} />

                </div>

                <div>
                    <button>Contato</button>
                </div>


            </header>

            <main>
                <h2>LANCHES</h2>
                <section>


                    <Card
                        image={Burguer}
                        title="Capyburguer Tradicional"
                        description="Pão, hambúrguer de carne, queijo, alface, tomate, cebola e molho especial."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyburguer Vegetariano"
                        description="Pão integral, hambúrguer de grão de bico, queijo, alface, tomate, cebola roxa e molho de iogurte."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyburguer Onios"
                        description="Pão, hambúrguer de carne, queijo cheddar, onions ring e molho barbecue."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyfrango Grelhado"
                        description="Pão, filé de frango grelhado, queijo, alface, tomate, picles e maionese."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyburger Picante"
                        description="Pão, hambúrguer de carne, queijo pepper jack, jalapeños, alface, tomate e maionese de pimenta."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyvara do Rio"
                        description="Pão de brioche, hambúrguer de salmão, cream cheese, rúcula, cebola roxa e molho de dill."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyburger de Cordeiro"
                        description="Pão de ciabatta, hambúrguer de cordeiro, queijo feta, alface, tomate, cebola roxa e molho tzatziki."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyburger BBQ Ranch"
                        description="Pão, hambúrguer de carne, queijo, cebola frita, alface, tomate e molho ranch."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyegg"
                        description="Pão, hambúrguer de carne, queijo, cebola frita, alface, tomate e molho ranch."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capycheddar"
                        description="Pão, hambúrguer de carne, queijo cheddar cremoso e cebola ao molho shoyu."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capysalada"
                        description="Pão, hambúrguer de carne, queijo, cebola frita, alface, tomate, pepino e picles."
                        price="R$ 25,00"
                    />
                    <Card
                        image={Burguer}
                        title="Capyvarinha (Kids)"
                        description="Pão, hambúrguer de carne, queijo, alface, tomate e maionese. Vem com um brinquedinho temático!"
                        price="R$ 25,00"
                    />
                </section>

                <h2>BEBIDAS</h2>

                <section>

                    <Card
                        image={Coca}
                        title="Refrigerantes de lata 350 ml"
                        description="Coca-cola, Guaraná Antártica, Fanta Uva e Laranja, Schweppes e Itubaína."
                        price="R$ 6,00"
                    />
                    <Card
                        image={Suco}
                        title="Sucos Naturais 1L"
                        description="Laranja, Maracujá, Morango, Limão, Amora e Abacaxi."
                        price="R$ 13,00"
                    />

                </section>
                <h2>Porções</h2>
                <section>

                    <Card
                        image={Batata}
                        title="Batata frita"
                        description="350 gramas de batata palito, acompanha maionese especial."
                        price="R$ 13,00"
                    />
                    <Card
                        image={Nugget}
                        title="Nuggets"
                        description="10 unidade de nuggets de frango empanado, acompanha molho mostarda."
                        price="R$ 13,00"
                    />
                    <Card
                        image={Onion}
                        title="Onion rings"
                        description="350 gramas de cebolas empanadas, acompanha molho barbecue."
                        price="R$ 13,00"
                    />

                </section>
                <h2>Sobremesa</h2>
                <section>

                    <Card
                        image={Sorvete}
                        title="Taça de sorvete"
                        description="3 bolas de sorvete com sabor napolitano."
                        price="R$ 13,00"
                    />
                    <Card
                        image={Brownie}
                        title="Brownie"
                        description="1 brownie com bola de sorvete sabor baunilha."
                        price="R$ 13,00"
                    />
                    <Card
                        image={Pudim}
                        title="Pudim de leite"
                        description="Um pote com nosso delicioso pudim. Especialidade da casa!"
                        price="R$ 13,00"
                    />
                </section>
            </main>

            <footer>
                <div>
                    <span>
                        Rua Bahia, 1267 - Centro    <br />
                        Paranavaí, PR
                    </span>
                </div>

                <div>
                    <h4>Contato</h4>
                    <p>
                        (44) 96257-6058     <br />
                        (11) 93464-2312
                    </p>
                </div>

                <div>
                    <h2>
                        CAPY        <br />
                        BURGUER
                    </h2>
                </div>




            </footer>


        </div>
    )
};

export default LandingPage;