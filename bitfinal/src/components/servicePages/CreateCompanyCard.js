import { useState, useEffect } from "react";

import styles from './css/CreateCompanyCard.module.css';

function CreateReportCard({ name, email, isSelected, onClick, clearSelection }) {
  const [selected,setSelected]= useState(isSelected);


  useEffect(()=>{
    setSelected(isSelected);
  }, [isSelected])

  const onClickHandler = ()=>{
    clearSelection()
    setSelected(!isSelected);
    onClick();
  }

  return (
 <ul className={`${styles.companyCardContainer} ${selected? styles.selected : ''}`} onClick={onClickHandler} >
    <li>{name}</li>
    <li>{email}</li>
 </ul>
  );
}


export default CreateReportCard;
