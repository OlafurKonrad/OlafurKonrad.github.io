
import React, { useState,useEffect } from "react";
import "./styles.css";
import { potroomInputList,
        OverviewList,
        CasthouseInputListProduction,
        CasthouseInputListSampling,
        CasthouseInputListCasthouse
      } from "../../../constants/ResultInput";
import PropTypes from 'prop-types';
import {AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { BsFillInfoCircleFill,BsFillFilePlusFill, BsFillFileMinusFill} from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import {CountryElectricPrices} from "../../../constants/ElectricPrices";
import {CountryGasPrices} from "../../../constants/GasPrices";
import {UDPotroomInput,UDCasthouseInput,UDOOverviewInput} from "../../../data/CurrentData";
import { templates } from "../../../data/templateData";
import { IoCompassOutline } from "react-icons/io5";
// import { MetalsAPI } from "../../../services/API";


//BsFillInfoCircleFill

const ArrowSize =20;
let inputDataList;
//var inputDataList = [];
var EmptyArray = [];
var UpdateFunction;
let mininputnumber=0;

export const ResultInputAccordion = ({catID,inputData2,setResultData2,}) =>{
  // Fyrst stop for all accordion info
  //console.log(inputData2);

  inputDataList = inputData2;
  //console.log(inputDataList);
    function UpdateList(inputList){
      //console.log("Within UpdateList") 
      //console.log(inputList)
       setResultData2(inputList);
       //console.log("Within UpdateList") 
       //console.log(inputData2)
      }
      //MetalsAPI();
  UpdateFunction = UpdateList;
 // console.log("Within Top");
  //console.log(inputData);
  //console.log(inputDataList); 

        
          if(catID == 2){
            
            return(<Overview 
              OList={OverviewList}

              inputData2={inputData2}
              setResultData2 = {setResultData2}
            />)
          }
          else if(catID == 0){
            
            return(
             <div>
              <Overview 
              OList={OverviewList}
              inputData2={inputData2}
              setResultData2 = {setResultData2}
            />
            <Potroom 
              inputData2={inputData2}
              setResultData2 = {setResultData2}
            />
            </div>
            );
          }
          else if(catID == 1){
            
            return(
            <div>
              <Overview 
              OList={OverviewList}
              inputData2={inputData2}
              setResultData2 = {setResultData2}
            />
            <Casthouse 
              inputData2={inputData2}
              setResultData2 = {setResultData2}
            />
            </div>
            );
          } 
          else{return;}
    
}
ResultInputAccordion.propTypes = {
    catID: PropTypes.number.isRequired,
};


      

      const increaseValue = (value,setResultData2) => {
          try{
            const itemtag = document.getElementById(value).getAttribute("tag");
            const itemcatagory = document.getElementById(value).getAttribute("catagory");
            let catNum = 0;
            if(itemcatagory==="Casthouse"){catNum=1}
            document.getElementById(value).value++;
            inputDataList[catNum].filter(x => x.name=== itemtag)[0].value = parseFloat(document.getElementById(value).value);
            setResultData2(inputDataList);
          }catch(error){}
      }

      const decreaseValue = (value,setResultData2) => {
          try{
            if(document.getElementById(value).value >= (mininputnumber+1)){
            const itemtag = document.getElementById(value).getAttribute("tag");
            const itemcatagory = document.getElementById(value).getAttribute("catagory");
            let catNum = 0;
              if(itemcatagory==="Casthouse"){catNum=1}
            document.getElementById(value).value--;
            inputDataList[catNum].filter(x => x.name=== itemtag)[0].value = parseFloat(document.getElementById(value).value);
            //console.log(inputDataList)
            setResultData2(inputDataList);
            } 
          }catch(error){}
      }


const Overview = ({ OList,inputData2,setResultData2 }) => {
  
  //console.log("Within Overview");
  //console.log(inputData);
  //console.log(inputDataList);
  UDOOverviewInput(inputData2);
  
  const updateOvervew = (setlist,list) => { 
    try{
      let numb = list.potroom[Object.keys(list.potroom).filter(x =>x === "productionAmount")];
      if(isNaN(numb) || (numb === "") || (numb <= mininputnumber+1))
      {}else{document.getElementById("400").value = parseFloat(numb);}
      }catch(error){}
      return parseFloat(list.potroom[Object.keys(inputData2.potroom).filter(x =>x === "productionAmount")]);
  }
  
  const changeTonnage = (item) => {
    try{ 
      var item = document.getElementById("400").value
      if(isNaN(item) || (item === "")|| (item < mininputnumber+1)){
        //console.log("Within NAN")
        inputDataList.potroom[Object.keys(inputDataList.potroom).filter(x =>x === "productionAmount")]= mininputnumber+1;
        inputDataList.casthouse[Object.keys(inputDataList.casthouse).filter(x =>x === "productionAmount")]= mininputnumber+1;
        //inputDataList[0][2].value = mininputnumber;
        //inputDataList[1][2].value = mininputnumber;
        document.getElementById("400").value = mininputnumber+1;
        UpdateFunction(inputDataList);
      }else{
      inputDataList.potroom[Object.keys(inputDataList.potroom).filter(x =>x === "productionAmount")]= parseFloat(item);
      inputDataList.casthouse[Object.keys(inputDataList.potroom).filter(x =>x === "productionAmount")]= parseFloat(item);  
      //inputDataList[0][2].value = parseFloat(item);
      //inputDataList[1][2].value = parseFloat(item);
      document.getElementById("400").value = parseFloat(item);
      UpdateFunction(inputDataList);

      }
      setResultData2(inputDataList);
    }catch(error){}
  }

    const [CountryName, setContryName] = useState("Click here");
    
    const openCountrydropdown = () => {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    //console.log(OList[2].value);    
    
    // Close the dropdown if the user clicks outside of it ba
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    
    

    const  SetCountryVariables = (item) =>{ 
      //console.log("inside SetCountry");
      const country = item.target.getAttribute('value'); 
      let electric = null;
      let gas = null;
      try{ electric = CountryElectricPrices.filter(x => x.Country=== country)[0].ElectricCost_USD_KWh;}catch(error){}
      try{ gas = CountryGasPrices.filter(x => x.Country=== country)[0].NaturalGas_USD_KWh;}catch(error){}
      
      if(gas != null)
      {
        inputDataList[1].filter(x => x.name=== "naturalGasPrice")[0].value = gas;
        inputDataList[1].filter(x => x.name=== "naturalGasPrice")[0].value = gas;
        templates[0][1].filter(x => x.name=== "naturalGasPrice")[0].value = gas;
        templates[1][1].filter(x => x.name=== "naturalGasPrice")[0].value = gas;
        templates[2][1].filter(x => x.name=== "naturalGasPrice")[0].value = gas;
      }
      if(electric != null)
      {
        inputDataList[0].filter(x => x.name=== "electricityCost")[0].value = electric;
        inputDataList[1].filter(x => x.name=== "electricityCost")[0].value = electric;

        templates[0][0].filter(x => x.name=== "electricityCost")[0].value = electric;
        templates[0][1].filter(x => x.name=== "electricityCost")[0].value = electric;
  
        templates[1][0].filter(x => x.name=== "electricityCost")[0].value = electric;
        templates[1][1].filter(x => x.name=== "electricityCost")[0].value = electric;
  
        templates[2][0].filter(x => x.name=== "electricityCost")[0].value = electric;
        templates[2][1].filter(x => x.name=== "electricityCost")[0].value = electric;
      }
      inputDataList[0].filter(x => x.name=== "factoryLocation")[0].value = country;
      inputDataList[1].filter(x => x.name=== "factoryLocation")[0].value = country;
      
      setResultData2(inputDataList); 
      ResultInputAccordion.chosenCountry = country; 
      setContryName(country);
      
      //console.log(templates[2][1][1].value);
      templates[0][0].filter(x => x.name=== "factoryLocation")[0].value = country;
      templates[0][1].filter(x => x.name=== "factoryLocation")[0].value = country;

      templates[1][0].filter(x => x.name=== "factoryLocation")[0].value = country;
      templates[1][1].filter(x => x.name=== "factoryLocation")[0].value = country;

      templates[2][0].filter(x => x.name=== "factoryLocation")[0].value = country;
      templates[2][1].filter(x => x.name=== "factoryLocation")[0].value = country;

      //console.log(templates);

      }
    
        return( 
          <div className="InputsContainers">
            <div className="IndividualInputsContainerOverview">
            <p className="RInputTitleOverview" id="CountryName" >Factory location</p>
              <div className="dropdown" >
                <button onClick={openCountrydropdown} className="dropbtn" id={"dropbtnID"}>{ 
                ResultInputAccordion.chosenCountry == undefined ? CountryName : ResultInputAccordion.chosenCountry }</button>
                  <div id="myDropdown" className="dropdown-content" >
                    {CountryElectricPrices.map((item) => (
                          <a key={item.id}  value={item.Country} className={"itemB"} onClick={SetCountryVariables} >
                            {item.Country}</a> 
                    ))} 
                  </div>
              </div>        
            </div>
            <div className="IndividualInputsContainerOverview">
              <p className="RInputTitleOverview" > Annual Production</p>
              <input className="RInputOverview" type="number" 
              lang="en-GB" 
              id={400}
              defaultValue={updateOvervew(setResultData2,inputData2)}
              catagory={OverviewList[2].catagory}
              onChange= {changeTonnage}
              min="0" 
              ></input> 
              <p>Ton</p>      
            </div>
          </div>
        );
}


function InfoWindow (item){
  console.log("From inside InfoWindow" );
 
  //console.log(item);
  //const varia = item.target.getAttribute('value');

  //console.log(item);
  //<Popover content={contentwindow} title="Title" className ="popWindow"  >
   // <Button type="primary" className ="popWindow" >Hover me</Button>
  //</Popover>
}



const changeValue = (item) => {
  // Find the input changed
    
    var tag = item.target.getAttribute('tag');
    //Object.keys(inputDataList.potroom)
   
  
    //console.log(item.target);
    if(item.target.getAttribute('catagory')=="Potroom"){ Object.keys(inputDataList.potroom).forEach(element => {
        if(tag == element){
 
          if(isNaN(item.target.value) || (item.target.value <= mininputnumber) || (item.target.value === ""))
            {
              //console.log("within  NAN");
              item.target.value = mininputnumber;
              inputDataList.potroom[tag] = parseFloat(mininputnumber);
              UpdateFunction(inputDataList);
              return false;
            }else{ // /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
              let bab = {value:1000.001};
              //console.log("within NOT NAN");
              //console.log(item.value.replace(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/));
              inputDataList.potroom[tag] = parseFloat(item.target.value);
              
              item.target.value = parseFloat(item.target.value); //.replace(/^0+(0$|[1-9])/mg, '$1'));
              UpdateFunction(inputDataList);
              return false; 
            }
          }
      });
    }
    else if(item.target.getAttribute('catagory')=="Casthouse"){ Object.keys(inputDataList.casthouse).forEach(element => {
      if(tag == element){
 
        if(isNaN(item.target.value) || (item.target.value <= mininputnumber) || (item.target.value === ""))
          {
            //console.log("within  NAN");
            item.value = mininputnumber;
            inputDataList.casthouse[tag] = parseFloat(mininputnumber);
            UpdateFunction(inputDataList);
            return false;
          }else{ // /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
            let bab = {value:1000.001};
            //console.log("within NOT NAN");
            //console.log(item.value.replace(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/));
            inputDataList.casthouse[tag] = parseFloat(item.target.value);
            
            item.value = parseFloat(item.target.value); //.replace(/^0+(0$|[1-9])/mg, '$1'));
          UpdateFunction(inputDataList);
            return false; 
          }
        }
    })
      
    }
}

const collapser = () => {

      // Fetch all the details element.
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });

}

const Potroom = ({inputData2,setResultData2 }) => {
  //console.log("Within Potroom");
  //console.log(inputData2);
  //console.log(inputDataList);
  UDPotroomInput(inputData2);
  const updatePotroomValue = (item,value) => {
        
    try{
      if(document.getElementById(item).value >= mininputnumber ){
        
        document.getElementById(item).value = value;
        return value;
        }else{
          document.getElementById(item).value = mininputnumber;
          
        }

        }catch(error){ 
          //console.log("inside error");
          //console.log(inputData);
          if(value)
          { return value; }else{ return mininputnumber; }
        }
  }

  


      return(
        <div className="InputsContainers">
          {potroomInputList.map((item) => (
                <details key={item.id} >
                    <summary className="InputButton" onClick={collapser}>
                      {item.name}
                      <span className="icon"><RiArrowDownSFill /></span>
                      
                    </summary>
                    {item.variables.map((variable) => (
                          <div className="IndividualInputsContainer" key={variable.id}>
                            <div className="TitleAndInfo">
                              <p className="RInputTitle" > {variable.name}</p> 
                              
                                <BsFillInfoCircleFill className="infoIcon" onMouseDown={InfoWindow}   ></BsFillInfoCircleFill> 
                              
                            </div>
                            <div className="InputAndArrows">
                                <AiOutlineMinusSquare className="plusAndMinusIcons" size={ArrowSize} onClick={() => decreaseValue(variable.id+300,setResultData2)} /> 
                                  <input 
                                  lang="en-UK" 
                                  id={variable.id+300}
                                  className="RInput" 
                                  type="number"
                                  min="0" 
                                  pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$"
                                  defaultValue={updatePotroomValue(variable.id+300, variable.value,)}
                                  onChange= {changeValue}
                                  tag={variable.tag}
                                  catagory ={variable.catagory}
                                  />   
                                  
                                <AiOutlinePlusSquare className="plusAndMinusIcons" size={ArrowSize} onClick={() => increaseValue(variable.id+300,setResultData2)}/>
                            </div>
                            
                            {variable.unitOfMesurement}
                          </div>
                      ))
                      }
                </details> 
                            ))}
    
        </div>
      );
}


/*<input value={this.state.amount1} onChange={(value) => this.onChange(value)} className="form-control""/>*/

const Casthouse = ({inputData2,setResultData2 }) => {
  UDCasthouseInput(inputData2);
  //console.log("Within casthouse");
  //console.log(inputData);
  //console.log(inputDataList);
      return(
        <div className="InputsContainers">
          {renderList("Production",CasthouseInputListProduction,inputData2,setResultData2)}
          {renderList("Sampling",CasthouseInputListSampling,inputData2,setResultData2)}
          {renderList("Casting",CasthouseInputListCasthouse,inputData2,setResultData2)}
        </div>
        );
}


const renderList = (name,list,inputData2,setResultData2) => {
  
  
  
  const updateCasthouseValue = (item,value) => {

    try{
        if(document.getElementById(item).value >= mininputnumber ){
          
          document.getElementById(item).value = value;
          return value;
          }else{
            document.getElementById(item).value = mininputnumber;
            
          }

    }catch(error){ 
      //console.log("inside error");
      //console.log(inputData);
      if(value)
      { return value; }else{ return mininputnumber; }
  }}


  
  return(
            <details> 
                <summary className="InputButton" onClick={collapser}>
                  {name}
                  <span className="icon"><RiArrowDownSFill /></span>
                </summary>
                  {list.map((item) => (
                      <div className="IndividualInputsContainer" key={item.id}>
                          {item.subCatagory == null ?
                                
                                  <div>
                                    <div className="TitleAndInfo">
                                      <p className="RInputTitle" > {item.name}</p>
                                      
                                      <BsFillInfoCircleFill className="infoIcon" key={item.id} onMouseOver={InfoWindow}    ></BsFillInfoCircleFill>     
                                    </div>
                                    <div className="InputAndArrows">
                                        <AiOutlineMinusSquare className="plusAndMinusIcons" size={ArrowSize} onClick={() => decreaseValue(item.id+300,setResultData2)}/>
                                        
                                        <input className="RInput" type="number" lang="en_150" 
                                        id = {item.id+300} 
                                        defaultValue = {updateCasthouseValue(item.id+300, item.value)}
                                        onChange = {changeValue}
                                        tag = {item.tag}
                                        catagory = {item.catagory}> 
                                        </input>
                                        <AiOutlinePlusSquare className="plusAndMinusIcons" size={ArrowSize} onClick={() => increaseValue(item.id+300,setResultData2)}/>
                                    </div>
                                    {item.unitOfMesurement}
                                  </div>
                                
                              : 
                              <div className="null" key={Math.random()}/>          
                                } 
                          {item.subCatagory != null ? 
                                <div className="row-maker" key={item.id}>
                                    <div className="TitleAndInfo">
                                      <div className="subInputTitle">{item.name}
                                      </div>
                                      <BsFillInfoCircleFill className="infoIconB" onMouseOver={InfoWindow}    ></BsFillInfoCircleFill>
                                    </div>
                                    <div className="tinyInputsContainers" key={item.id}>
                                        
                                          {item.subCatagory.map((variable) => (
                                                <div className="tinyIndividualInputsContainer" key={variable.id}>
                                                  <div className="tinyRInputTitle" > {variable.name}</div>
                                                  
                                                      <input className="tinyRInput" type="number" lang="en_150" 
                                                        id = {variable.id+300} 
                                                        defaultValue = {updateCasthouseValue(variable.id+300, variable.value)}
                                                        onChange = {changeValue}
                                                        tag = {variable.tag}
                                                        catagory = {variable.catagory}> 
                                                      </input>
                                                      
                                                      {variable.unitOfMesurement}
                                                  <div className="column-maker">
                                                      <AiOutlineMinusSquare className="tinyplusAndMinusIcons" size={12} onClick={() => decreaseValue(variable.id+300,setResultData2)} />
                                                      <AiOutlinePlusSquare className="tinyplusAndMinusIcons" size={12} onClick={() => increaseValue(variable.id+300,setResultData2)}/>
                                                  </div>
                                                </div>
                                            ))} 
                                    </div>
                                </div>
                              : 
                              <div className="null" key={Math.random()}/>         
                                }   
                      </div> 

                        ))}
            </details>

        );
}

