import React, {useState, useRef} from 'react'

interface Person{
    firstName:string;
    lastName:string;
}

interface Props{
    name:string;
    completed:boolean; 
    i?: number; 
    //question mark means that the property is optional
    fn: (n:number) => void;   
    //or we can return also number, boolean, string  
    obj: Person; 
    //Create array of interface : Array<Props> or Props[]
}

interface TextFieldProps{
    text:string;
}


export const TextField:React.FC<TextFieldProps>= ({text}) => {
    const[count,setCount] = useState<number | null | undefined |string>(5); 
    //    null and undefined are different things
    
    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setCount(event.target.value); 
    }

    return (
        <div>
            <h1>{text}</h1>
            <h3>{count}</h3>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}
