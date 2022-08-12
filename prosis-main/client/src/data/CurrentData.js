import React, { useState, useEffect } from "react";
import {potroomInputList,
  potroomOverviewInputList,
  CasthouseOverviewInputList,
  OverviewList,
  CasthouseInputListProduction,
  CasthouseInputListSampling,
  CasthouseInputListCasthouse
} from "../constants/ResultInput";

export const UDOOverviewInput = (Data2) => {

  //console.log(Object.keys(inputData2.casthouse.analysisTime).keys.name);
  //console.log(Data2.potroom.filter(x => x.name=== "productionAmount")[0]);
  //console.log(Object.keys(inputData2.casthouse).filter(x => { if(x === "productionAmount"){return x}}));
  //console.log(Data2.casthouse);
  //console.log(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "productionAmount")]);
  let listValue = Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "productionAmount")];
  //console.log(listValue);
  OverviewList[2].value = listValue;
  potroomOverviewInputList[2].value = listValue;
  CasthouseOverviewInputList[2].value = listValue; 
}

export const UDPotroomInput  = (Data2) => {
  //console.log("UDPotroomInput");
  //console.log(Data);

  //const [UpdatedList, setUpdatedList] = useState(potroomInputList);  
  const UpdatedList=potroomInputList;
  
  //const temp = UpdatedList.filter(x => x.name=== "anodePrice").value;

    

   /*
  UpdatedList[0].variables.filter(x => x.tag=== "anodePrice")[0].setValue(Data[0].filter(x => x.name=== "anodePrice")[0].value);//Data.anodePrice;
  UpdatedList[0].variables.filter(x => x.tag=== "electricityCost")[0].setValue(Data[0].filter(x => x.name=== "electricityCost")[0].value);//Data.electricityCost;
  UpdatedList[0].variables.filter(x => x.tag=== "energyConsumption")[0].setValue(Data[0].filter(x => x.name=== "energyConsumption")[0].value);//Data.energyConsumption;

  UpdatedList[1].variables.filter(x => x.tag=== "potSamplesPerDay")[0].setValue(Data[0].filter(x => x.name=== "potSamplesPerDay")[0].value);//Data.potSamplesPerDay; 
  UpdatedList[1].variables.filter(x => x.tag=== "potSamplingTime")[0].setValue(Data[0].filter(x => x.name=== "potSamplingTime")[0].value);//Data.potSamplingTime;

  UpdatedList[2].variables.filter(x => x.tag=== "numberOfPots")[0].setValue(Data[0].filter(x => x.name=== "numberOfPots")[0].value);//Data.numberOfPots;
  UpdatedList[2].variables.filter(x => x.tag=== "numberOfPotlines")[0].setValue(Data[0].filter(x => x.name=== "numberOfPotlines")[0].value);//Data.numberOfPotlines;
  UpdatedList[2].variables.filter(x => x.tag=== "potReplacementCost")[0].setValue(Data[0].filter(x => x.name=== "potReplacementCost")[0].value);//Data.potReplacementCost;
  UpdatedList[2].variables.filter(x => x.tag=== "potLifespan")[0].setValue(Data[0].filter(x => x.name=== "potLifespan")[0].value);//Data.potLifespan;
  UpdatedList[2].variables.filter(x => x.tag=== "tapoutFrequency")[0].setValue(Data[0].filter(x => x.name=== "tapoutFrequency")[0].value);//Data.tapoutFrequency;
  */


 UpdatedList[0].variables.filter(x => x.tag=== "anodePrice")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "anodePrice")]);//Data.anodePrice;
 UpdatedList[0].variables.filter(x => x.tag=== "electricityCost")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "electricityCost")]);//Data.electricityCost;
 UpdatedList[0].variables.filter(x => x.tag=== "energyConsumption")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "energyConsumption")]);//Data.energyConsumption;

 UpdatedList[1].variables.filter(x => x.tag=== "samples_amount")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "samples_amount")]);//Data.potSamplesPerDay; 
 UpdatedList[1].variables.filter(x => x.tag=== "samples_time")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "samples_time")]);//Data.potSamplingTime;

 UpdatedList[2].variables.filter(x => x.tag=== "pots_amount")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "pots_amount")]);//Data.numberOfPots;
 UpdatedList[2].variables.filter(x => x.tag=== "potlines_amount")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "potlines_amount")]);//Data.numberOfPotlines;
 UpdatedList[2].variables.filter(x => x.tag=== "potReplacementCost")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "potReplacementCost")]);//Data.potReplacementCost;
 UpdatedList[2].variables.filter(x => x.tag=== "potLifespan")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "potLifespan")]);//Data.potLifespan;
 UpdatedList[2].variables.filter(x => x.tag=== "tapoutFrequency")[0].setValue(Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "tapoutFrequency")]);//Data.tapoutFrequency;
    return (UpdatedList);

    /*
    
    Potroom - old
      production
        Currency 		          - Choose - from a list of currencys
        Factory location    	- Choose - from a list of contries
        Annual production   	- number - Metric tons
        Anode price		        - number - USD/Kg
        Electricity cost	    - number - USD/Mwh
        Energy consumption	  - number - Mwh/Ton
    
      Sampling
        Pot samples per day 	- number - Samples/day
        Pot Sampling time	    - number - min
    
      Potroom
        Number of pots		    - number - Nr pots
        Number of potlines  	- number - Quantity
        Pot replacement cost	- number - USD/Pot
        Pot lifespan		      - number - days
        Tapout frequency	    - number - Frequency
     */ 
    
    }
    
    export const UDCasthouseInput  = (Data2) => {

      //console.log("UDCasthouseInput");
      //console.log(Data);

      const ProductionList=CasthouseInputListProduction;
      
      //ProductionList.filter(x => x.tag=== "naturalGasPrice")[0].setValue(Data[0].filter(x => x.name=== "naturalGasPrice")[0]);//Data.tapoutFrequency;
      //console.log(ProductionList);
      //console.log(Data[1][6].value);
      //ProductionList[0].setValue(Data[1][3].value); //Data.alloyProduction; 
      //console.log(Data2);
                                                                      //  Data2.potroom[Object.keys(Data2.potroom).filter(x =>x === "tapoutFrequency")]          
      ProductionList.filter(x => x.tag=== "naturalGasPrice")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "naturalGasPrice")]); //Data.naturalGasPrice;
      ProductionList.filter(x => x.tag=== "electricityCost")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "electricityCost")]); //Data.electricityCost;
      ProductionList.filter(x => x.tag=== "co2Emissions")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "co2Emissions")]); //Data.co2Emissions;

      const SamplingList=CasthouseInputListSampling;
      
      /* 
      console.log(SamplingList);
      console.log("SamplingList");
      console.log(SamplingList[4]);
      */
      //console.log(SamplingList[1]);
     

      
      SamplingList.filter(x => x.tag=== "skimmingStaions")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "skimmingStations")]); //Data.skimmingStations;
      SamplingList[1].subCatagory.filter(x => x.tag=== "samples_crucible_amount")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "samples_crucible_amount")]); //Data.crucibleSamplesPerDay;
      SamplingList[1].subCatagory.filter(x => x.tag=== "samples_furnace_amount")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "samples_furnace_amount")]);//Data.furnaceSamplesPerDay;
      SamplingList[1].subCatagory.filter(x => x.tag=== "samples_launder_amount")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "samples_launder_amount")]);//Data.launderSamplesPerDay;
      SamplingList.filter(x => x.tag=== "analysisTime")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "analysisTime")]);//Data.analysisTime;
      SamplingList[3].subCatagory.filter(x => x.tag=== "samples_crucible_time")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "samples_crucible_time")]);//Data.crucibleSamplingTime; 
      SamplingList[3].subCatagory.filter(x => x.tag=== "samples_furnace_time")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "samples_furnace_time")]);//Data.furnaceSamplingTime;
      SamplingList[3].subCatagory.filter(x => x.tag=== "samples_launder_time")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "samples_launder_time")]);//Data.launderSamplingTime;
      SamplingList.filter(x => x.tag=== "crucibleReviewing")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "crucibleReviewing")]);//Data.crucibleReviewing;


      const CastingList= CasthouseInputListCasthouse;
      
      //console.log(CastingList);
      CastingList[0].subCatagory.filter(x => x.tag=== "furnaces_electric_amount")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "furnaces_electric_amount")]); //Data.crucibleSamplesPerDay;
      CastingList[0].subCatagory.filter(x => x.tag=== "furnaces_gas_amount")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "furnaces_gas_amount")]); //Data.crucibleSamplesPerDay;
      CastingList[0].subCatagory.filter(x => x.tag=== "furnaces_oil_amount")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "furnaces_oil_amount")]); //Data.crucibleSamplesPerDay;
      CastingList.filter(x => x.tag=== "castings_perDay")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "castings_perDay")]);
      CastingList.filter(x => x.tag=== "meltLoss")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "meltLoss")]);
      
      
      CastingList.filter(x => x.tag=== "offSpec")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "offSpec")]);
      CastingList.filter(x => x.tag=== "offSpecRemelt")[0].setValue(Data2.casthouse[Object.keys(Data2.casthouse).filter(x =>x === "offSpecRemelt")]);
       /*
  CasthouseInputListProduction,
  CasthouseInputListSampling,
  CasthouseInputListCasthouse,


  Casthouse
      production
          Currency 		          - Choose - from a list of currencys
          Factory location    	- Choose - from a list of contries
          Annual production   	- number - Metric tons
          Alloy production		  - number - Percent
          Natural gas price	    - number - USD/MJ
          Electricity cost		  - number - USD/Mwh
          CO2 Emissions		      - Number - kg CO2/Ton
    
      Sampling
          Samples Per day		
            Crucible		        - number - smp
            Furnace			        - number - smp
            Lauder			        - number - smp
          Analysis time		      - number - min
          Sampling time
            Crucible		        - number - Min
            Furnace			        - number - Min
            Lauder			        - number - Min
          Crucible revewing		  - Number - Percent
    
      Casthouse
         Number of furnaces		
            Electric	        	- Number - Qty
            Gas		            	- Number - Qty
         Castings per day		    - Number - Castings
         Furnace capacity	    	- number - Metric tons
         Holding furnace melt loss 
            Electric		        - Number - Percent
            Gas		            	- Number - Percent
         Production off spec	  - Number - Percent
         Furnace holding time
            Pure Alu	        	- Number - Hrs
            Alloys		        	- Number - Hrs
         Off spec remelted	  	- Number - Percentage
  
      */
    }
  
  