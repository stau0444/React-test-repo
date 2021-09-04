import React from "react";
import styles from "./WarnButton.module.css";
import classNames from "classnames/bind"


class WarnButton extends React.Component{
    state = {
        loading:false
    }
    render(){
        const tx =classNames.bind(styles);
        const {loading} = this.state
        return(
            <div>
                <button 
                    className={tx('WarnButton',{loading})}
                    onClick={this.startLoading}
                >Warn</button>
            </div>
        );
    }
    startLoading = () => {
        this.setState(
            {loading : true}
        )
        setTimeout(()=>{
            this.setState(
               {loading:false}
            )
        },1000)
    }
    
}

export default WarnButton;