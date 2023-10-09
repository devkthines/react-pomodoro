﻿import React, { useState } from 'react';
import { FloatButton,Modal  } from 'antd';
import {QuestionOutlined } from '@ant-design/icons'
import AboutPomo from '../images/aboutPomo.png'
export default function Faqs(){
    const [open, setOpen] = useState(false);
    return(
<>
<FloatButton icon={<QuestionOutlined />} onClick={() => setOpen(true)}/>
<Modal
    id="faqs"
        title="The Pomodoro Technique"

        // centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}

      >
<img id='modalImg' src={AboutPomo} alt="" srcset="" />
      </Modal>
</>
    )
}