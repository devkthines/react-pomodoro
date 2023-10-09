﻿import React, { useState } from 'react';
import { FloatButton,Modal  } from 'antd';
export default function Faqs(){
    const [open, setOpen] = useState(false);
    return(
<>
<FloatButton onClick={() => console.log('click')} />
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