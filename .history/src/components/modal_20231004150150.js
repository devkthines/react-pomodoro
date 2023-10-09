import React, { useState } from 'react';
import { FloatButton, Modal } from 'antd';
import { QuestionOutlined } from '@ant-design/icons'
import AboutPomo from '../images/aboutPomo.png'
export default function Faqs() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <FloatButton icon={<QuestionOutlined />} onClick={() => setOpen(true)} />
            <Modal
                id="faqs"
                title="The Pomodoro Technique"

                // centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}

            >
                <h6>Beat procrastination and improve your focus one pomodoro at a time</h6>

                <img id='modalImg' src={AboutPomo} alt="" srcset="" />
                <p>The secret to effective time management is...thinking in tomatoes rather than hours. It may seem silly initially, but millions of people swear by the life-changing power of the Pomodoro Technique. (Pomodoro is Italian for tomato. 🍅)

                    This popular time management method asks you to alternate pomodoros — focused work sessions — with frequent short breaks to promote sustained concentration and stave off mental fatigue.

                    Try the Pomodoro Technique if you...

                    Find little distractions often derail the whole workday

                    Consistently work past the point of optimal productivity

                    Have lots of open-ended work that could take unlimited amounts of time (e.g., studying for an exam, researching a blog post, etc.)

                    Are overly optimistic when it comes to how much you can get done in a day (aren't we all 🙃)

                    Enjoy gamified goal-setting

                    Really like tomatoes</p>
<p>What is the Pomodoro Technique?
The Pomodoro Technique was developed in the late 1980s by then-university student Francesco Cirillo. Cirillo was struggling to focus on his studies and complete assignments. Feeling overwhelmed, he asked himself to commit to just 10 minutes of focused study time. Encouraged by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen timer, and the Pomodoro technique was born.

Though Cirillo went on to write a 130-page book about the method, its biggest strength is its simplicity:

Get a to-do list and a timer.

Set your timer for 25 minutes, and focus on a single task until the timer rings.

When your session ends, mark off one pomodoro and record what you completed.

Then enjoy a five-minute break.

After four pomodoros, take a longer, more restorative 15-30 minute break.

The 25-minute work sprints are the core of the method, but a Pomodoro practice also includes three rules for getting the most out of each interval:

Break down complex projects. If a task requires more than four pomodoros, it needs to be divided into smaller, actionable steps. Sticking to this rule will help ensure you make clear progress on your projects.

Small tasks go together. Any tasks that will take less than one Pomodoro should be combined with other simple tasks. For example, "write rent check," "set vet appointment," and "read Pomodoro article" could go together in one session.

Once a pomodoro is set, it must ring. The pomodoro is an indivisible unit of time and can not be broken, especially not to check incoming emails, team chats, or text messages. Any ideas, tasks, or requests that come up should be noted to return to later. A digital task manager like Todoist is a great place for these, but pen and paper will do, too.

In the event of an unavoidable disruption, take your five-minute break and start again. Cirillo recommends that you track interruptions (internal or external) as they occur and reflect on how to avoid them in your next session.

The rule applies even if you finish your task before the timer goes off. Use the rest of your time for overlearning, or improving skills or scope of knowledge. For example, you could spend the extra time reading up on professional journals or researching networking opportunities.

Todoist Tip
Keep an "Overlearning" project in Todoist with a list of tasks you can quickly choose from the next time you find yourself with pomodoro time to spare.

If the system seems simple, that’s because it is. The Pomodoro technique is all about getting your mind in the zone to finish your tasks.</p>
<h6>learn more </h6> <a target='_blank' href="https://todoist.com/productivity-methods/pomodoro-technique"></a>
            </Modal>
        </>
    )
}