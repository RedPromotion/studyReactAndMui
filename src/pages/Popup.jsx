import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Button, TextField, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, Modal } from '@mui/material';
import { josa } from 'es-hangul';

export default function MuiExamples() {
  const [tabIndex, setTabIndex] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState('');

  const handleTabChange = (event, newValue) => setTabIndex(newValue);
  const handleSnackbarOpen = () => setOpenSnackbar(true);
  const handleSnackbarClose = () => setOpenSnackbar(false);
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* 왼쪽 탭 메뉴 */}
      <Tabs orientation="vertical" value={tabIndex} onChange={handleTabChange} sx={{ borderRight: 1, borderColor: 'divider', minWidth: 150 }}>
        <Tab label="Popup (Modal)" />
        <Tab label="Snackbar" />
        <Tab label="Dialog" />
        <Tab label="TextField" />
      </Tabs>
      
      {/* 오른쪽 컨텐츠 영역 */}
      <Box sx={{ flex: 1, p: 3 }}>
        {tabIndex === 0 && (
          <>
            <Typography variant="h6">Popup (Modal)</Typography>
            <Button variant="contained" onClick={handleModalOpen}>Open Modal</Button>
            <Modal open={openModal} onClose={handleModalClose}>
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
                <Typography variant="h6">팝업창</Typography>
                <Typography>{text ? `${text} 이(가) 입력되었습니다.` : '입력된 텍스트가 없습니다.'}</Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleModalClose}>Close</Button>
              </Box>
            </Modal>
          </>
        )}
        {tabIndex === 1 && (
          <>
            <Typography variant="h6">Snackbar</Typography>
            <Button variant="contained" onClick={handleSnackbarOpen}>Show Snackbar</Button>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose} message="This is a snackbar!" />
          </>
        )}
        {tabIndex === 2 && (
          <>
            <Typography variant="h6">Dialog</Typography>
            <Button variant="contained" onClick={handleDialogOpen}>Open Dialog</Button>
            <Dialog open={openDialog} onClose={handleDialogClose}>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogContent>
                <Typography>이것은 Dialog 예제입니다.</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </>
        )}
        {tabIndex === 3 && (
          <>
            <Typography variant="h6">TextField</Typography>
            <TextField label="Enter Text" fullWidth variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
          </>
        )}
      </Box>
    </Box>
  );
}
