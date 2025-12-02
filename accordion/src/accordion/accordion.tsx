import { useState } from "react";
import "./accordion.css";

function Accordion() {

    const accordionData = [
        {
            title: "Accordion Button 1",
            content: "Accordion Content 1"
        },
        {
            title: "Accordion Button 2",
            content: "Accordion Content 2"
        },
        {
            title: "Accordion Button 3",
            content: "Accordion Content 3"
        },
        {
            title: "Accordion Button 4",
            content: "Accordion Content 4"
        },
        {
            title: "Accordion Button 5",
            content: "Accordion Content 5"
        }
    ];

    const [accordionState, setAccordionState] = useState(null);

    const accordionHandler = (index: any) => {
        console.log(index);

        setAccordionState(prevIndex => (prevIndex === index ? null : index));

        // setAccordionState(accordionState === index ? null : index);

        // if(accordionState === index) {
        //     return setAccordionState(null);
        // } else {
        //     setAccordionState(index);
        //     return;
        // }
    }

    return (
        <>
        {accordionData.map((item, index) => (
            <div key={index}>
            <button className="accordion-button" onClick={() => accordionHandler(index)}>{item.title}</button>
            {accordionState === index && (
                <div className="accordion-content">{item.content}</div>
            )}
            </div>
        ))}
        </>
    )
}

export default Accordion;