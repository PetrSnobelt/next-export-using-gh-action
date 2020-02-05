import * as React from "react"
import dynamic from "next/dynamic"
import Loading from "@kiwicom/orbit-components/lib/Loading";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import styled from "styled-components"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const DynamicComponent = dynamic(import("react-emojipicker"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const DynamicComponentWithDelay = dynamic(
  () => delay(3000).then(() => console.log("start loading emoji picker")).then((props) => {
    return import("react-emojipicker")
  }),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

function logEmoji (emoji) {
  console.log(emoji)
}

const Emoji = styled.div`
  text-align:center;
  font-size:30pt;
  `

function Home() {
  const [show, toggle] = React.useState(false)
  const [emoji, setEmoji] = React.useState(null)
  return (
    <div>
      <p>Dynamic component example!</p>
      { !show && <button onClick={() => toggle((prev)=> !prev)} >Show emoji picker</button>}
      {/* This loads Dynamic component only after show is set */}
      { show && <DynamicComponentWithDelay onEmojiSelected={setEmoji} />}
      {/* This loads dynamic component after page load, but displays it only after show is set */}
      <div hidden={!show}>
        <DynamicComponentWithDelay onEmojiSelected={setEmoji} />
      </div>
      {emoji && <Alert onClose={() => setEmoji(null)} closable><Emoji>{emoji.unicode}</Emoji></Alert>}
    </div>
  )
}

export default Home
