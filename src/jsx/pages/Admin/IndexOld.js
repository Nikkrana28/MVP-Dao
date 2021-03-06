import React, { Component, Fragment } from 'react'
import arrowDown from './../../../images/arrow-down.png'
import AppHeader from '../../components/Elements/AppHeader'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  getMainChainInformation,
  initInstance,
  loginProcess,
} from '../../../web3/web3'
import {
  createEvent,
  getEvent,
  getActiveEvents,
  validateEvent,
  totalEvents,
  getEventOccurrenceBetAmount,
} from '../../../web3/betsMVPService'

import arrow_down from '../../../images/arrow-down.png'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabTop: 1,
      is_create: true,
      handelToggle: false,
      time: 0,
      endtime: 0,
      sub_category: 'Cricket',
      event1: '',
      event2: '',
      name: '',
      allevents: [],
      validatedevents:[],
      occured: 0,
      id: null,
      expiredevents:[]
    }
  }
  componentDidMount = async () => {
    var ts = Math.round((new Date()).getTime() / 1000);
    let x
    let event
    let active_event
    await initInstance()
    AOS.init()
    active_event = await totalEvents()
    for (let i = 0; i <= active_event; i++) {
      event = await getEvent(i)
      // console.log("events are", event)
      if (event[10] === false && event[11] == false) {
        this.state.allevents.push(event)
      }
      if(event[10] === true){
        this.state.validatedevents.push(event)
      }
      if(ts > event[6]){
        let x = Object.create(event)
        let zeroamount = await getEventOccurrenceBetAmount(event[0], 0)
        let oneamount = await getEventOccurrenceBetAmount(event[0], 1)
        let twoamount = await getEventOccurrenceBetAmount(event[0], 2)
        x.zeroamount = zeroamount
        x.oneamount = oneamount
        x.twoamount = twoamount
        this.state.expiredevents.push(x)
      }
    }
  }

  handelClick = (tab) => {
    this.setState({
      activeTabTop: tab,
      is_create: true,
    })
  }

  createPreview = () => {
    this.setState({
      is_create: false,
    })
  }
  handelToggle = (eventid) => {
    let handelToggle = this.state.handelToggle
    if(eventid == eventid){
    this.setState({
      handelToggle: eventid,
      id: eventid,
    })}
  }

  Onsubmit = async (event) => {
    event.preventDefault()
    const starttime = parseInt(
      (new Date(this.state.time).getTime() / 1000).toFixed(0),
    )
    const endtime = parseInt(
      (new Date(this.state.endtime).getTime() / 1000).toFixed(0),
    )
    console.log(
      'create event',
      this.state.sub_category,
      starttime,
      endtime,
      this.state.name,
      this.state.event1,
      this.state.event2,
    )
    const Event = {
      sub_category: this.state.sub_category,
      name: this.state.name,
      time: starttime + 60,
      endTime: endtime + 60,
      event1: this.state.event1,
      event2: this.state.event2,
    }
    console.log('created events', Event)
    try {
      if (
        Event.sub_category != '' &&
        Event.name != '' &&
        Event.event1 != '' &&
        Event.event2 != ''
      ) {
        let result = await createEvent(Event)

        if (result == true) {
          // alert('Event created successfully')
        } else {
          // alert('Failed')
        }
      } else {
        alert('Fill the details correctly')
      }
    } catch (error) {
      alert(error.message)
    }
  }

  timecovert = (time) => {
    const date = new Date(time * 1000)
    return date.toLocaleDateString('en-US')
  }

  teamfisrt = () => {
    this.setState({
      occured: 0,
    })
  }

  teamsecond = () => {
    this.setState({
      occured: 1,
    })
  }

  teamthird = () => {
    this.setState({
      occured: 2,
    })
  }

  preview = async (event_id, endtime) => {
    var ts = Math.round(new Date().getTime() / 1000)
    this.setState(
      {
        id: event_id,
      },
      () => {
        console.log('id is', this.state.id, this.state.occured)
      },
    )
    try {
      if (ts > endtime) {
        await validateEvent(event_id, this.state.occured)
      } else {
        alert('Envent is not ended yet')
      }
    } catch (e) {
      alert(e.message)
    }
  }
  
  render() {
    
    
    return (
      <Fragment>
        <AppHeader />
        <div className="container-fluid px-md-5 mt-2">
          <div className="space-100"></div>
          <div className="d-flex flex-wrap gap-4">
            <div className="me-md-4 me-2">
              <button
                className={`btn admin-match-button ${
                  this.state.activeTabTop == 1 ? ' active' : ''
                }`}
                onClick={() => this.handelClick(1)}
              >
                Create Events
              </button>
            </div>
            <div className="">
              <button
                className={`btn admin-match-button ${
                  this.state.activeTabTop == 2 ? ' active' : ''
                }`}
                onClick={() => this.handelClick(2)}
              >
                Validate Events
              </button>
            </div>
            <br/>
            <div className="me-md-4 me-2">
              <button
                className={`btn admin-match-button ${
                  this.state.activeTabTop == 3 ? ' active' : ''
                }`}
                onClick={() => this.handelClick(3)}
              >
                Validated Events
              </button>
            </div>
            <br/>
            <div className="me-md-4 me-2">
              <button
                className={`btn admin-match-button ${
                  this.state.activeTabTop == 4 ? ' active' : ''
                }`}
                onClick={() => this.handelClick(4)}
              >
                Expired Events
              </button>
            </div>
            
          </div>
          <div className="row">
            <div className="col-12">
              <div className="match-main-div">
                <div className="theam-bg-dark mt-5 mt-md-5 p-1 p-md-5">
                  {this.state.activeTabTop == 1 ? (
                    <form className="admin-form" onSubmit={this.Onsubmit}>
                      <>
                        <div className="mb-3 mb-md-5 maindiv">
                          <label for="category" className="form-label">
                            Category
                          </label>
                          <select
                            class="form-control"
                            id="sel1"
                            value={this.state.sub_category}
                            onChange={(e) =>
                              this.setState({ sub_category: e.target.value })
                            }
                          >
                            <option>Cricket</option>
                            <option>Soccer</option>
                            <option>Tennis</option>
                            <option>Rugby</option>
                            <option>American football</option>
                            <option>Hockey</option>
                            <option>Boxing</option>
                            <option>Basketball</option>
                            <option>Baseball</option>
                          </select>
                        </div>
                        <div className="mb-3 mb-md-5 maindiv">
                          <label for="Event" className="form-label">
                            Event
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Event"
                            value={this.state.name}
                            onChange={(e) =>
                              this.setState({ name: e.target.value })
                            }
                            aria-describedby=""
                          />
                        </div>
                        <div className="mb-3 mb-md-5 maindiv">
                          <label for="Start_date" className="form-label">
                            Start Time
                          </label>
                          <input
                            className="form-control"
                            id="Start_date"
                            type="datetime-local"
                            value={this.state.time}
                            onChange={(e) =>
                              this.setState({ time: e.target.value })
                            }
                            placeholder="In unix fomate"
                            aria-describedby=""
                          />
                        </div>
                        <div className="mb-3 mb-md-5 position-relative maindiv">
                          <label for="odd_1" className="form-label">
                            End Time
                          </label>
                          <input
                            className="form-control"
                            id="Start_date"
                            type="datetime-local"
                            value={this.state.endtime}
                            onChange={(e) =>
                              this.setState({ endtime: e.target.value })
                            }
                            placeholder="In unix fomate"
                            aria-describedby=""
                          />
                        </div>
                        <div className="mb-3 mb-md-5 position-relative maindiv">
                          <label for="odd_2" className="form-label">
                            Event one
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Start_date"
                            value={this.state.event1}
                            onChange={(e) =>
                              this.setState({ event1: e.target.value })
                            }
                            aria-describedby=""
                          />
                        </div>
                        <div className="mb-3 mb-md-5 position-relative maindiv">
                          <label for="odd_3" className="form-label">
                            Event Two
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Start_date"
                            value={this.state.event2}
                            onChange={(e) =>
                              this.setState({ event2: e.target.value })
                            }
                            aria-describedby=""
                          />
                        </div>
                        <div className="mb-3 mb-md-5 ">
                          <button className="btn" type="submit">
                            Create Event
                          </button>
                        </div>
                      </>
                    </form>
                  ) : this.state.activeTabTop == 2 ? (
                    <>
                      {this.state.allevents.map((item) => (
                        <div>
                          <div className="admin-card-view px-3 py-3 mb-5">
                            <p onClick={() => this.handelToggle(item[0])}>
                              <p className="title w-100">Event id {item[0]}</p>
                              {item[8]} vs {item[9]}
                            </p>
                            <div className="row mt-4">
                              <div className="col-md-7">
                                <div
                                  className="d-flex mb-3"
                                  onClick={() => this.handelToggle(item[0])}
                                >
                                  <p className="title w-100">Created</p>
                                  <p className="date text-end w-100">
                                    {this.timecovert(item[5])}
                                  </p>
                                </div>
                                <div
                                  className="d-flex mb-0"
                                  onClick={() => this.handelToggle(item[0])}
                                >
                                  <p className="title w-100">
                                    total participants
                                  </p>
                                  <p className="date text-end w-100">
                                    {item[14]}
                                  </p>
                                </div>
                                {this.state.handelToggle == item[0] ? (
                                  <div
                                    className="toggle-card"
                                    data-aos="fade-down"
                                    data-aos-duration="400"
                                    data-aos-easing="linear"
                                  >
                                    <div className="d-flex mt-5 mb-4">
                                      <h4 className="w-100">Winning odd</h4>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamfisrt()}
                                    >
                                      <p className="title w-100">{item[8]}</p>
                                      <p className="text-end w-100">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                        />
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamsecond()}
                                    >
                                      <p className="title w-100">{item[9]}</p>
                                      <p className="text-end w-100">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                        />
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamthird()}
                                    >
                                      <p className="title w-100">Draw</p>
                                      <p className="text-end w-100">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                        />
                                      </p>
                                    </div>
                                  </div>
                                ) : (
                                  ''
                                )}
                              </div>
                              <div className="col-md-1"></div>
                              

                              {this.state.handelToggle == item[0]  ? (
                                <div
                                  className="col-md-12 toggle-card"
                                  data-aos="fade-down"
                                  data-aos-duration="500"
                                  data-aos-easing="linear"
                                >
                                  <div className="d-flex mt-4">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        className="form-check-label title"
                                        for="flexCheckDefault"
                                      >
                                        I have previewed the selection
                                      </label>
                                    </div>
                                  </div>
                                  <div className="d-flex mt-5">
                                    <button
                                      className="btn button-2"
                                      onClick={() =>
                                        this.preview(item[0], item[6])
                                      }
                                    >
                                      validate
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                ''
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : this.state.activeTabTop == 3 ? (
                    <>
                      {this.state.validatedevents.map((item) => (
                        <div>
                          <div className="admin-card-view px-3 py-3 mb-5">
                            <p >
                              <p className="title w-100">
                                Event id {item[0]}
                              </p>
                              {item[8]} vs {item[9]}
                            </p>
                            <div className="row mt-4">
                              <div className="col-md-7">
                                <div
                                  className="d-flex mb-3"
                                  
                                >
                                  <p className="title w-100">Created</p>
                                  <p className="date text-end w-100">
                                    {this.timecovert(item[5])}
                                  </p>
                                </div>
                                <div
                                  className="d-flex mb-0"
                                  
                                >
                                  <p className="title w-100">
                                    total participants
                                  </p>
                                  <p className="date text-end w-100">
                                    {item[14]}
                                  </p>
                                </div>
                                {false ? (
                                  <div
                                    className="toggle-card"
                                    data-aos="fade-down"
                                    data-aos-duration="400"
                                    data-aos-easing="linear"
                                  >
                                    <div className="d-flex mt-5 mb-4">
                                      <h4 className="w-100">Winning odd</h4>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamfisrt()}
                                    >
                                      <p className="title w-100">{item[7]}</p>
                                      <p className="text-end w-100">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                        />
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamsecond()}
                                    >
                                      <p className="title w-100">{item[8]}</p>
                                      <p className="text-end w-100">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                        />
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamthird()}
                                    >
                                      <p className="title w-100">Draw</p>
                                      <p className="text-end w-100">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                        />
                                      </p>
                                    </div>
                                  </div>
                                ) : (
                                  ''
                                )}
                              </div>
                              <div className="col-md-1"></div>

                              {false ? (
                                <div
                                  className="col-md-12 toggle-card"
                                  data-aos="fade-down"
                                  data-aos-duration="500"
                                  data-aos-easing="linear"
                                >
                                  <div className="d-flex mt-4">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        className="form-check-label title"
                                        for="flexCheckDefault"
                                      >
                                        I have previewed the selection
                                      </label>
                                    </div>
                                  </div>
                                  <div className="d-flex mt-5">
                                    {/* <button
                                      className="btn button-2"
                                      onClick={() =>
                                        this.preview(item[0], item[6])
                                      }
                                    >
                                      validate
                                    </button> */}
                                  </div>
                                </div>
                              ) : (
                                ''
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : this.state.activeTabTop == 4 ? (
                    <>
                      {this.state.expiredevents.map((item) => (
                        <div>
                          
                          <div className="admin-card-view px-3 py-3 mb-5">
                            <p onClick={() => this.handelToggle(item[0])}>
                              {item[8]} vs {item[9]}
                              <img
                        src={arrowDown}
                        style={{marginLeft:'95%',cursor:"pointer"}}
                        width="24px"
                        className={this.state.showMyBet ? 'rotate-element' : ''}
                      />
                            </p>
                            <div className="row mt-4">
                              <div className="col-md-7">
                                <div
                                  className="d-flex mb-3"
                                  
                                >
                                  <p className="title w-100">Created</p>
                                  <p className="date text-end w-100">
                                    {this.timecovert(item[5])}
                                  </p>
                                </div>
                                <div
                                  className="d-flex mb-3"
                                  
                                >
                                  <p className="title w-100">Expired</p>
                                  <p className="date text-end w-100">
                                    {this.timecovert(item[6])}
                                  </p>
                                </div>
                                <div
                                  className="d-flex mb-0"
                                  
                                >
                                  <p className="title w-100">
                                    total participants
                                  </p>
                                  <p className="date text-end w-100">
                                    {item[14]}
                                  </p>
                                </div>
                                <div
                                  className="d-flex mb-0"
                                  
                                >
                                  <p className="title w-100">
                                    Pool size
                                  </p>
                                  <p className="date text-end w-100">
                                    {item[4]/10**18} BUSD
                                  </p>
                                </div>
                                {this.state.handelToggle == item[0] ? (
                                  <div
                                    className="toggle-card"
                                    data-aos="fade-down"
                                    data-aos-duration="400"
                                    data-aos-easing="linear"
                                  >
                                    <div className="d-flex mb-2">
                                      {/* <h4 className="w-100">Winning odd</h4> */}
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamfisrt()}
                                    >
                                      <p className="title w-100">{item[8]}</p>
                                      <p className="text-end w-100">
                                      <p className="date text-end w-100">{(Number(item.zeroamount)/10**18).toFixed(2)}&nbsp;BUSD</p>
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamsecond()}
                                    >
                                      <p className="title w-100">{item[9]}</p>
                                      <p className="text-end w-100">
                                        <p className="date text-end w-100">{(Number(item.oneamount)/10**18).toFixed(2)}&nbsp;BUSD</p>
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex mb-3"
                                      onClick={() => this.teamthird()}
                                    >
                                      <p className="title w-100">Draw</p>
                                      <p className="text-end w-100">
                                      <p className="date text-end w-100"> {(Number(item.twoamount)/10**18).toFixed(2)}&nbsp;BUSD</p>
                                      </p>
                                    </div>
                                  </div>
                                ) : (
                                  ''
                                )}
                              </div>
                              <div className="col-md-1"></div>

                              {false ? (
                                <div
                                  className="col-md-12 toggle-card"
                                  data-aos="fade-down"
                                  data-aos-duration="500"
                                  data-aos-easing="linear"
                                >
                                  <div className="d-flex mt-4">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        className="form-check-label title"
                                        for="flexCheckDefault"
                                      >
                                        I have previewed the selection
                                      </label>
                                    </div>
                                  </div>
                                  <div className="d-flex mt-5">
                                    {/* <button
                                      className="btn button-2"
                                      onClick={() =>
                                        this.preview(item[0], item[6])
                                      }
                                    >
                                      validate
                                    </button> */}
                                  </div>
                                </div>
                              ) : (
                                ''
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ):''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Index
