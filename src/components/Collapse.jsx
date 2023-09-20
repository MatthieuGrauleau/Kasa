import  { useState, useRef } from "react"
import arrow_up from "../assets/arrow_up.png"
import arrow_down from "../assets/arrow_down.png"
import PropTypes from "prop-types";
import '../sass/components/_collapse.scss'

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)

    const handleToggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div
                onClick={handleToggleCollapse}
                className={`collapse ${isOpen ? "open" : ""}`}>
                <p>{title}</p>
                <img src={isOpen ? arrow_down : arrow_up}
                    alt={isOpen ? "fermer" : "ouvrir"} />
            </div>
        {isOpen && (
            <div
                ref={contentRef}
                className={`collapsible-content ${isOpen ? "open" : ""}`}>
                    <ul>{content}</ul>
            </div>
        )}
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired, 
  };
  