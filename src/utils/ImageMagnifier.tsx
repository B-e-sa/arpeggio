import { useState } from "react"

const ImageMagnifier = ({ src = '', width = '', height = '', magnifierHeight = 100, magnifieWidth = 100, zoomLevel = 1.5 }) => {

    const [[x, y], setXY] = useState([0, 0])
    const [[imgWidth, imgHeight], setSize] = useState([0, 0])
    const [showMagnifier, setShowMagnifier] = useState(false)

    return (
        <div style={{
            position: "relative"
        }}>
            <img
                src={src}
                onMouseEnter={(e) => {
                    const element = e.currentTarget;
                    const { width, height } = element.getBoundingClientRect()
                    setSize([width, height])
                    setShowMagnifier(true)
                }}
                onMouseMove={(e) => {
                    const element = e.currentTarget
                    const { top, left } = element.getBoundingClientRect()

                    const x = e.pageX - left - window.scrollX
                    const y = e.pageY - top - window.scrollY
                    setXY([x, y])
                }}
                onMouseLeave={() => {
                    setShowMagnifier(false)
                }}
                alt={"img"}
            ></img>
            <div
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",
                    pointerEvents: "none",
                    height: `${magnifierHeight}px`,
                    width: `${magnifieWidth}px`,
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifieWidth / 2}px`,
                    opacity: "1",
                    border: "1px solid lightgray",
                    borderRadius: '100%',
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
            ></div>
        </div>
    )
}

export default ImageMagnifier