import styles from "../../styles/Nav.module.scss";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Nav(styles: any) {
  const [isMobileMenu, setIsMobileMenu] = useState<any>(false);

  function handleMenuClick() {
    setIsMobileMenu(!isMobileMenu);
  }



  const myStyle = {
    backgroundColor: styles.primaryColor,
    border: "2px solid " + styles.secondaryColor
  }

  return (
    <div>
      <div /* className={styles.nav} */ style={myStyle}>
        <div className={styles.menuButton} onClick={handleMenuClick}>
          <FontAwesomeIcon
            style={{ height: "35px", width: "35px" }}
            icon={isMobileMenu ? faX : faBars}
          />
        </div>
        <ul className={styles.navLinksList}>
          {MenuItems &&
            MenuItems.map((item, index) => {
              if (item.cName == "nav-links")
                return (
                  <a className={styles.navLinks} href={item.url}>
                    <li key={index}>{item.title}</li>
                  </a>
                );
            })}
        </ul>
      </div>
      { }
      <ul className={isMobileMenu ? "active " + styles.navLinksListMobile : styles.navLinksListMobile}>
        {isMobileMenu &&
          MenuItems &&
          MenuItems.map((item, index) => {
            if (item.cName == "nav-links")
              return (
                <a className={styles.navLinksMobile} href={item.url}>
                  <li className={styles.navLinksMobileItem} key={index}>{item.title}</li>
                </a>
              );
          })}
      </ul>
    </div>
  );
}
