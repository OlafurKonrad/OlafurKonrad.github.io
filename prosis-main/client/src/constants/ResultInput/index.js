
import React, { useState } from "react";


export const potroomOverviewInputList = [
  {
    id: 3,
    catagory: "Potroom",
    title: "Currency",
    name: "Currency",
    description: "Select the currency you would like to use in the calculation.",
    unitOfMesurement: "",
    typeofInput:"",
    value:"",
    setValue : function(item) {
      this.value = item;
     }
  },
  {
    id: 4,
    catagory: "Potroom",
    title: "Factory location",
    name: "Factory location",
    description: "Select the contry in wich the factory resides.",
    unitOfMesurement: "",
    typeofInput:"",
    value:"",
    setValue : function(item) {
      this.value = item;
     }
    
  },
  {
    id: 5,
    catagory: "Potroom",
    title: "Annual production",
    name: "Annual production",
    description: "The annual production of aluminum in metric tons.",
    unitOfMesurement: "Metric tons",
    typeofInput:"number",
    value: 0,
    setValue : function(item) {
      this.value = item;
     }
  }
  ];
  
  
  export const potroomInputList = [
    {
      id:1,
      name: "Production",
      variables: [
        
        {
          id: 6,
          catagory: "Potroom",
          tag:"anodePrice",
          title: "Anode price",
          name: "Anode price",
          description: "The price of anodes per kg.",
          unitOfMesurement: "USD/Kg",
          typeofInput:"number",
          value: 0,
          setValue : function(item) {
           this.value = item;
          }
        },
        {
          id: 7,
          catagory: "Potroom",
          tag:"electricityCost",
          title: "Electricity cost",
          name: "Electricity cost",
          description: "The price per MWh of electricity.",
          unitOfMesurement: "USD/Mwh",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
          
        },
        {
          id: 8,
          catagory: "Potroom",
          tag:"energyConsumption",
          title: "Energy consumption",
          name: "Energy consumption",
          description: "The total energy needed to produce one ton of aluminum.",
          unitOfMesurement: "Mwh/Ton",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        }
      ]},
    {
      id:2,
      name: "Sampling",
      variables: 
        [
        {
          id: 9,
          catagory: "Potroom",
          tag:"samples_amount",
          title: "Pot samples per day",
          name: "Pot samples per day",
          description: "The total amount of aluminum samples taken in 24 hours in the potroom.",
          unitOfMesurement: "Samples/day",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        },
        {
          id: 10,
          catagory: "Potroom",
          tag:"samples_time",
          title: "Pot Sampling time",
          name: "Pot Sampling time",
          description: "The average time to take one sample in the potroom in minutes.",
          unitOfMesurement: "Min",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        }
      ]
    },
    {
      id:3,
      name: "Pots",
      variables:
      [
        {
          id: 11,
          catagory: "Potroom",
          tag:"pots_amount",
          title: "Number of pots",
          name: "Number of pots",
          description: "The total number of pots in the potroom.",
          unitOfMesurement: "Nr pots",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        },
        {
          id: 12,
          catagory: "Potroom",
          tag:"potlines_amount",
          title: "Number of potlines",
          name: "Number of potlines",
          description: "Number of potlines in the potroom.",
          unitOfMesurement: "Quantity",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        },
        {
          id: 13,
          catagory: "Potroom",
          tag:"potReplacementCost",
          title: "Pot replacement cost",
          name: "Pot replacement cost",
          description: "The total cost of replacing a pot in the potroom.",
          unitOfMesurement: "USD/Pot",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        },
        {
          id: 14,
          catagory: "Potroom",
          tag:"potLifespan",
          title: "Pot lifespan",
          name: "Pot lifespan",
          description: "The average life expectancy of a single pot in the potroom.",
          unitOfMesurement: "Days",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        },
        {
          id: 15,
          catagory: "Potroom",
          tag:"tapoutFrequency",
          title: "Tapout frequency",
          name: "Tapout frequency",
          description: "How many bath metal leakages occur on average each year in the potroom.",
          unitOfMesurement: "Frequency",
          typeofInput:"number",
          value:0,
          setValue : function(item) {
            this.value = item;
           }
        }
      ]
    }
     /*
    Potroom
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
    ];
  
    export const CasthouseOverviewInputList = [
      {
        id: 16,
        catagory: "Casthouse",
        title: "Currency",
        name: "Currency",
        description: "Select the currency you would like to use in the calculation.",
        unitOfMesurement: "",
        typeofInput:"",
        value:"",
        setValue : function(item) {
          this.value = item;
         }
      },
      {
        id: 17,
        catagory: "Casthouse",
        title: "Factory location",
        name: "Factory location",
        description: "Select the contry in wich the factori resides.",
        unitOfMesurement: "",
        typeofInput:"",
        value:"",
        setValue : function(item) {
          this.value = item;
         }
        
      },
      {
        id: 18,
        catagory: "Casthouse",
        title: "Annual production",
        name: "Annual production",
        description: "The annual production of aluminum in metric tons.",
        unitOfMesurement: "Metric tons",
        typeofInput:"number",
        value: 0,
        setValue : function(item) {
          this.value = item;
         }
      }
    ]
    export const CasthouseInputListProduction = [
     /* {
        id: 19,
        catagory: "Casthouse",
        tag:"alloyProduction",
        title: "Alloy production",
        name: "Alloy production",
        description: "Percentage of total production wich is aluminum alloys(Not pure aluminum).",
        unitOfMesurement: "Percent",
        typeofInput:"number",
        value: 0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
      },*/
      {
        id: 20,
        catagory: "Casthouse",
        tag:"naturalGasPrice",
        title: "Natural gas price",
        name: "Natural gas price",
        description: "Price per MJ of natural gas.",
        unitOfMesurement: "USD/MJ",
        typeofInput:"number",
        value:0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
      },
      {
        id: 21,
        catagory: "Casthouse",
        tag:"electricityCost",
        title: "Electricity cost",
        name: "Electricity cost",
        description: "Price per MWh of electricity.",
        unitOfMesurement: "USD/MWh",
        typeofInput:"number",
        value:0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
      },
      {
        id: 22,
        catagory: "Casthouse",
        tag:"co2Emissions",
        title: "CO2 Emissions",
        name: "CO2 Emissions",
        description: "The average CO2 emissions per ton of aluminum.",
        unitOfMesurement: "Kg CO2/Ton",
        typeofInput:"number",
        value:0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
      }
    ]
    export const CasthouseInputListSampling = [
      {
        id: 23,
        catagory: "Casthouse",
        tag:"skimmingStaions",
        title: "Skimming stations",
        name: "Skimming stations",
        description: "The total amount of aluminum skimming stations in Casthouse.",
        unitOfMesurement: "Samples/day",
        typeofInput:"number",
        value:0,
        setValue : function(item) {
          this.value = item;
         }
      },
      { 
        id: 24,
        name:"Samples per day", 
        tag:"Samples per day",
        setValue : function(item) {
          this.value = item;
         }, 
        subCatagory:[
        
              {
                id: 25,
                catagory: "Casthouse",
                tag:"samples_crucible_amount",
                title: "Samples per day",
                name: "Crucible",
                description: "The average amount of samples taken per day for each of the listed inputs.",
                unitOfMesurement: "Samples",
                typeofInput:"number",
                value:0,
                setValue : function(item) {
                  this.value = item;
                 }
              },
              {
                id: 26,
                catagory: "Casthouse",
                tag:"samples_furnace_amount",
                title: "Samples per day",
                name: "Furnace",
                description: "The average amount of samples taken per day for each of the listed inputs.",
                unitOfMesurement: "Samples",
                typeofInput:"number",
                value:0,
                setValue : function(item) {
                  this.value = item;
                 }
              },
              {
                id: 27,
                catagory: "Casthouse",
                tag:"samples_launder_amount",
                title: "Samples per day",
                name: "Launder",
                description: "The average amount of samples taken per day for each of the listed inputs.",
                unitOfMesurement: "Samples",
                typeofInput:"number",
                value:0,
                setValue : function(item) {
                  this.value = item;
                 }
              }]
        },{
            id: 28,
            catagory: "Casthouse",
            tag:"analysisTime",
            title: "Analysis time",
            name: "Analysis time",
            description: "The average time it takes to transport a sample to analysis and get the result.",
            unitOfMesurement: "Min",
            typeofInput:"number",
            value:0,
            subCatagory: null,
            setValue : function(item) {
              this.value = item;
             }
          },{
  
        id: 29,
        name: "Sampling time",
        tag:"Samples per day",
        setValue : function(item) {
          this.value = item;
         },    
        subCatagory:[{
            id: 30,
            catagory: "Casthouse",
            tag:"samples_crucible_time",
            title: "Sampling time",
            name: "Crucible",
            description: "The average time to take one sample for each of the listed inputs.",
            unitOfMesurement: "Min",
            typeofInput:"number",
            value:0,
            setValue : function(item) {
              this.value = item;
             }
          },
          {
            id: 31,
            catagory: "Casthouse",
            tag:"samples_furnace_time",
            title: "Sampling time",
            name: "Furncae",
            description: "The average time to take one sample for each of the listed inputs.",
            unitOfMesurement: "Min",
            typeofInput:"number",
            value:0,
            setValue : function(item) {
              this.value = item;
             }
          },
          {
            id: 32,
            catagory: "Casthouse",
            tag:"samples_launder_time",
            title: "Sampling time",
            name: "Launder",
            description: "The average time to take one sample for each of the listed inputs.",
            unitOfMesurement: "Min",
            typeofInput:"number",
            value:0,
            setValue : function(item) {
              this.value = item;
             }
          }]
        },{ 
            id: 33,
            catagory: "Casthouse",
            tag:"crucibleReviewing",
            title: "Crucible revewing",
            name: "Crucible revewing",
            description: "The percentage of the total crucible samples that are reviewed before loading. Set to 0% if no crucible samples.",
            unitOfMesurement: "Percent",
            typeofInput:"number",
            value:0,
            subCatagory: null,
            setValue : function(item) {
              this.value = item;
             }
          
          }
    ]
    export const CasthouseInputListCasthouse  = [
      {
        id: 35,
        name: "Number of furnaces",  
        subCatagory:[
                        {
                        id: 36,
                        catagory: "Casthouse",
                        tag:"furnaces_electric_amount",
                        title: "Number of furnaces",
                        name: "Electric",
                        description: "Number of furnaces in the casthouse of each type.",
                        unitOfMesurement: "Qty",
                        typeofInput:"number",
                        value:0,
                        setValue : function(item) {
                          this.value = item;
                         }
                        },
                        {
                        id: 37,
                        catagory: "Casthouse",
                        tag:"furnaces_gas_amount",
                        title: "Number of furnaces",
                        name: "Gas",
                        description: "Number of furnaces in the casthouse of each type.",
                        unitOfMesurement: "Qty",
                        typeofInput:"number",
                        value:0,
                        setValue : function(item) {
                          this.value = item;
                         }
                        },
                        {
                          id: 37.5,
                          catagory: "Casthouse",
                          tag:"furnaces_oil_amount",
                          title: "Number of furnaces",
                          name: "Oil",
                          description: "Number of furnaces in the casthouse of each type.",
                          unitOfMesurement: "Qty",
                          typeofInput:"number",
                          value:0,
                          setValue : function(item) {
                            this.value = item;
                           }
                          }
                    ]
      },
      {
        id: 38,
        catagory: "Casthouse",
        tag:"castings_perDay",
        title: "Castings per day",
        name: "Castings per day",
        description: "Average amount of castings done per day.",
        unitOfMesurement: "Castings",
        typeofInput:"number",
        value:0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
        
      },
      /*{
        id: 39,
        catagory: "Casthouse",
        tag:"furnaceCapacity",
        title: "Furnace capacity",
        name: "Furnace capacity",
        description: "Aluminum capacity in metric tons per furnace.",
        unitOfMesurement: "Metric tons",
        typeofInput:"number",
        value:0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
      },
      {
        id: 40,
        name:"Holding furnace melt loss",  
        subCatagory:[
                      {
                        
                        id: 41,
                        catagory: "Casthouse",
                        tag:"electricMeltLoss",
                        title: "Holding furnace melt loss",
                        name: "Electric",
                        description: "Percentage of melt loss in each type of holding furncae.",
                        unitOfMesurement: "Percent",
                        typeofInput:"number",
                        value:0,
                        setValue : function(item) {
                          this.value = item;
                         }
                      },
                      {
                        id: 42,
                        catagory: "Casthouse",
                        tag:"gasMeltingLoss",
                        title: "Holding furnace melt loss",
                        name: "Gas",
                        description: "Percentage of melt loss in each type of holding furncae.",
                        unitOfMesurement: "Percent",
                        typeofInput:"number",
                        value:0,
                        setValue : function(item) {
                          this.value = item;
                         }
                      },
                      {
                        id: 42.5,
                        catagory: "Casthouse",
                        tag:"oilMeltingLoss",
                        title: "Holding furnace melt loss",
                        name: "Oil",
                        description: "Number of furnaces in the casthouse of each type.",
                        unitOfMesurement: "Percent",
                        typeofInput:"number",
                        value:0,
                        setValue : function(item) {
                          this.value = item;
                         }
                        }
                    ]
      },*/
      {
        id: 40.5,
        catagory: "Casthouse",
        tag:"meltLoss",
        title: "Holding furnace melt loss",
        name: "Melt Loss",
        description: "Percentage of melt loss in each type of holding furncae.",
        unitOfMesurement: "Percent",
        typeofInput:"number",
        value:0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
      },

      {
        id: 43,
        catagory: "Casthouse",
        tag:"offSpec",
        title: "Production off spec",
        name: "Production off spec",
        description: "Percentage of production off spec(scrap).",
        unitOfMesurement: "Percent",
        typeofInput:"number",
        value:0,
        subCatagory: null,
        setValue : function(item) {
          this.value = item;
         }
      },

      /*{
      id: 44,
      name:"Furnace holding time",  
      subCatagory:[
                    {
                      id: 45,
                      catagory: "Casthouse",
                      tag:"pureAluHoldingTime",
                      title: "Furnace holding time",
                      name: "Pure Alu",
                      description: "The furnace holding time for each of the given metal types. If either is not produced, set to zero.",
                      unitOfMesurement: "Hours",
                      typeofInput:"number",
                      value:0,
                      setValue : function(item) {
                        this.value = item;
                       }
                    },
                    {
                      id: 46,
                      catagory: "Casthouse",
                      tag:"AlloyHoldingTime",
                      title: "Furnace holding time",
                      name: "Alloys",
                      description: "The furnace holding time for each of the given metal types. If either is not produced, set to zero.",
                      unitOfMesurement: "Hours",
                      typeofInput:"number",
                      value:0,
                      setValue : function(item) {
                        this.value = item;
                       }
                    }
                  ]
      }, */     
      {
      id: 47,
      catagory: "Casthouse",
      tag:"offSpecRemelt",
      title: "Off spec remelted",
      name: "Off spec remelted",
      description: "Percentage of off spec production that gets remelted on site.",
      unitOfMesurement: "Percent",
      typeofInput:"number",
      value:0,
      subCatagory: null,
      setValue : function(item) {
        this.value = item;
       }
      }
    ]
  

    export const OverviewList = [
      {
        id: 48,
        catagory: "Overview",
        title: "Currency",
        name: "Currency",
        description: "Select the currency you would like to use in the calculation.",
        unitOfMesurement: "",
        typeofInput:"",
        value:"",
        setValue : function(item) {
          this.value = item;
         }
      },
      {
        id: 49,
        catagory: "Overview",
        title: "Factory location",
        name: "Factory location",
        description: "Select the contry in wich the factori resides.",
        unitOfMesurement: "",
        typeofInput:"",
        value:"",
        setValue : function(item) {
          this.value = item;
         }
        
      },
      {
        id: 50,
        catagory: "Overview",
        title: "Annual production",
        name: "Annual production",
        description: "The annual production of aluminum in metric tons.",
        unitOfMesurement: "ton's",
        typeofInput:"number",
        value: 0,
        setValue : function(item) {
          this.value = item;
         }
      }
    ];
  
    
  
  
      /*
  
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
     
 