import HeaderImage from '../assets/quiz-logo.png';

export default function Header(){
    return (
        <header>
            <img src={HeaderImage} alt="logo image"/>
            <h1>Tech Foundations Challenge</h1>
        </header>
    )
}