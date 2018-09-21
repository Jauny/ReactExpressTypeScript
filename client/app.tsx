import * as React from "react"

interface Props {
  message: string
}
interface State {
  counter: number
}

class App extends React.Component<Props, object> {
  public state = {
    counter: 1,
  }

  constructor(props: Props) {
    super(props)
  }

  public incrementCounter = () => {
    this.setState({counter: ++this.state.counter})
  }

  public render = () => {
    return (<div>
      {this.state.counter}
      <button onClick={this.incrementCounter}>increment</button>
    </div>)
  }
}

export default App
