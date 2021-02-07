import React from "react";
import "../../index.css";
import Card from "./Card"
import ImgCard from "./ImgCard"
import Img1 from "../../IMG/Img.jpg"

import Mentor1 from "../../IMG/woman1.jpg"
import Mentor2 from "../../IMG/woman2.jpg"
import Mentor3 from "../../IMG/woman3.jpg"
import Mentor4 from "../../IMG/woman4.jpg"
import Mentor5 from "../../IMG/woman5.jpg"
import Mentor6 from "../../IMG/woman6.jpg"

import portifolio from "../../IMG/portifolio.svg"


const listOfContents = [

    {
        className: 'section',
        img: Img1,
        title: 'Sobre a empresa',
        description: `Pellentesque nibh tortor, 
            sagittis id congue non, pulvinar vitae felis. Etiam elit ligula,
            aliquam eu varius et, accumsan sit amet nunc. Phasellus convallis, massa`,
    },

    {
        className: 'section bg-grey',
        img: Img1,
        title: 'Nossa missão',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Sed vel arcu in turpis tempor dictum. Sed sollicitudin 
            ex nec justo placerat, sit amet varius nunc feugiat.`,
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
        img: portifolio,
        name: "Primeiro contato com a área",
        description: "Se você está em busca de um primeiro emprego ou passando por uma mudança de carreira oferecemos diversas dicas para que você possa conhecer e começar nessa profissão.",
    },


    {
        img: portifolio,
        name: "Rede de contatos",
        description: "Sabemos como ter um network forte é essencial! Entre em contato com diversos profissionais da área e troque experiências!",
    },

    
    {
        img: portifolio,
        name: "Produção de portifólio",
        description: "Juntamente com empresas parceiras oferecemos uma sério de projetos para que você possa construir seu portifólio.",
    },

    {
        img: portifolio,
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