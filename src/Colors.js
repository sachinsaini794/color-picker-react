import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure()

const Colors = () => {

    const [colorNames , setcolorName] = useState(['#FFC312','#C4E538','#12CBC4','#FDA7DF','#ED4C67',
                                                '#F79F1F','#A3CB38','#1289A7','#D980FA','#B53471',
                                                '#EE5A24','#009432','#0652DD','#9980FA','#833471',
                                                '#EA2027','#006266','#1B1464','#5758BB','#6F1E51']);

    const colorCopy = (e) => {
        let color = e.target.innerText;
        
        if(navigator.clipboard){
            navigator.clipboard.writeText(color);
            navigator.clipboard.readText();
            toast.success(`You have copied ${color} value successfully`,
            {position: toast.POSITION.TOP_RIGHT});
            console.log(color);
        }
    }

    return (
      <div className="row">
        {colorNames.map((color) => (
          <div
            className="item"
            key={color}
            style={{ background: color }}
            onClick={colorCopy}
          >
            <div>{color}</div>
          </div>
        ))}
      </div>
    );
}

export default Colors;