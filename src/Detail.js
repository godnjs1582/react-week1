import React from "react";
import './App.css';
import{useParams,useHistory}from "react-router-dom";
import {useState} from 'react';

function Detail(props) { 
    let random_arr= Array.from({length: 7}, () => Math.floor(Math.random() * 5+1));
    const [number, setNumber] = useState(0);
    const history=useHistory();
    const week=["월","화","수","목","금","토","일"];
    const params=useParams();
    const index=params.index
    let BtnClick=function(e){
      let btnArr=document.querySelectorAll(".DefaultG");
      let myPoint=Number(e.target.innerHTML)+1
      let number=0;  
      setNumber(number=myPoint)
      for(let i=0;i<5;i++){
        btnArr[i].style.backgroundColor="rgb(216, 216, 216)"
      }
      for(let i=0;i<number;i++){
        for(let j=0;j<=i;j++){
              btnArr[j].style.backgroundColor="rgb(0, 255, 170)"
            }
          }
      }
      
      // window.alert(number)
  
    const Default = Array.from({length:5}, (item, idx)=>{ 
          return (
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"15px"}}>
              <div className = "DefaultG" onClick={BtnClick} key ={idx}> {idx}
              </div>
            </div>
          );});
          
    return (
      <div>
        <h1 style={{marginTop:"30px",marginRight:"10px"}}>{index}요일 평점 남기기</h1>
        <div className="OneDay"/>
        <div className="Grey" style={{marginLeft:"130px"}}>{Default}</div>
        <button className="Mark"  onClick={() => {
                        history.push("/")
                        }}>내 평점 남기기</button>
    </div>    
    );
  }

export default Detail