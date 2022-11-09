import { useState } from "react"

const ImageMagnifier = ({
    src,
    width,
    height,
    magnifierHeight = 100,
    magnifierWidth = 100,
    zoomLevel = 2.5
}: {
    src: string
    width: number
    height: number
    magnifierHeight: number
    magnifierWidth: number
    zoomLevel: number
}
) => {

    const [[x, y], setXY] = useState([0, 0])
    const [[imgWidth, imgHeight], setSize] = useState([0, 0])
    const [showMagnifier, setShowMagnifier] = useState(false)

    const handleMouseEnter = (e: any) => {
        const element = e.currentTarget;
        const {width, height} = element.getBoundClientRect()
        setSize([width, height])
        setShowMagnifier(true)
    }

    const handleMouseMove = (e: any) => {
        const element = e.currentTarget
        const { top, left } = element.getBoundingClientRect()
        const x = e.pageX - left - window.scrollX
        const y = e.pageY - top - window.scrollY
        setXY([x, y])
    }

    return (
        <div style={{ position: "relative" }}>
            <img
                src={src}
                alt={"img"}
                onMouseEnter={(e) => handleMouseEnter(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={() => setShowMagnifier(false)}
            ></img>
            <div
                style={{
                    zIndex: 1,
                    display: showMagnifier ? "" : "none",
                    position: "absolute",
                    pointerEvents: "none",
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,
                    top:  `${y - magnifierHeight}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    border: "1px solid lightgray",
                    borderRadius: '100%',
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                }}
            ></div>
        </div>
    )
}

export default ImageMagnifier