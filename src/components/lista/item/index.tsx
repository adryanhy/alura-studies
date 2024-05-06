import style from '/Users/Adryan/Desktop/Alura/React/alura-studies/src/components/lista/Lista.module.scss'

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}) {
    return (
     <li className={style.item}>
       <h3> {tarefa} </h3>
       <span> {tempo} </span>
     </li>
    ) 
  }