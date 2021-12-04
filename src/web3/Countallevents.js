import { get } from 'jquery'
import React, { Component } from 'react'
import { totalEvents, getEvent,getActiveEvents, bettorscountspercent, AmountStackOnEventByaUser } from './betsMVPService'
let newevents = 0

 export const TotalEventsCount = async() => {
          
          let check
          let check2
          let one
          let two 
          let zero
          let events = await getActiveEvents();
          let getevents = []
          for (let i = 0; i < events.length; i++) {
              check2 = await getEvent(events[i])
            if(check2[10] == false){
              console.log('creator is ', check2)
              check = Object.create(check2)
              zero = await bettorscountspercent(check2[0],0,check2[14])
              one = await bettorscountspercent(check2[0],1,check2[14])
              two = await bettorscountspercent(check2[0],2,check2[14])
              let stakeonevent = await AmountStackOnEventByaUser(check2[0])
              let stake =  (stakeonevent*100)/check2[4]
              let potentialwinnings = Number(((check2[4]-stakeonevent)*stake)/10**18).toFixed(2)
                check.zero = zero
                check.one = one 
                check.two = two
                check.potential_wins = potentialwinnings
                check.id = check2[0]
                check.name = check2[3] 
                check.validate = check2[10]
                check.poolsize = check2[4]
                check.starttime = check2[5]
                check.endtime = check2[6]
                check.teamone = check2[8]
                check.teamtwo = check2[9]
                check.subcategory = check2[2]
                check.Categories = check2[1]
                check.BettorsCount = check2[14]
                check.creator = check2[17]
                getevents.push(check)
                newevents = getevents
              
             window.localStorage.setItem('events',JSON.stringify(getevents))
            }
            }
          }

export const addingnewevents = async() => {
  let check2
  let check
  let one
  let two 
  let zero
  let activeEvents = await getActiveEvents();
  let newevent = await totalEvents();
  let decodestoredevents = JSON.parse(window.localStorage.getItem('events'))
  // console.log('adding new events',decodestoredevents.length, activeEvents.length)
  if(activeEvents.length > decodestoredevents.length) {
              check2 = await getEvent(newevent-1)
              check = Object.create(check2)
              zero = await bettorscountspercent(check2[0],0,check2[14])
              one = await bettorscountspercent(check2[0],1,check2[14])
              two = await bettorscountspercent(check2[0],2,check2[14])
              let stakeonevent = await AmountStackOnEventByaUser(check2[0])
              let stake =  (stakeonevent*100)/check2[4]
              let potentialwinnings = Number(((check2[4]-stakeonevent)*stake)/10**18).toFixed(2)
            
                check.zero = zero
                check.one = one 
                check.two = two
                check.potential_wins = potentialwinnings
                check.id = check2[0]
                check.name = check2[3] 
                check.validate = check2[10]
                check.poolsize = check2[4]
                check.starttime = check2[5]
                check.endtime = check2[6]
                check.teamone = check2[8]
                check.teamtwo = check2[9]
                check.subcategory = check2[2]
                check.Categories = check2[1]
                check.BettorsCount = check2[14]
                check.creator = check2[17]
                decodestoredevents.push(check)
                window.localStorage.setItem('events',JSON.stringify(decodestoredevents))
      }
}

export const updatingeventdata = async(id) => {
  let check2
  let check
  let one
  let two 
  let zero
  let getevents = []
  let events = await totalEvents();
  let decodestoredevents = JSON.parse(window.localStorage.getItem('events'))
  console.log('adding new events',decodestoredevents.length, events)
  for(let i = 0; i < decodestoredevents.length; i++){
      if(Number(decodestoredevents[i].eventid) == id){
              check2 = await getEvent(i);
              check = Object.create(check2)
              zero = await bettorscountspercent(check2[0],0,check2[13])
              one = await bettorscountspercent(check2[0],1,check2[13])
              two = await bettorscountspercent(check2[0],2,check2[13])
              let stakeonevent = await AmountStackOnEventByaUser(check2[0])
              let stake =  (stakeonevent*100)/check2[4]
              let potentialwinnings = Number(((check2[4]-stakeonevent)*stake)/10**18).toFixed(2)
              check.zero = zero
              check.one = one 
              check.two = two
              check.potential_wins = potentialwinnings
              check.id = check2[0]
              check.name = check2[3] 
              check.validate = check2[9]
              check.poolsize = check2[4]
              check.starttime = check2[5]
              check.endtime = check2[6]
              check.teamone = check2[7]
              check.teamtwo = check2[8]
              check.subcategory = check2[2]
              check.Categories = check2[1]
              check.BettorsCount = check2[13]
              check.creator = check2[16]
              
              // decodestoredevents[i] = check
      }
              // window.localStorage.setItem('events',JSON.stringify(decodestoredevents))
    }
  }




// class TotalEventsCount extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         totalevents: 0,
//         eventcount:0
//         };
//       }
//     componentDidMount = () => { 

        
//     };
//     counttotalevents = async() => {
//         const newevents = []
//         let check
//         let check2
//         let one
//         let two 
//         let zero
//         let events = await totalEvents();
//         this.setState({
//           eventcount: events
//         })
//         let getevents
//         for (let i = 0; i <= events; i++) {
//             check2 = await getEvent(i)
//             check = Object.create(check2)
//             zero = await bettorscountspercent(check2[0],0,check2[12])
//             one = await bettorscountspercent(check2[0],1,check2[12])
//             two = await bettorscountspercent(check2[0],2,check2[12])
//             let stakeonevent = await AmountStackOnEventByaUser(check2[0])
//             let stake =  (stakeonevent*100)/check2[4]
//             let potentialwinnings = Number(((check2[4]-stakeonevent)*stake)/10**18).toFixed(2)
//             // console.log('potential winning', potentialwinnings)
           
//               check.zero = zero
//               check.one = one 
//               check.two = two
//               check.potential_wins = potentialwinnings
//               check.id = check2[0]
//               check.name = check2[3] 
//               check.validate = check2[9]
//               check.poolsize = check2[4]
//               check.starttime = check2[5]
//               check.endtime = check2[6]
//               check.teamone = check2[7]
//               check.teamtwo = check2[8]
//               check.subcategory = check2[2]
//               check.Categories = check2[1]
//               check.BettorsCount = check2[12]
//               newevents.push(check)
//               this.setState({
//                 totalevents: newevents,
//               })
            
//             console.log('all events are', this.state.totalevents)
//           }
//     }


//   render() {
//     return this.state.eventcount
//   }
// }
// export default TotalEventsCount