import * as React from "react"
import Loading from "@kiwicom/orbit-components/lib/Loading";
import Alert from "@kiwicom/orbit-components/lib/Alert";
// import ClientOnly from "@kiwicom/nitro/lib/Components/ClientOnly";
import styled from "styled-components"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const DynamicComponentWithDelay = React.lazy(() => import('react-emojipicker'));

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
      {/* This loads dynamic component after page load, but displays it only after show is set */}
      <div hidden={!show}>
        {show &&
        <React.Suspense fallback={<Loading />}>
          <DynamicComponentWithDelay onEmojiSelected={setEmoji} />
        </React.Suspense>
        }
      </div>
      {emoji && <Alert onClose={() => setEmoji(null)} closable><Emoji>{emoji.unicode}</Emoji></Alert>}
    </div>
  )
}

export default Home
