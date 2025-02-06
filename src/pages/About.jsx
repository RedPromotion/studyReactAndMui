import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Tabs, Tab } from "@mui/material";
import ReactPlayer from "react-player";

import loadMap2023 from "../assets/image/loadMap2023.png"; // 2023년 이미지 import

export default function About() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <Box m={2}>
            <Typography variant="h5">프론트엔드 정보</Typography>

            {/* 탭 영역 */}
            <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 2 }}>
                <Tab label="로드맵" />
                <Tab label="유튜브" />
                <Tab label="비어있는 탭" />
            </Tabs>

            {/* 탭 콘텐츠 */}
            {tabIndex === 0 && (
                <Card sx={{ maxWidth: 900, mt: 2 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={loadMap2023}
                        alt="2023년 로드맵"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            2023년 로드맵 설명
                        </Typography>
                    </CardContent>
                </Card>
            )}

            {tabIndex === 1 && (
             <Box display="flex" justifyContent="center" mt={2}>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=ui6EbPMMkyw&t=792s" 
                    controls 
                    width="100%" // 부모 요소에 맞게 조정
                    height="auto"
                    style={{ maxWidth: "800px", aspectRatio: "16/9" }} // 최대 너비 설정 & 16:9 비율 유지
                />
            </Box>         
            )}

            {tabIndex === 2 && (
                <Box mt={2}>
                    <Typography variant="body1" color="text.secondary">
                        이 탭은 아직 비어 있습니다.
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
