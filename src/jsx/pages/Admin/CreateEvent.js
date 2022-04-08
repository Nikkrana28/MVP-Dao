import React, {useState} from 'react'
import { StepFour } from '../../components/Elements/StepFour';
import { StepOne } from '../../components/Elements/StepOne';
import { StepThree } from '../../components/Elements/StepThree';
import { StepTwo } from '../../components/Elements/StepTwo';
import MultiStep from "react-multistep";
import icon from '../../../images/icon-park-outline_history-query.png'
import { FiArrowLeft } from 'react-icons/fi'

export default function CreateEvent() {

    const [historyVisibility, setHistoryVisibility] = useState(false)

    const steps = [
        { name: "Name A", component: <StepOne /> },
        { name: "Email", component: <StepTwo /> },
        { name: "Password", component: <StepThree /> },
        { name: "Agreement", component: <StepFour /> }
    ];

    const completedCards = [
        {
            hashtags: "#SPORTS #SOCCER",
            title: "Chealsea  vs  Machester City",
            starts: "20 DEC 2020",
            ends: "20 DEC 2021",
            pool: "$0",
            reward: "$0",
        },
        {
            hashtags: "#SPORTS #SOCCER",
            title: "Chealsea  vs  Machester City",
            starts: "20 DEC 2020",
            ends: "20 DEC 2021",
            pool: "$0",
            reward: "$0",
        },
        {
            hashtags: "#SPORTS #SOCCER",
            title: "Chealsea  vs  Machester City",
            starts: "20 DEC 2020",
            ends: "20 DEC 2021",
            pool: "$0",
            reward: "$0",
        },
    ]

    const renderCompleted = (completedCards, index) => {
        return (
            <div className="card my-4" key={index} style={{backgroundColor:"#1c1c1c"}}>
        <div className="card-header text-secondary">
            <span>{completedCards.hashtags}</span>
            <h4 className='text-light fs-5'>{completedCards.title}</h4>
            <div className='justify-content-between d-flex'>
                <span>Starts: {completedCards.starts}</span>
                <span>Ends: {completedCards.ends}</span>
            </div>
        </div>
        <div className="card-body bg-dark text-light">
            <span className="card-text">ODDS</span>
            <p>CHEALSEA<br />MANCHESTER CITY<br/>DRAW</p>
            <span>POOL SIZE</span>
            <p>{completedCards.pool}</p>
            <span>CREATOR's REWARD</span>
            <p>{completedCards.reward}</p>
        </div>
    </div>
        )
    }

    return (
        <div className='createEvent-main py-3'>
            <div className="container-fluid d-flex justify-content-between">
                <button onClick={() => setHistoryVisibility(false)} id='history'><FiArrowLeft />&nbsp; BACK</button>
                <button onClick={() => setHistoryVisibility(true)} id='history'>History &nbsp;<img src={icon} alt="" /></button>
            </div>
            <div className='multistep rounded shadow pt-4 px-3 my-5 mx-auto' style={historyVisibility === false ? {display:"block"} : {display: "none"}}>
            <MultiStep steps={steps} nextStyle={{backgroundColor:"#fff", color:"#000", width:"100%", margin:"25px auto", display:"block", border:"none", padding:"8px 20px", borderRadius:"5px", fontWeight:"bold"}} prevStyle={{backgroundColor:"#fff", color:"#000", width:"100%", margin:"25px auto", display:"block", border:"none", padding:"8px 20px", borderRadius:"5px", fontWeight:"bold"}}/>
        </div>

            {/* HISTORY */}
            <div className="container-fluid completed mt-5" style={historyVisibility === true ? {display:"block"} : {display: "none"}}>
                <div className="col-md-3">
                    <select className="form-select bg-dark border-0 text-light py-3" id="specificSizeSelect">
                        <option selected>COMPLETED</option>
                        <option value="1">PENDING</option>
                    </select>
                </div>
                <div className="container">
                    {completedCards.map(renderCompleted)}
                </div>
            </div>
        </div>
    )
}