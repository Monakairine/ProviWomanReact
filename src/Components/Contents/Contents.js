import React from "react";
import "../../index.css";
import Card from "./Card"
import ImgCard from "./ImgCard"

import imgLogo from "../../IMG/LogoEmpresa.jpeg"

import Mentor1 from "../../IMG/woman1.jpg"
import Mentor2 from "../../IMG/woman2.jpg"
import Mentor3 from "../../IMG/woman3.jpg"
import Mentor4 from "../../IMG/woman4.jpg"
import Mentor5 from "../../IMG/woman5.jpg"
import Mentor6 from "../../IMG/woman6.jpg"

import imgPortifolio from "../../IMG/portifolio.svg"
import imgNetwork from "../../IMG/social-network.svg"
import imgPrimeiroContato from "../../IMG/primeiro-contato.svg"
import imgFeedback from "../../IMG/feedback.svg"


const listOfContents = [

    {
        className: 'section',
        img: imgLogo,
        title: 'Sobre a empresa',
        description: `Somos uma empresa focada no seguimento de UX. Oferecemos uma plataforma integrada entre profissionais e empresas
        para que pessoas que desejam iniciar na área consigam ter oportunidades de projetos para criar seu portifólio. Além dos projetos, oferecemos
        dicas práticas de como melhorar seu portifólio e mentorias, além da oportunidade de você criar um network em nossa plataforma`,
    },

    {
        className: 'section bg-grey',
        img: imgLogo,
        title: 'Nossa missão',
        description: `Apoiar profissionais em início de carreira, seja em um primeiro emprego ou em uma mudança de emprego a conseguirem
                        oportunidades no mercado de trabalho na área de UX, através de auxílio para contruir portifólio, dicas práticas, feedbacks e mentorias.`,
    },
]


const listOfMentors = [
    {
        img: Mentor1,
        name: "Ana",
        description: "algum texto",
    },

    {
        img: Mentor2,
        name: "Ana",
        description: "algum texto",
    },

    {
        img: Mentor3,
        name: "Ana",
        description: "algum texto",
    },

    {
        img: Mentor4,
        name: "Ana",
        description: "algum texto",
    },
    {
        img: Mentor5,
        name: "Ana",
        description: "algum texto",
    },

    {
        img: Mentor6,
        name: "Ana",
        description: "algum texto",
    }
]

const listOfAdvantages = [

    {
        img: imgPrimeiroContato,
        name: "Primeiro contato com a área",
        description: "Se você está em busca de um primeiro emprego ou passando por uma mudança de carreira oferecemos diversas dicas para que você possa conhecer e começar nessa profissão.",
    },


    {
        img: imgNetwork,
        name: "Rede de contatos",
        description: "Sabemos como ter um network forte é essencial! Entre em contato com diversos profissionais da área e troque experiências!",
    },

    
    {
        img: imgPortifolio,
        name: "Produção de portifólio",
        description: "Juntamente com empresas parceiras oferecemos uma sério de projetos para que você possa construir seu portifólio.",
    },

    {
        img: imgFeedback,
        name: "Receba feedbacks",
        description: "Seus projetos recebem feedback das empresas para a qual você desenvolveu.",
    },
]

class Contents extends React.Component {

    render() {

        const contents = listOfContents.map((item) => {
            return (
                <Card
                    title={item.title}
                    className={item.className}
                    img={item.img}
                    description={item.description}
                />
            )
        })

        const mentors = listOfMentors.map((item) => {
            return (
                <ImgCard
                    img={item.img}
                    name={item.name}
                    description={item.description}
                />
            )
        })

        const advantages = listOfAdvantages.map((item)=>{
            return(
                <ImgCard
                img={item.img}
                name={item.name}
                description={item.description}
            />
            )
        })




        return (
            <div>
                {contents}
                <div className = "sectionAdvantages">
                    <h1> Nossos serviços </h1>
                    {advantages}
                </div>
                <div className="sectionMentoring bg-grey">
                    <h1>Conheça Algumas de Nossas Mentoras</h1>
                    {mentors}
                </div>
   
            </div>
        );
    }

}

export default Contents