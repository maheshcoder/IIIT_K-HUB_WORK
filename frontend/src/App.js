
import React from 'react';
import Footer from '.components./Folder./footer';
import Navbar from '.components./Navbar./navbar';
import Form  from ".components./Form./form";
import Folder from "./components./Form./folder"
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
