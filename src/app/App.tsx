import { FC } from 'react'
import Counter from '@features/counter/ui/Counter'
import '@shared/styles/global.css'

const App: FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React + TypeScript + Vite</h1>
        <p>Edit <code>src/app/App.tsx</code> and save to test HMR</p>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  )
}

export default App 