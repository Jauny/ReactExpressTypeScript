const App = (message: string) => {
  const root = document.getElementById('root')
  root.innerHTML = message
}

App("bonjour ca va bien?")