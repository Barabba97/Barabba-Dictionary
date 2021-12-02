import React from 'react';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material';
import './Header.css';
import categories from '../../data/category';
import { debounce } from "lodash";

const Header = ({ setCategory, category, word, setWord, setMeanings, lightMode }) => {

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    }

    const handleText = debounce((text) => {
        setWord(text);
    }, 0);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#fff"
            },
            mode: lightMode ? "light" : "dark"
        },
      });

    return (
        <div className="header">
            <span className="title">{ word ? word : 'Dictionary' }</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search"
                        id="filled-basic"
                        label="Search a word"
                        variant="outlined" 
                        //value={ word }
                        onChange={ (e) => handleText(e.target.value) }
                    />
                    <TextField
                        select
                        className="select"
                        label="Language"
                        value={ category }
                        onChange={ (e) => handleChange(e) }
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={ option.label } value={ option.label }>{ option.value }</MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
};

export default Header;