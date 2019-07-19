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
              transform: `scale(2)`,
            },
          },
        }}
      >
        <Img
          sx={{ 'img': { transitionDelay: 0, transitionDuration: '1s', transitionProperty: 'transform', transitionTimingFunction: 'ease-in-out' }}}
          fluid={file.childImageSharp.fluid}
        />
      </div>
    )
  )
}

export default Card
