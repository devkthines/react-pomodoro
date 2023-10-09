import React, { useState } from 'react';
import { FloatButton,Modal  } from 'antd';
import {QuestionOutlined } from '@ant-design/icons'
import AboutPomo from '../images/aboutPomo.png'
export default function Faqs(){
    const [open, setOpen] = useState(false);
    return(
<>
<FloatButton icon={<QuestionOutlined />} onClick={() => setOpen(true)}/>
<Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
<img src="./images/aboutPomo.png" alt="" srcset="" />
      </Modal>
</>
    )
}