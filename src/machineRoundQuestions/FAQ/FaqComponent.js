import React,{useState} from 'react';
import './styles.css'
let faqs = [
    {
        id: 1,
        title: "About you career",
        description: "Hier findest du alle offenen Jobausschreibungen von ABOUT YOU.Starte jetzt mit einer Karriere bei ABOUT YOU durch."
    },
    {
        id: 2,
        title: "Job Openning",
        description: "Hier findest du alle offenen Jobausschreibungen von ABOUT YOU.Starte jetzt mit einer Karriere bei ABOUT YOU durch."
    },
    {
        id: 3,
        title: "Contact",
        description: "Hier findest du alle offenen Jobausschreibungen von ABOUT YOU.Starte jetzt mit einer Karriere bei ABOUT YOU durch."
    },
]


export const FaqComponent = () => {

    const [selected,setSelected] = useState({});

    const handleToggle = (index)=> {
        setSelected(index);
    }

    return (
        <div className='faq-container'>
            {faqs.map((item, index) => (
                <div className='faq-question'>
                    <div className='faq-heading'  onClick={() => handleToggle(index,)}>
                        <div className='title-text'>
                            {item.title}
                        </div>
                        <div className='icon'>
                            {index === selected ? "-" : "+"}
                        </div>

                    </div>
                    <div className={`faq-description ${index === selected ? "show" : "hidden"}`}>
                        {item.description}
                    </div>

                </div>
            ))}
        </div>
    )
}