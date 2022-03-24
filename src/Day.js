import React from "react";
import './App.css';
import {useHistory} from "react-router-dom";

function Day(props){
  const history=useHistory();
  let random_arr= Array.from({length: 7}, () => Math.floor(Math.random() * 5+1));
  let Mon = Array.from({length:random_arr[0]}, (item,idx)=>{ 
        return (
          <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
            <div className="RandomY">  
            </div>
          </div>
        );});
  const Default = Array.from({length:5}, (item, idx)=>{ 
          return (
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
              <div className="DefaultG">  
              </div>
            </div>
          );});
  let Tue = Array.from({length:random_arr[1]}, (item,idx)=>{ 
        return (
          <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
            <div className="RandomY">   
            </div>
          </div>
        );});

  let Wed = Array.from({length:random_arr[2]}, (item,idx)=>{ 
            return (
              <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
                <div className="RandomY">   
                </div>
              </div>
            );});

  let Thu = Array.from({length:random_arr[3]}, (item,idx)=>{ 
                return (
                  <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
                    <div className="RandomY">    
                    </div>
                  </div>
                );});
   
    let Fri = Array.from({length:random_arr[4]}, (item,idx)=>{ 
                    return (
                      <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
                        <div className="RandomY">  
                        </div>
                      </div>
                    );});
   
    let Sat = Array.from({length:random_arr[5]}, (item,idx)=>{ 
                        return (
                          <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
                            <div className="RandomY">  
                            </div>
                          </div>
                        );});
    
    let Sun = Array.from({length:random_arr[6]}, (item,idx)=>{ 
                            return (
                              <div style={{display:"flex", justifyContent:"center",alignItems:"center",float:"left", marginLeft:"10px"}}>
                                <div className="RandomY">   
                                </div>
                              </div>
                            );});
                                                 
                                   
    const week=["월","화","수","목","금","토","일"]
    

    return (
        <>
        <div className="OneDay">
            <h3>{week[0]}</h3>
            <div className="Yellow">{Mon}</div>
            <div className="Grey">{Default}</div>
            <button  className="GoDetail" onClick={() => {
                        history.push("/detail/월")
                        }}></button>
        </div>
        <div className="OneDay">
            <h3>{week[1]}</h3>
            <div className="Yellow">{Tue}</div>
            <div className="Grey">{Default}</div>
            <button  className="GoDetail" onClick={() => {
                        history.push("/detail/화")
                        }}></button>
        </div>
        <div className="OneDay">
            <h3>{week[2]}</h3>
            <div className="Yellow">{Wed}</div>
            <div className="Grey">{Default}</div>
            <button className ="GoDetail" onClick={() => {
                        history.push("/detail/수")
                        }}></button>
        </div>
      <div className="OneDay">
        <h3>{week[3]}</h3>
        <div className="Yellow">{Thu}</div>
        <div className="Grey">{Default}</div>
        <button  className ="GoDetail" onClick={() => {
                        history.push("/detail/목")
                        }}></button>
      </div>
      <div className="OneDay">
        <h3>{week[4]}</h3>
        <div className="Yellow">{Fri}</div>
        <div className="Grey">{Default}</div>
        <button  className ="GoDetail" onClick={() => {
                        history.push("/detail/금")
                        }}></button>
      </div> 
      <div className="OneDay">
        <h3>{week[5]}</h3>
        <div className="Yellow">{Sat}</div>
        <div className="Grey">{Default}</div>
        <button  className ="GoDetail" onClick={() => {
                        history.push("/detail/토")
                        }}></button>
      </div>
      <div className="OneDay">
        <h3>{week[6]}</h3>
        <div className="Yellow">{Sun}</div>
        <div className="Grey">{Default}</div>
        <button  className ="GoDetail" onClick={() => {
                        history.push("/detail/일")
                        }}></button>
      </div>
        </>
    )
    
        
};

export default Day;