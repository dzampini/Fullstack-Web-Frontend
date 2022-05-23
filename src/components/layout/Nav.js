import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css'



const Nav = (Props) => {
    return (
        
        <body>
        <div className="bandera">
            
                

        <nav>
                <ul className="menu">
                    <div className='cuadrouno'> <Link to="/"><h5>Home</h5></Link></div>
                    <div className='cuadrodos'><Link to="/Plantel"><h5> Plantel</h5></Link></div>
                    <div className='cuadrotres'><Link to="/Tacticas"><h5>Tàcticas</h5></Link></div>
                    <div className='cuadrocuatro'><Link to="/Contacto"><h5>Contacto</h5></Link></div>
                    <div className='cuadrocinco'><Link to="/Fixture"><h5>Fixture</h5></Link></div>
                </ul>  
            

            </nav> 
        </div>    
              
        </body>

        
    );
}
export default Nav;

