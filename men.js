import React,{useState} from "react";

function Arithmetics(){
    let init=0;
const [first,setFirst]=useState(init);
const handlechange1=(event)=>{
setFirst(event.target.value);
}
const [second,setSecond]=useState(init);
const handlechange2=(e)=>{
setSecond(e.target.value);
}
const [meta,setMeta]=useState("");
const addition=()=>{
    setMeta(first+second);
}
const substraction=()=>
{
    let a;
    a=first-second;
    setMeta(a);
}
const multiplications=()=>{
    let a;
    a=first*second;
    setMeta(a);
}
const division=()=>{
    let a=first/second;
    setMeta(a);
}
return(
    <>
    enter first number:<input type="number" onChange={handlechange1}></input>
    enter second number:<input type="number" onChange={handlechange2}></input>
    <button onClick={addition} >addition</button>
    <button onClick={substraction}>substraction</button>
    <button onClick={multiplications}>multiplications</button>
    <button onclick={division}>division</button>
    result:<h3>{meta}</h3>
    </>
)
}
export default Arithmetics;
