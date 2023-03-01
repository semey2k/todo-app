import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { style } from '@mui/system';
import React, { useState } from 'react';
import styles from './CreateTodo.module.css';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeCompleted } from '../../store/todoSlice';
import TodoList from '../TodoList';
import { toggleDarkMode } from '../../store/darkModeSlice';

const CreateTodo = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [text, setText] = useState('');
  const [asd, setAsd] = useState('All');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  function handleText(ev) {
    setText(ev.target.value);
    if (ev.target.value) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  const addTask = () => {
    dispatch(addTodo(text));
    setText('');
    setIsEmpty(true);
  };

  console.log(darkMode);

  return (
    <>
      <Box sx={{ height: 300 }} className={darkMode ? styles.bg_dark : styles.bg_light}>
        <Container maxWidth="sm">
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '70px',
                marginBottom: '40px',
              }}>
              <Typography
                sx={{ textAlign: 'center', lineHeight: '40px' }}
                variant="h1"
                component={'h1'}
                color="white">
                TODO
              </Typography>
              {darkMode ? (
                <svg
                  style={{ cursor: 'pointer' }}
                  onClick={() => dispatch(toggleDarkMode())}
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                  />
                </svg>
              ) : (
                <svg
                  style={{ cursor: 'pointer' }}
                  onClick={() => dispatch(toggleDarkMode())}
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26">
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                  />
                </svg>
              )}
            </Box>
            <div style={{ position: 'relative' }}>
              <input
                value={text}
                onChange={(e) => handleText(e)}
                type="text"
                className={darkMode ? styles.input_dark : styles.input_light}
                placeholder="Create a new todo"
              />
              <span
                style={{ border: `1px solid ${darkMode ? '#393A4B' : '#E3E4F1'}` }}
                className={styles.input_circle}></span>
              {!isEmpty && (
                <IconButton onClick={addTask} className={styles.input_btn} aria-label="Example">
                  <SendIcon style={{ color: darkMode ? '#C8CBE7' : '#494C6B' }} />
                </IconButton>
              )}
            </div>
          </Box>
        </Container>
      </Box>
      <Box
        style={{
          backgroundColor: darkMode ? '#171823' : '#eeeff842',
          height: '100vh',
          maxWidth: '1440px',
          margin: '0 auto',
        }}>
        <Container maxWidth="sm" sx={{ position: 'relative', top: '-46px' }}>
          {todos.length > 0 && (
            <List
              sx={{
                width: '100%',
                bgcolor: darkMode ? '#25273D' : 'background.paper',
                borderRadius: '5px',
                boxShadow: darkMode
                  ? '0px 35px 50px -15px rgba(0, 0, 0, 0.5);'
                  : '0px 35px 50px -15px rgba(194, 195, 214, 0.5);',
                paddingBottom: '0px',
              }}>
              <TodoList asd={asd} />
              <ListItem className={styles.list_footer}>
                <span>{todos.filter((el) => el.completed === false).length} items left</span>
                <div className={styles.btns}>
                  <span
                    onClick={() => setAsd('All')}
                    style={{ marginRight: '18px', fontWeight: 700, cursor: 'pointer' }}>
                    All
                  </span>
                  <span
                    onClick={() => setAsd('Active')}
                    style={{ marginRight: '18px', fontWeight: 700, cursor: 'pointer' }}>
                    Active
                  </span>
                  <span
                    onClick={() => setAsd('Completed')}
                    style={{ fontWeight: 700, cursor: 'pointer' }}>
                    Completed
                  </span>
                </div>
                <span onClick={() => dispatch(removeCompleted())} style={{ cursor: 'pointer' }}>
                  Clear Completed
                </span>
              </ListItem>
            </List>
          )}
          {todos.length > 0 && (
            <div className={styles.mobile_btns} style={{background: darkMode ? '#25273D' : '#fff', boxShadow: darkMode ? '0px 35px 50px -15px rgba(0, 0, 0, 0.5)' : '0px 35px 50px -15px rgba(194, 195, 214, 0.5)'}}>
              <span
                onClick={() => setAsd('All')}
                style={{ marginRight: '18px', fontWeight: 700, cursor: 'pointer' }}>
                All
              </span>
              <span
                onClick={() => setAsd('Active')}
                style={{ marginRight: '18px', fontWeight: 700, cursor: 'pointer' }}>
                Active
              </span>
              <span
                onClick={() => setAsd('Completed')}
                style={{ fontWeight: 700, cursor: 'pointer' }}>
                Completed
              </span>
            </div>
          )}
        </Container>
      </Box>
    </>
  );
};

export default CreateTodo;
