import React from "react";
import "../../index.css";
import Card from "./Card"
import CardSeveralImages from "./CardSeveralImages"
import Img1 from "../../IMG/Img.jpg"

import mentor1 from "../../IMG/woman1.jpg"
import mentor2 from "../../IMG/woman2.jpg"
import mentor3 from "../../IMG/woman3.jpg"
import mentor4 from "../../IMG/woman4.jpg"
import mentor5 from "../../IMG/woman5.jpg"
import mentor6 from "../../IMG/woman6.jpg"






const contentsObject = [

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
        title: 'Sobre a empresa 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Sed vel arcu in turpis tempor dictum. Sed sollicitudin 
            ex nec justo placerat, sit amet varius nunc feugiat.`,
    },

    {
        className: 'section',
        img: Img1,
        title: `Sed vel arcu`,
        description: `ed sodales, turpis vel ultricies varius, turpis dolor rhoncus 
            velit, sit amet elementum neque dui in lorem. Vivamus eget libero elit. 
            Ut vel volutpat lectus, et blandit est. Fusce et pharetra augue, quis 
            pellentesque libero. Sed vel arcu in turpis tempor dictum. Sed sollicitudin 
            ex nec justo placerat, sit amet varius nunc feugiat. `

    }
]

const listOfContentsWithSeveralImages = [      
    {
        className: 'sectionWithSeveralImages',
        img1: mentor1,
        name: "Ana",
        description: "algum texto",
    }
]



class Contents extends React.Component {

    render() {

        const listOfContents = contentsObject.map((item) => {
            return (
                <Card
                    title={item.title}
                    className={item.className}
                    img={item.img}
                    description={item.description}
                />
            )
        })

        const ContentsWithSeveralImages = listOfContentsWithSeveralImages.map((item)=>{
            return(
                <CardSeveralImages
                
                />
            )

        })


        return (
            <div>
                {listOfContents}
            </div>
        );


    }

}

export default Contents