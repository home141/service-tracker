import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
  container: { display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" },
  title: { fontSize: "2.25rem", fontWeight: "bold", textDecoration: "underline" },
})

export default function Home() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Hello, world!</h1>
    </div>
  )
}
