import { ReactComponent as Icon } from './assets/icons/logo.svg';

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <Icon className='w-11 h-11' />
      <div className='text-2xl'>Vitejs Boilerplate</div>
      <div className='text-xl'>React + TypeScript + Jest + TailwindCSS</div>
    </div>
  );
}

export default App;
