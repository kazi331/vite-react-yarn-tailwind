import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const showToast = () => {
    toast.success("This is a toast", { position: 'top-right', duration: 1000 })
  }

  return (
    <div>
      <h1 className='text-red-600 bg-green-400'>Hello World</h1>
      <h2 className='text-blue-500'>hello </h2>
      <button onClick={showToast}> Show Toast</button>
      <Toaster />
    </div>
  )
}

export default App
