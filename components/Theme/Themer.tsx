import { faBridgeCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styles from "../../styles/Themer.module.scss";

interface IThemer {
  handleInput: (e: any) => void;
  headerStyles: any;
}

export default function Themer({ handleInput, headerStyles }: IThemer) {
  return (
    <div className="arch">
      <form className={styles.form}>
        <label className={styles.fields}>
          Navbar Primary
          <input
            id="color-primary"
            type="color"
            onChange={handleInput}
            value={headerStyles.primaryColor}
            className={styles.colorInput}
            name="nav-color-primary"
          />
        </label>
        <label>
          Navbar Secondary
          <input
            id="color-secondary"
            type="color"
            onChange={handleInput}
            value={headerStyles.secondaryColor}
            className={styles.colorInput}
            name="nav-color-secondary"
          />
          
        </label>
        <label>
          Nav Link Align
        <select id="justify-content" onChange={handleInput}>
            <option value="default" >Default</option>
            <option value="left" >Left</option>
            <option value="center" >Center</option>
            <option value="right" >Right</option>
          </select>
        </label>

        <label>
          Nav Link Gap
          <input type="range" id="gap" onChange={handleInput} min="1" max="5" value={headerStyles.gap}/>
        </label>
      </form>
    </div>
  );
}
