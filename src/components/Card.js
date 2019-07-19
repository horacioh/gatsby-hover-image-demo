/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

function Card({ file }) {
  return (
    file && (
      <div
        sx={{
          position: "relative",
          bg: "white",
          borderWidth: 1,
          borderColor: `smoke`,
          borderRadius: 2,
          boxSizing: "border-box",
          p: 2,
          width: 300,
          // paddingBottom: `50%`,
          overflow: "hidden",
          ":hover": {
            div: {
              opacity: 1,
            },
            img: {
              transform: `scale(1.2)`,
            },
          },
        }}
      >
        <div
          sx={{
            backgroundColor: `rgba(0,0,0,0.5)`,
            position: "absolute",
            top: 2,
            right: 2,
            bottom: 2,
            left: 2,
            zIndex: 2,
            transition: `opacity ease 0.25s`,
            opacity: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Img
          sx={{ img: { transition: `all .2s ease-in-out`, transitionDelay: 0 } }}
          fluid={file.childImageSharp.fluid}
        />
      </div>
    )
  )
}

export default Card
