import { useState } from 'react';
import './Home.css'
import iconList from '../assets/icon-list.svg';
import illustrationDesktop from '../assets/illustration-sign-up-desktop.svg';
import successImg from '../assets/icon-success.svg';



const Home = () => {
    const [inputText, setInputText] = useState('');
    const [emptyInputTxt, setemptyInputTxt] = useState('');
    const [isVisible, setIsVisible] = useState(true);


    const handleEmail = () => {
        inputText == '' ? (setemptyInputTxt('Insira um valor válido')) : (setIsVisible(false));
    }

    const finishSubscritpionProccess = () => {
        setIsVisible(true);
        setInputText('');
        setemptyInputTxt('');
    }


    return (
        <div>

            {

                isVisible ? (
                    <div className='homePage'>
                        <div className='mainTxt'>
                            <h1>Mantenha-se atualizado!</h1>
                            <p>Join 60.000+ product managers receiving monthly updates on:</p>

                            <ul>
                                <li>
                                    <img src={iconList} alt="checked icon" className='listICon' />
                                    Product discovery and building what matters
                                </li>
                                <li>
                                    <img src={iconList} alt="checked icon" className='listICon' />
                                    Measuring to ensure updates are a sucecess
                                </li>
                                <li>
                                    <img src={iconList} alt="checked icon" className='listICon' />
                                    And much more!
                                </li>
                            </ul>
                            <form>
                                <label>
                                    <span>Email adress</span>
                                    <span >{emptyInputTxt}</span>
                                    <input type='email' placeholder='email@company.com' className='inputText' required onChange={(e) => setInputText(e.target.value)} />
                                    <button onClick={handleEmail} type="submit"> Inscreva-se</button>
                                </label>
                            </form>
                        </div>



                        <div className='illustrationDesktop'> </div>


                    </div >) : (<div className="thankYouDiv">



                        <div>
                            <img src={successImg} alt="" />
                            <h1>Obrigado por se inscrever!</h1>
                            <p>Um email de confirmação foi enviado para {inputText}. Por favor, abra e clique no botão no corpo do email para confirmar sua inscrição.</p>
                            <button onClick={finishSubscritpionProccess} className='dismissBtn'> Dispensar mensagem </button>
                        </div>
                    </div>)}


        </div>




    )
}

export default Home