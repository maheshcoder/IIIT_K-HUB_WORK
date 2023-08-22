
import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import Form  from "./form";
import Folder from "./folder"
function App() {  
  return (
    <div className="app">
    
      <Navbar />
    
    <div>
<Folder/>
    <Form  />
    


    </div>
      
      <Footer />
    </div>
  );
}

export default App;
