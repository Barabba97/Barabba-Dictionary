import React from 'react';
import './Definitions.css';
import Player from '../Player/Player';

const Definitions = ({ word, meanings, category, lightMode }) => {

    return (
        <div className="meanings">
            {meanings[0] && word && category === 'en' && (
                <Player className="player" meanings={meanings} />
            )}

            {word === '' ? (
                <span className="subTitle">Start by typing a word!</span>
            ) : (
                meanings.map((mean) => 
                    mean.meanings.map((item) => 
                        item.definitions.map((def) => (
                            <div
                                className="singleMeaning"
                                style={{ 
                                    backgroundColor: lightMode ? "#282C34" : "#F7F8FA",
                                    color: lightMode ? "white" : "black"
                                }}
                            >
                                <b>{ def.definition }</b>
                                <hr className="line" />
                                {def.examples && (
                                    <span>
                                        <b>Example :</b> { def.examples }
                                    </span>
                                )}
                                {def.synonyms && (
                                    <span>
                                        <b>Synonyms :</b> { def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definitions;