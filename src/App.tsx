import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import '@coinbase/onchainkit/styles.css';
import { Avatar, Identity, Name, Badge, Address } from '@coinbase/onchainkit/identity';
import { WalletComponents } from './ConnectButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Identity
  address="0xaf59B12ea11914A0373ffbb13FF8b03F8537C599"
  schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
>
  <Avatar />
  <Name>
    <Badge />
  </Name>
  <Address />
</Identity> 
{/* <ConnecBut  */}
<WalletComponents />
    </>
  )
}

export default App