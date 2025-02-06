import React, { useState, useRef } from 'react';
import { Box, Button, TextField, Modal, Typography } from '@mui/material';

export default  function Home() {

    const texts = [
        "ABOUT : 로드맵 소개",        
        "MUI : React MUi 연습",
        "OPEN_API : OPEN_API 연결 연습",
        "STATE : 상태 관리",
      ];

    return (
        <Box m={2}>
            <h1>Home</h1>
            <Typography>React 연습</Typography>
            {texts.map((text, index) => (
                <Typography key={index}>
                    {index + 1}. {text} {/* index는 0부터 시작하므로 1을 더함 */}
                </Typography>
            ))}
        </Box>
    );
}