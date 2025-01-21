

const Header=()=>{
    return(
        <>
        <div className="notification-bar">
      <p>
        Purchases made on this site will ship to U.S. addresses only. Do you want to shop the U.S. site?
      </p>
      <div className="actions">
        <a href="#" className="shop-link">
          Shop the U.S. site
        </a>
        <span>Or</span>
        <select className="location-select">
          <option>Choose location</option>
          <option>India</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
        <button className="close-button">×</button>
      </div>
    </div> 
        </>
    )
}
export default Header;