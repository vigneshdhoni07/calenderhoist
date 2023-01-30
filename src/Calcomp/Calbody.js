import React from 'react'

const Calbody = ({date}) => {
        
    var month=date.getMonth()
    var year=date.getFullYear()
    var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    
    var day=date.getDay()
    console.log(days[day])
    console.log(month+"month")
    var freq={}
    var s=1
    var e
    if(month===0||month===2||month===4||month===6||month===7||month===9||month===11){e=31}
    if(month===3||month===5||month===8||month===10){e=30}
    if(month===1){
        if(year%4===0){
        e=29}
       else {
        e=28
        }}
    
   
    
while(s<=e)
{var c=0
    
    var st=day
    while(c<7 && s<=e)
    {
        if(st>6){
            st=0
        }
        
            if(freq[days[st]]===undefined)
            {
                freq[days[st]]=[s]
                s++
                st++
                c++
            }
            else{
                freq[days[st]]=[...freq[days[st]],s]
                s++
                st++
                c++
            }
        
        

        
    }
}
  return (
    <div>
          <div className="container">
              <div className="row align-items-start">
                  <div className="col">
                      Sunday
                      <div className="container">
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((day > 0) && "*")}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {(((freq.sunday[0] <= 7) && freq.sunday[0]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.sunday[1] > 7) && (freq.sunday[1] <= 14)) && freq.sunday[1]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.sunday[2] > 14) && (freq.sunday[2] <= 21)) && freq.sunday[2]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.sunday[3] > 21) && (freq.sunday[3] <= 28)) && freq.sunday[3]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.sunday[4] > 28) && (freq.sunday[4] <= 31)) && (freq.sunday[4])) || ("*"))}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      Monday

                      <div className="container">
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((day > 1) && ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">

                                  {(((freq.monday[0] <= 7) && (freq.monday[0])) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.monday[1] > 7) && (freq.monday[1] <= 14)) && freq.monday[1]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.monday[2] > 14) && (freq.monday[2] <= 21)) && freq.monday[2]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.monday[3] > 21) && (freq.monday[3] <= 28)) && freq.monday[3]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.monday[4] > 28) && (freq.monday[4] <= 31)) && freq.monday[4]) || ("*"))}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      Tuesday

                      <div className="container">
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((day > 2) && ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {(((freq.tuesday[0] <= 7) && (freq.tuesday[0])) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.tuesday[1] > 7) && (freq.tuesday[1] <= 14)) && freq.tuesday[1]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.tuesday[2] > 14) && (freq.tuesday[2] <= 21)) && freq.tuesday[2]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.tuesday[3] > 21) && (freq.tuesday[3] <= 28)) && freq.tuesday[3]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.tuesday[4] > 28) && (freq.tuesday[4] <= 31)) && freq.tuesday[4]) || ("*"))}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      Wednesday
                      <div className="container">
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((day > 3) && ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {(((freq.wednesday[0] <= 7) && (freq.wednesday[0])) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.wednesday[1] > 7) && (freq.wednesday[1] <= 14)) && freq.wednesday[1]) ||( "*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.wednesday[2] > 14) && (freq.wednesday[2] <= 21)) && freq.wednesday[2]) ||( "*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.wednesday[3] > 21) && (freq.wednesday[3] <= 28)) && freq.wednesday[3]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.wednesday[4] > 28)&& (freq.wednesday[4] <= 31)) && freq.wednesday[4]) || ("*"))}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      Thursday



                      <div className="container">
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((day > 4) && ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {(((freq.thursday[0] <= 7) && freq.thursday[0]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.thursday[1] > 7) && (freq.thursday[1] <= 14)) && freq.thursday[1]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.thursday[2] > 14) && (freq.thursday[2] <= 21)) && freq.thursday[2]) ||( "*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.thursday[3] > 21) && (freq.thursday[3] <= 28)) && freq.thursday[3]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.thursday[4] > 28 )&& (freq.thursday[4] <= 31)) && freq.thursday[4]) || ("*"))}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      Friday



                      <div className="container">
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((day > 5) && ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {(((freq.friday[0] <= 7) && freq.friday[0]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.friday[1] > 7) && (freq.friday[1] <= 14)) && freq.friday[1]) ||( "*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.friday[2] > 14) && (freq.friday[2] <= 21)) && freq.friday[2] )||( "*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.friday[3] > 21) && (freq.friday[3] <= 28)) && freq.friday[3] )|| ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.friday[4] > 28) && (freq.friday[4] <= 31)) && freq.friday[4] )|| ("*"))}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      Saturday



                      <div className="container">
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((day > 6) && ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {(((freq.saturday[0] <= 7) && freq.saturday[0]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.saturday[1] > 7) && (freq.saturday[1] <= 14)) && freq.saturday[1]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.saturday[2] > 14) && (freq.saturday[2] <= 21)) && freq.saturday[2]) || ("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.saturday[3] > 21 )&& (freq.saturday[3] <= 28)) && freq.saturday[3]) ||("*"))}
                              </div>
                          </div>
                          <div className="row align-items-start">
                              <div className="col align-self-start">
                                  {((((freq.saturday[4] > 28) && (freq.saturday[4] <= 31)) && freq.saturday[4] )||( "*"))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
  )
}

export default Calbody