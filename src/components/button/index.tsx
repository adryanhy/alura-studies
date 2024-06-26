import React from "react";
import style from "./Botao.module.scss"

interface IProps {
    children: React.ReactNode;
  }
  
  class Botão extends React.Component<IProps> {
    render() {
      return (
        <button className={style.botao}>
          {this.props.children}
        </button>
      )
    }
  }

  export default Botão