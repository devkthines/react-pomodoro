import React, { useState } from 'react';
import { FloatButton, Modal } from 'antd';
import { QuestionOutlined } from '@ant-design/icons'
import AboutPomo from '../images/aboutPomo.png'
export default function Faqs() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <FloatButton className='floater' icon={<QuestionOutlined />} onClick={() => setOpen(true)} />
            <Modal
                id="faqs"
                title="The Pomodoro Technique"
                footer={null}
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                style={{top:20}}
            >
                <h3>Beat procrastination and improve your focus one pomodoro at a time</h3>
                <img id='modalImg' src={AboutPomo} alt="" srcset="" />
                <p>
                    The secret to effective time management is...thinking in tomatoes rather than hours.
                    It may seem silly initially, but millions of people swear by the life-changing power of the Pomodoro Technique.
                    Pomodoro is Italian for tomato. 🍅
                    <br />
                    This popular time management method asks you to alternate pomodoros — focused work sessions —
                    with frequent short breaks to promote sustained concentration and stave off mental fatigue.
                    <br />
                    Try the Pomodoro Technique if you...
                    Find little distractions often derail the whole workday
                    Consistently work past the point of optimal productivity
                    Have lots of open-ended work that could take unlimited amounts of time (e.g., studying for an exam, researching a blog post, etc.)
                    Are overly optimistic when it comes to how much you can get done in a day (aren't we all 🙃)
                    Enjoy gamified goal-setting
                    Really like tomatoes
                </p>
                <h4>learn more <a target='_blank' href="https://todoist.com/productivity-methods/pomodoro-technique">here</a></h4>
            </Modal>
        </>
    )
}