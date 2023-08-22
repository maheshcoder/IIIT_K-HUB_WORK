
import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Form from "./components/Form/form";
import Folder from "./components/Folder/folder";
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
