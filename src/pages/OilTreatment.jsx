import React ,{useState} from "react";
import styles from "../styles/OilTreatment.module.css"

export default function OilTreatment({handleBookNow}){
  const [isclicked,setIsclicked]=useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [service,setService]=useState("Haircut");
  const [message,setMessagse]=useState("");
  const handleClick=()=>{
  }
  const handleSubmit=()=>{
    setIsclicked(false);
    handleBookNow(name,email,service,message);
    setName("");
    setEmail("");
    setMessagse("");
    setService("Haircut")
  }
  return (
    <div className={styles.HairCut}>
      <div className={styles.imgs}>
        <div className={styles.imgd}>
          {/* Your image content goes here */}
        </div>
      </div>
      <div className={styles.name}>
        <div className={styles.topName}>Your Barber Shop</div>
        <div className={styles.bottomName}>Best in the Town</div>
      </div>
      <div className={styles.bookNowDiv}>
        {isclicked?<form onMouseLeave={handleClick} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className={styles.inputField} required value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder="example@email.com" className={styles.inputField} required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <select className={styles.selectField} value={service} onChange={(e)=>setService(e.target.value)}>
          <option value="Hairuut">HairCut</option>
            <option value="Makeup">Makeup</option>
            <option value="Padicure">Padicure</option>
            <option value="Massage">Massage</option>
            <option value="Oiltreatment">Oiltreatment</option>
          </select>
          <textarea placeholder="Message" className={styles.textArea} cols={30} rows={10} value={message} onChange={(e)=>setMessagse(e.target.value)}/>
          <button type="submit" className={styles.submitButton} >
          {/* // onClick={handleClick} */}
            Book Now
          </button>
        </form>:<div className={styles.hoverDiv} onMouseEnter={()=>setIsclicked(true)}>Book Now</div>}
        
        
      </div>
    </div>
    )
}