import './App.css'
import
ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls
} from 'reactflow'

function App() {
  return (
    <div style={styles.container}>
      <ReactFlowProvider>
        <ReactFlow>
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
  }
}

export default App
