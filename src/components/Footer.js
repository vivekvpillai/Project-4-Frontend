import React from 'react'

const Footer = () => {
    return(
        <>
            <div className = "footerDiv">
                <div className = "eric">
                    <h5>©Eric Reyes</h5>
                    <div className = "iconDiv">
                        <a href = "https://www.linkedin.com/in/eric-reyes-chi/" target="_blank" rel="noopener noreferrer"><img className = "footerIcon" src = "/linkedin.png"/></a>
                        <a href = "https://github.com/erey6" target="_blank" rel="noopener noreferrer"><img className = "footerIcon" src = "/github.png"/></a>
                    </div>
                </div>
                <div className = "vivek">
                    <h5>©Vivek Pillai</h5>
                    <div className = "iconDiv">
                        <a href = "https://www.linkedin.com/in/vivek-pillai-79077714b/" target="_blank" rel="noopener noreferrer"><img className = "footerIcon" src = "/linkedin.png"/></a>
                        <a href = "https://github.com/vivekvpillai" target="_blank" rel="noopener noreferrer"><img className = "footerIcon" src = "/github.png"/></a>
                    </div>
                </div>
                <div className = "moses">
                    <h5>©Moses Baek</h5>
                    <div className = "iconDiv">
                        <a href = "https://www.linkedin.com/in/moses-baek/" target="_blank" rel="noopener noreferrer"><img className = "footerIcon" src = "/linkedin.png" /></a>
                        <a href = "https://github.com/mobaek01" target="_blank" rel="noopener noreferrer" ><img className = "footerIcon" src = "/github.png"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
