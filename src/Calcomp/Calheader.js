import React from 'react'
import { useState } from 'react'
import Calbody from './Calbody'

const Calheader = () => {
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
  
    const[sDate,setsDate]=useState("2023-01-01")
    var sDate2=new Date(sDate)
    var month=sDate2.getMonth()
    var year=sDate2.getFullYear()
    var amonth=months[month]
    function Minus()
    {   
        console.log(sDate)
        var d=sDate.split("-")
        if(d[1]<=1)
        {
            d[0]=parseInt(d[0])-1
            d[0].toString()
            d[1]="12"
        }
        else{
        d[1]=parseInt(d[1])-1
        d[1].toString()
        }
        setsDate(d.join("-"))
    }
    function Plus()
    {   
        console.log(sDate)
        var d=sDate.split("-")
        if(d[1]>=12)
        {
            d[0]=parseInt(d[0])+1
            d[0]=d[0].toString()
            d[1]="01"
        }
        else{
        d[1]=parseInt(d[1])+1
        d[1]=d[1].toString()
        }
        setsDate(d.join("-"))
    }
  return (
    <div>
          <div className="container text-primary">
              <div className="row">
                  <div className="col align-self-start">
                      <button onClick={Minus}>Minus</button>
                  </div>
                  <div className="col align-self-center">
                  <p>{amonth}{year}</p>
                  </div>
                  <div className="col align-self-end">
                      <button onClick={Plus}>Plus</button>
                  </div>
              </div>
              </div>
              <Calbody date={sDate2}/>
              </div>
  )
}

export default Calheader