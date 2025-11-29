import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Buffer } from "buffer";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
window.Buffer = Buffer;
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
    <App />
    </QueryClientProvider>

  </StrictMode>,
)
