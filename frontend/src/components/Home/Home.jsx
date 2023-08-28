import { Home, theme } from "../../style";
import { Carousel } from 'antd';
import ofert1 from './../../imgs/oferta1.png'
import ofert2 from './../../imgs/oferta2.png'

const contentStyle = {
    margin: 0,
    height: '700px',
    width: '100%',
    lineHeight: '160px',
    textAlign: 'center',
    background: theme._E1EAED,
};
export default _ =>
    <Home>
        <Carousel>
            <div>
                <img src={ofert1} style={contentStyle}/>
            </div>
            <div>
                <img src={ofert2} style={contentStyle}/>
            </div>
        </Carousel>
    </Home>