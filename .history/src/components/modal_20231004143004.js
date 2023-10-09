import React, { useState } from 'react';
import { FloatButton,Modal  } from 'antd';
import {FaQuestionCircle} from 'react-icons/fa'
import {QuestionOutlined } from '@ant-design/icons'
export default function Faqs(){
    const [open, setOpen] = useState(false);
    return(
<>
<FloatButton icon={FaQuestionCircle} onClick={() => setOpen(true)}/>
<Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
</>
    )
}