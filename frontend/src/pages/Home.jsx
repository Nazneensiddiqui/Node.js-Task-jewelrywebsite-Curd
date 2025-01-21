import ved from "../vedio/ved.mp4"
import img1 from "../vedio/img1.webp"
import img2 from "../vedio/img2.webp"
import it1 from "../vedio/it1.webp"
import it2 from "../vedio/it2.webp"
import it3 from "../vedio/it3.webp"
import it4 from "../vedio/it4.webp"
import it5 from "../vedio/it5.webp"
import it6 from "../vedio/it6.webp"
import bn1 from "../vedio/bn1.webp"
import img7 from "../vedio/img7.webp"
import img8 from "../vedio/img8.webp"
import img9 from "../vedio/img9.webp"
import img10 from "../vedio/img10.webp"



const Home=()=> {
  const backgroundStyle = {
    backgroundImage: `url(${bn1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    
  };


  return (
    <>
    <div className="hero-section">
      {/* Left Side Content */}
      <div className="hero-text"align="center">
        <p style={{fontSize:"35px", color:"black"}}>Happy Lunar New Year</p>
        <p>
          Lunar New Year, Tiffany & Co. celebrates the bonds we share and the
          love that has inspired us since 1837.
        </p>
        <button className="shop-now-btn">Shop Now</button>
      </div>

      {/* Right Side Image */}
      <div className="hero-image">
      <video  width={800}controls autoPlay muted loop>
        <source src={ved} type="video/mp4" />
     </video>
      </div>
 </div>
 <div style={{display:"flex", justifyContent:"space-evenly" , marginTop:"50px", lineHeight:"10px"}} className="image">
    <div align="center">
        <img src={img1} height={600} width={500}/>
        <p  style={{fontSize:"30px",marginTop:"30px"}}>Elsa Peretti® Jewelry</p><br/>
        <a href="#">Shop Now </a>
    </div>
    <div align="center">
    <img src={img2} height={600} width={500}/>
    <p  style={{fontSize:"30px", marginTop:"30px"}}>   New In: Tableware</p><br/>
    <a href="#">Shop Now </a>
      </div>
 </div>
 <div align="center" style={{marginTop:"50px"}}>
    <h2>Shop by Category</h2>
    <p>Tiffany & Co. designs feature the world’s finest diamonds and unparalleled craftsmanship—signatures of the House for almost two centuries.</p>
    <div style={{display:"flex" , justifyContent:"space-evenly"}}>
<div><img src={it1} width={200} height={200}/>
<p>Necklaces & Pendants</p>
</div>
<div><img src={it2} width={200} height={200}/>
<p>Earrings </p></div>
<div><img src={it3} width={200} height={200}/>
<p>Bracelets</p></div>
<div><img src={it4} width={200} height={200}/>
<p>Rings</p></div>
<div><img src={it5} width={200} height={200}/>
<p>Engagement Rings</p></div>
<div><img src={it6} width={200} height={200}/>
<p>Home</p></div>
 </div>
 </div>
 <div style={backgroundStyle}>
<p style={{fontSize:"18px", marginLeft:"500px", marginBottom:"180px"  }}>Love & Engagement<br/>

Tiffany & Co. engagement rings feature<br/>
 the world’s finest diamonds and <br/>
 unparalleled craftsmanship—signatures of <br/>
 the House for almost two centuries.<br/>

Explore Engagement Rings </p>
</div>
<div align="center" style={{marginTop:"50px"}}>
  <h2>The Tiffany Icons</h2>
  <p>For 187 years, Tiffany’s iconic collections have helped an ever-changing world speak the ever-changing language of love.</p>
  <div style={{display:"flex" , justifyContent:"space-evenly"}}>
  <div><img src={img7} width={300} height={300}/>
  <p>HardWear by Tiffany</p>
  <a href="#">Shop Now </a></div>
  <div><img src={img8} width={300} height={300}/>
  <p>Lock by Tiffany</p>
  <a href="#">Shop Now </a></div>
  <div><img src={img9} width={300} height={300}/>
  <p>T by Tiffany</p>
  <a href="#">Shop Now </a></div>
  <div><img src={img10} width={300} height={300}/>
  <p>Knot by Tiffany</p>
  <a href="#">Shop Now </a></div>
</div>
</div>
<div align="center">
  <button style={{padding:"10px", width:"250px", border:"1px solid black", marginTop:"80px" , fontSize:"14px", color:"black"}}>Explore all Tiffany icon</button>
  <h1 align="center" style={{marginTop:"50px"}}>The Tiffany Experience</h1>
</div>
    </>
  );
}

export default Home;


