import React, { useState, useEffect } from 'react';
import { 
  AppBar, Tabs, Tab, Box, Typography, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Paper, 
  Button, TextField, Modal 
} from '@mui/material';

// 메인 컴포넌트
export default function OpenAPI() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', mt: 3 }}>
      <AppBar position="static" >
        <Tabs value={selectedTab} onChange={handleTabChange} centered textColor="inherit">
          <Tab label="Post" />
          <Tab label="Users" />
          <Tab label="Todos" />
        </Tabs>
      </AppBar>

      <TabPanel value={selectedTab} index={0}>
        <Post />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <UsersTable />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <Todos />
      </TabPanel>
    </Box>
  );
}

// 탭 패널 컴포넌트
function TabPanel({ children, value, index }) {
  return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
}

// Popup Component
function Post() {
  
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      
      const fetchPosts = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) throw new Error('Failed to fetch');
          const data = await response.json();
          setPosts(data);
        } 
        catch (err) {
          setError(err);
        } 
        finally {
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);
  
    if (loading) 
      return <div>Loading...</div>;
    if (error) 
      return <div>Error: {error.message}</div>;
  
    return (
      <TableContainer 
          component={Paper} 
          sx={{ 
              margin: 'auto' // 자동으로 중앙 정렬
              ,width: '90%' // 전체 너비의 90% 사용
              ,mt: 2 // 위쪽 여백 (margin-top: 2rem)
              ,boxShadow: 3 // 살짝 그림자 효과 (선택 사항)
          }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  

// UsersTable Component
function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>ID</b></TableCell>
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Email</b></TableCell>
            <TableCell align="center"><b>Phone</b></TableCell>
            <TableCell align="center"><b>Website</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell align="center">{user.id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">{user.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Todos Component
function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then(setTodos)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? '✅ 완료' : '❌ 미완료'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
