import { useState, useEffect, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RiSpeaker3Fill, RiSpeaker3Line } from 'react-icons/ri'
import { BsSoundwave } from 'react-icons/bs'
import { GrMoon, GrPowerReset, GrCirclePlay } from 'react-icons/gr'
import { GiSun, GiPauseButton } from 'react-icons/gi'
import QuoteMachine from '../components/quotes';
import sound from '../sounds/clock-alarm-8761.mp3'
import { Switch, Button, Slider } from 'antd';
import Faqs from '../components/modal';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

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
  const [iconLiving, setIconLiving] = useState(<GrCirclePlay />);
  const [speakerColor, setSpeakerColor] = useState('normal')

  const starter = useRef(null);

  let song = new Audio(sound)

  const ChangeTime = () => {
    if (timer > 0) {
      setTimer((timeLeft) => timeLeft - 1);
      setSpeakerColor('normal')
    }
    if (timer === 0) {
      if (whatIsIt === "SESSION") {
        console.log(timer);
        setWhatIsIt("BREAK");
        setTimer(breakT);
        setSession(1500);
        song.play();
        setSpeakerColor('crazy')
      } else {
        setTimer(session);
        setWhatIsIt("SESSION");
        setBreakT(300);
        song.play();
        setSpeakerColor('crazy')
      }
    }
  };
  useEffect(() => {
    if (!pause) {
      const interval = setInterval(ChangeTime, 1000)
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
      setIconLiving(<GiPauseButton />)
      startTimer();

    } else {
      e.preventDefault()
      setIconLiving(<GrCirclePlay />)
      // setCheck(false)
      stopTimer();
    }

  };
  const BreakChange = (value) => {
    setBreakT(value)
    if (whatIsIt === 'BREAK') {
      setTimer(value)
    }
  }
  const SessionChange = (value) => {
    setSession(value)
    if (whatIsIt === 'SESSION') {
      setTimer(value)
    }
  }
  return (

    <div>
      <Container fluid className={themeClass} id='watchBand'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}><div id='quotes'>
            <QuoteMachine />
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}> <div id='watch'>
            <BsSoundwave className={`speakers-${speakerColor}`} />  \<div id='clockFace'><h1 id='time-left'>{Converter(timer)}</h1></div>   <BsSoundwave className={`speakers-${speakerColor}`} />
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}> <div id='controls'>
            <div className='timeslide'>

              <div> <h6 className={whatIsIt === 'BREAK' ? 'bold' : 'no-bold'}>Break: &nbsp; {Converter(breakT)}</h6>
                <Slider className='switcheroo' min={0} max={3600} step={60} range={true} disabled={false} value={breakT}
                  onChange={BreakChange} tooltip={{ open: false }} />
              </div>
              <div><h6 className={whatIsIt === 'SESSION' ? 'bold' : 'no-bold'}>Session: &nbsp; {Converter(session)}</h6>
                <Slider className='switcheroo' min={0} max={3600} step={60} range={true} disabled={false} value={session}
                  onChange={SessionChange} tooltip={{ open: false }} />
              </div>
            </div>
            <div id='buttonControls'>
              <Button className='controls' shape="circle" icon={<GrPowerReset />} onClick={onResetClick} />
              <Switch id='toggler'
                className='controls'
                checkedChildren={<GiSun />}
                unCheckedChildren={<GrMoon />}
                defaultChecked
                onClick={() => {
                  themeClass === 'light' ? setThemeClass('dark') : setThemeClass('light')
                }}
              />
              <Button className='controls' shape='circle' icon={iconLiving} onClick={onChangePause} />
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>     <div id='title'>
            <h1>POMODORO</h1>
          </div>
            <Faqs />
            <footer><h5>&copy;2023 Korey's Coding Solutions</h5></footer>
          </Col>
        </Row>
      </Container>






    </div>
  )
}

