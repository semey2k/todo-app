import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './TodoList.module.css';
import { removeTodo, toggleTodoComplete } from '../../store/todoSlice';
import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const TodoList = ({ asd }) => {
  const [todo, setTodo] = React.useState([]);
  const todos = useSelector((state) => state.todos.todos);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const active = todos.filter((el) => el.completed === false);
  const completed = todos.filter((el) => el.completed === true);

  useEffect(() => {
    if (asd === 'Active') {
      setTodo(active);
    } else if (asd === 'Completed') {
      setTodo(completed);
    }
  }, [asd]);

  return (
    <>
      {(asd === 'All' ? todos : todo).map((value) => {
        return (
          <ListItem
            sx={{ borderBottom: `2px solid ${darkMode ? '#393A4B' : '#E3E4F1'}` }}
            className={styles.list}
            key={asd.id}
            secondaryAction={
              <IconButton
                className={styles.close}
                
                onClick={() => dispatch(removeTodo(value.id))}
                edge="end"
                aria-label="comments">
                <CloseIcon style={{color : darkMode ? '#5B5E7E' : '#494C6B'}}/>
              </IconButton>
            }
            disablePadding>
            <ListItemButton
              role={undefined}
              onClick={() => dispatch(toggleTodoComplete(value.id))}
              dense>
              <ListItemIcon
                sx={{ paddingLeft: '20px', position: 'relative', width: '24px', height: '24px' }}>
                <Checkbox
                  edge="start"
                  checked={value.completed}
                  checkedIcon={<CheckIcon sx={{ color: 'white', fontSize: '14px' }} />}
                  tabIndex={-1}
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      sx={{
                        marginLeft: '-10px',
                        fontSize: '28px',
                        color: darkMode ? '#393A4B' : '#E3E4F1',
                      }}
                    />
                  }
                  sx={{
                    '&.Mui-checked': {
                      background: 'linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)',
                      width: '24px',
                      height: '24px',
                    },
                  }}
                />
              </ListItemIcon>
              <ListItemText
                className={value.completed ? styles.completed : ''}
                sx={{ color: darkMode ? '#4D5067' : '#D1D2DA' }}
                primary={
                  darkMode ? (
                    <Typography variant="body2" style={{ color: value.completed ? '#4D5067' : '#C8CBE7' }}>
                      {value.text}
                    </Typography>
                  ) : (
                    <Typography variant="body2" style={{ color: value.completed ? '#D1D2DA' : '#494C6B'}}>
                      {value.text}
                    </Typography>
                  )
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default TodoList;
