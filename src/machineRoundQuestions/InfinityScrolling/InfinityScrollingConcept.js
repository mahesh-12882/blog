import React,{useEffect,useState} from "react";

export const InfinityScrollingConcept = ()=>{
    const [count,setCount] = useState(50);
    const elements = [];

    useEffect(()=>{
        let onScroll = ()=>{

            if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight){
                console.log(window.innerHeight,window.scrollY,window.document.body.offsetHeight-30)
                setCount(count+50);
            }
        }

        window.addEventListener('scroll',onScroll);

        return()=>{
            //clear event listener
            window.removeEventListener('scroll',onScroll);
        }

    },[count])



    for(let i = 0; i < count; i++) {
        elements.push(<div key={i}>{i + 1}</div>);
    }


    return(
        <main>
          {elements}
        </main>
    )
}

/*
1.The offsetHeight property returns the viewable height of an element (in pixels), including padding, 
border and scrollbar, but not the margin.

2.The offsetHeight property id read-only.

Syntex: element.offsetHeight

Note: The viewable height of the element (in pixels) including padding, border and scrollbar.

*/