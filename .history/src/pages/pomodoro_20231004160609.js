import { useState, useEffect, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RiSpeaker3Fill, RiSpeaker3Line } from 'react-icons/ri'
import { GrMoon, GrPowerReset, GrCirclePlay } from 'react-icons/gr'
import { GiSun, GiPauseButton } from 'react-icons/gi'
import QuoteMachine from '../components/quotes';
import sound from '../sounds/clock-alarm-8761.mp3'
import { Switch, Button } from 'antd';
import Faqs from '../components/modal';

export default function ClockFace() {

  function Converter(time) {
    let initial = time;
    let minutes = Math.floor(initial / 60);
    let seconds = initial - minutes * 60;
    return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds)
  }

  const [whatIsIt, setWhatIsIt] = useState("SESSION")
  const [timer, setTimer] = useState(1500);
  const [breakT, setBreakT] = useState(300);
  const [session, setSession] = useState(1500);
  const [pause, setPause] = useState(true);
  const [themeClass, setThemeClass] = useState("light");
  const [iconLiving,setIconLiving] = useState(<GrCirclePlay/>);
  const starter = useRef(null);

  let song = new Audio(sound)

  const changeTime = () => {
    if (timer > 0) {
      setTimer((timeLeft) => timeLeft - 1);

    }
    if (timer === 0) {
      if (whatIsIt === "SESSION") {
        console.log(timer);
        setWhatIsIt("BREAK");
        setTimer(breakT);
        song.play()
      } else {
        setTimer(session);
        setWhatIsIt("SESSION");
        song.play()
      }
    }
  };
  useEffect(() => {
    if (!pause) {
      const interval = setInterval(changeTime, 1000)
      return () => clearInterval(interval)
    }
  })

  const startTimer = (e) => {
    // e.preventDefault()
    setPause(false);
  };
  const stopTimer = (e) => {
    // e.preventDefault()
    setPause(true);
    clearInterval(starter.current);
  };
  const onResetClick = (e) => {
    stopTimer();
    e.preventDefault();
    setBreakT(300);
    setTimer(1500);
    setSession(1500);
  };
  const onChangePause = (e) => {
    // e.preventDefault()
    if (pause) {
      e.preventDefault()
            setIconLiving(<GiPauseButton/>)
           startTimer();

    } else {
      e.preventDefault()
      setIconLiving(<GrCirclePlay/>)
    // setCheck(false)
      stopTimer();
    }

  };
  return (
    <div className={themeClass} id='watchBand'>
      <div id='quotes'>
        <QuoteMachine />
      </div>
      <div className='speakersDiv'>
        <RiSpeaker3Line className='speakers'></RiSpeaker3Line> <RiSpeaker3Line className='speakers'></RiSpeaker3Line>
      </div>
      <div id='watch'>
        <div id='clockFace'><h1 id='time-left'>{Converter(timer)}</h1></div>
      </div>

      <div id='timersliders'>
        <div className='sliders'>
          <h6 className={whatIsIt === 'BREAK' ? 'no-bold' : 'bold'}>Break: &nbsp; {Converter(breakT)}</h6>
          {/* <label id='break-label' className={whatIsIt === 'BREAK' ? 'no-bold' : 'bold'} htmlFor="breakSlide">Break: &nbsp; {Converter(breakT)}</label> */}
          <input type="range" id="breakSlide" name="breakSlide"

            min="0" max="3600" step="60" value={breakT} onChange={
              e => {
                setBreakT(e.target.value)
                if (whatIsIt === 'BREAK') {
                  setTimer(e.target.value)
                }
              }} />
        </div>
        <div className='sliders'>
          <h6 className={whatIsIt === 'SESSION' ? 'bold' : 'no-bold'}>Session: &nbsp; {Converter(session)}</h6>
          {/* <label id='session-label' className={whatIsIt === 'SESSION' ? 'bold' : 'no-bold'} htmlFor="sessSlide">Session: &nbsp; {Converter(session)}</label> */}
          <input type="range" id="sessSlide" name="sessSlide"
            min="0" max="3600" step="60" value={session}
            onChange={e => {
              setSession(e.target.value)
              if (whatIsIt === 'SESSION') {
                setTimer(e.target.value)
              }
            }} />
        </div>

      </div>
      <div className='speakersDiv'>
        <RiSpeaker3Line className='speakers'></RiSpeaker3Line> <RiSpeaker3Line className='speakers'></RiSpeaker3Line>
      </div>
      <div id='buttons'>

        <Button type="primary" shape="circle" icon={<GrPowerReset />} onClick={onResetClick} />

        <Switch
          checkedChildren={<GiSun />}
          unCheckedChildren={<GrMoon />}
          defaultChecked
          onClick={() => {
            themeClass === 'light' ? setThemeClass('dark') : setThemeClass('light')
          }}
        />
        <Button type="primary" shape='circle' icon={iconLiving} onClick={onChangePause}/>
      </div>
      <div id='title'>
        <h1>POMODORO</h1>
      </div>
      <Faqs/>
    </div>
  )
}

