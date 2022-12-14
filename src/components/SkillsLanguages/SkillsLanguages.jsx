import React from 'react';
import PropTypes from 'prop-types';

import './SkillsLanguages.css';
import textLanguages from './commons/about-skills-text';

import JavaScriptIcon from './images/js.png';
import HtmlIcon from './images/html-5.png';
import CssIcon from './images/css.png';
import ReduxIcon from './images/redux.png';
import JestIcon from './images/jest.png';
import AngularIcon from './images/angular.png';
import ReactIcon from './images/react.png';
import MySqlIcon from './images/mysql.png';
import MongoIcon from './images/mongo.png';
import NodeIcon from './images/nodejs.png';

export default function SkillsLanguages({ readLanguageText }) {
  return (
    <div className="container-skills-languages">
      <div className="div-language">
        <div className="languages">
          <img
            src={HtmlIcon}
            alt="Fundo branco escrito HTML com escudo em baixo e o número 5 no meio"
            className="icon"
            name="html5"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
        <div className="languages">
          <img
            src={CssIcon}
            alt="Fundo branco escrito CSS com escudo em baixo e o número 3 no meio"
            className="icon"
            name="css3"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={JavaScriptIcon}
            alt="Fundo amarelo com as letras JS de JavaScript"
            className="icon"
            name="javascript"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
        <div className="languages">
          <img
            src={ReactIcon}
            alt="Fundo azul com um desenho similar a um próton em branco"
            className="icon"
            name="reactjs"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={ReduxIcon}
            alt="Fundo branco com desenho similar a um próton em roxo"
            className="icon"
            name="redux"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
        <div className="languages">
          <img
            src={JestIcon}
            alt="Fundo branco e desenho de um sapato de bobo da corte em vermelhor vinho"
            className="icon"
            name="jest"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={NodeIcon}
            alt="Fundo branco escrito Node grande em cima e JS embaixo"
            className="icon"
            name="nodejs"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
        <div className="languages">
          <img
            src={MySqlIcon}
            alt="Fundo branco com o desenho de uma baleia escrito MySQL em baixo"
            className="icon"
            name="mysql"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={MongoIcon}
            alt="Fundo branco com escudo triangular borda verde, fundo marrom e uma folha verde"
            className="icon"
            name="mongodb"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
        <div className="languages">
          <img
            src={AngularIcon}
            alt="Fundo branco com escudo todo vermelho e uma letra A branca na frente"
            className="icon"
            name="angular"
            onMouseOver={({ target }) => readLanguageText(`${textLanguages[target.name]}`)}
            onFocus={() => 0}
          />
        </div>
      </div>
    </div>
  );
}

SkillsLanguages.propTypes = {
  readLanguageText: PropTypes.func.isRequired,
};
