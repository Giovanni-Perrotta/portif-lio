import React from "react";
import '../styles/landingPage.css';
import Capybara from '../../src/imgs/capybara.png';

function LandingPage() {
    return(
    <div id="main_container">
        <header>
        <h1>
            CAPY        <br/>
            BURGUER
        </h1>

        <img src={Capybara} />
       
        </header>

        <main>
            <section>
                <h2>LANCHES</h2>
                <ul>
                    <li>
                        <h3>Capyburguer Tradicional</h3>
                        <p>Pão, hambúrguer de carne, queijo, alface, tomate, cebola e molho especial.</p>
                    </li>
                    <li>
                        <h3>Capyburguer Vegetariano</h3>
                        <p>Pão integral, hambúrguer de grão de bico, queijo, alface, tomate, cebola roxa e molho de iogurte.</p>
                    </li>
                    <li>
                        <h3>Capyburguer Onios</h3>
                        <p>Pão, hambúrguer de carne, queijo cheddar, onions ring e molho barbecue.</p>
                    </li>
                    <li>
                        <h3>Capyfrango Grelhado</h3>
                        <p>Pão, filé de frango grelhado, queijo, alface, tomate, picles e maionese.</p>
                    </li>
                    <li>
                        <h3>Capyburger Picante</h3>
                        <p>Pão, hambúrguer de carne, queijo pepper jack, jalapeños, alface, tomate e maionese de pimenta.</p>
                    </li>
                    <li>
                        <h3>Capyvara do Rio</h3>
                        <p>Pão de brioche, hambúrguer de salmão, cream cheese, rúcula, cebola roxa e molho de dill.</p>
                    </li>
                    <li>
                        <h3>Capyburger de Cordeiro</h3>
                        <p>Pão de ciabatta, hambúrguer de cordeiro, queijo feta, alface, tomate, cebola roxa e molho tzatziki.</p>
                    </li>
                    <li>
                        <h3>Capyburger BBQ Ranch</h3>
                        <p>Pão, hambúrguer de carne, queijo, cebola frita, alface, tomate e molho ranch.</p>
                    </li>
                    <li>
                        <h3>Capyegg</h3>
                        <p>Pão, hambúrguer de carne, queijo, ovo frito, alface, tomate e maionese.</p>
                    </li>
                    <li>
                        <h3>Capyvarinha (Kids)</h3>
                        <p>Pão, hambúrguer de carne, queijo, alface, tomate e maionese. Vem com um brinquedinho temático!</p>
                    </li>
                </ul>
            </section>

            <section>
                <h2>BEBIDAS</h2>
                <ul>
                    <li>
                        <h3>Refrigerantes de lata 350 ml</h3>
                        <p>Coca-cola, Guaraná Antártica, Fanta Uva e Laranja, Schweppes e Itubaína.</p>
                    </li>
                    <li>
                        <h3>Sucos Naturais</h3>
                        <p>Laranja, Maracujá, Morango, Limão, Amora e Abacaxi.</p>
                    </li>
                </ul>
  
                <h2>Porções</h2>
                <ul>
                    <li>
                        <h3>Batata frita</h3>
                        <p>350 gramas de batata palito, acompanha maionese especial.</p>
                    </li>
                    <li>
                        <h3>Nuggets</h3>
                        <p>10 unidade de nuggets de frango empanado, acompanha molho mostarda.</p>
                    </li>
                    <li>
                        <h3>Onion rings</h3>
                        <p>350 gramas de cebolas empanadas, acompanha molho barbecue.</p>
                    </li>
                </ul>

                <h2>Sobremesa</h2>
                <ul>
                    <li>
                        <h3>Taça de sorvete</h3>
                        <p>3 bolas de sorvete com sabor napolitano.</p>
                    </li>
                    <li>
                        <h3>Brownie</h3>
                        <p>1 brownie com bola de sorvete sabor baunilha.</p>
                    </li>
                    <li>
                        <h3>Pudim de leite</h3>
                        <p>Um pote com nosso delicioso pudim. Especialidade da casa!</p>
                    </li>
                </ul>
            </section>


        </main>

        <footer>
            <div>
                <span>
                    Rua Bahia, 1267 - Centro    <br/>
                    Paranavaí, PR
                </span>
            </div>
            
            <div>
                <h4>Contato</h4>
                <p>
                    (44) 96257-6058     <br/>
                    (44) 97109-3113
                </p>
            </div>

            <div>
                <h2>
                    CAPY        <br/>
                    BURGUER
                </h2>
            </div>

            


        </footer>


    </div>
)};

export default LandingPage;