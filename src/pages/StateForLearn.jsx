import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';

export default function StateForLearn() {
  // useState를 사용한 상태 관리
  const [count, setCount] = useState(0);
  
  // useRef를 사용한 값 참조
  const renderCount = useRef(0);

  // useEffect는 렌더링 후 실행되는 훅
  React.useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // 버튼 클릭 시 useState를 사용하여 상태 변경
  const handleIncrementState = () => {
    setCount(count + 1);
  };

  // 버튼 클릭 시 useRef를 사용하여 값 변경
  const handleIncrementRef = () => {
    renderCount.current = renderCount.current + 1;
    console.log('useRef value updated:', renderCount.current);
  };

  return (
    <Box m={2}>
    <div>
      <h1>React useState와 useRef 예시</h1>

      <div>
        <h2>useState 상태 관리</h2>
        <p>State로 관리되는 카운트: {count}</p>
        <button onClick={handleIncrementState}>useState로 카운트 증가</button>
      </div>

      <div>
        <h2>useRef 상태 추적</h2>
        <p>렌더링 횟수: {renderCount.current}</p>
        <button onClick={handleIncrementRef}>useRef로 카운트 증가 (렌더링 안 함)</button>
      </div>

      <div>
        <h2>useState와 useRef 비교</h2>
        <p><strong>useState:</strong> 값이 바뀌면 컴포넌트가 재렌더링 됩니다.</p>
        <p><strong>useRef:</strong> 값은 바뀌지만 컴포넌트가 재렌더링되지 않습니다.</p>
      </div>
    </div>
    </Box>
  );
}