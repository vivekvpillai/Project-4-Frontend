import React from 'react'

const Footer = () => {
    return(
        <>
            <div className = "footerDiv">
                <div className = "eric">
                    <h5>©Eric Reyes</h5>
                    <div className = "iconDiv">
                        <a href = "https://www.linkedin.com/in/eric-reyes-chi/"><img className = "footerIcon" src = "/linkedin.png"/></a>
                        <a href = "https://github.com/erey6"><img className = "footerIcon" src = "/github.png"/></a>
                    </div>
                </div>
                <div className = "vivek">
                    <h5>©Vivek Pillai</h5>
                    <div className = "iconDiv">
                        <a href = "https://www.linkedin.com/in/vivek-pillai-79077714b/"><img className = "footerIcon" src = "/linkedin.png"/></a>
                        <a href = "https://github.com/vivekvpillai"><img className = "footerIcon" src = "/github.png"/></a>
                    </div>
                </div>
                <div className = "moses">
                    <h5>©Moses Baek</h5>
                    <div className = "iconDiv">
                        <a href = "https://www.linkedin.com/in/moses-baek/"><img className = "footerIcon" src = "/linkedin.png"/></a>
                        <a href = "https://github.com/mobaek01"><img className = "footerIcon" src = "/github.png"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
