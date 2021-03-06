import Typography from "typography"

const typography = new Typography({
  headerFontFamily: ["Nunito"],
  bodyFontFamily: ["Nunito"],
  overrideStyles: () => ({
    html: {
      overflowY: "initial",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
