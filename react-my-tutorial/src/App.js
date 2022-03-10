import SupplierPage from "./fetchSample/SupplierPage";
import GroupDetail from "./propSample/GroupDetail";
import UserDetail from "./propSample/UserDetail";
import StateSample from "./stateSample/StateSample";
import StateSample2 from "./stateSample/StateSample2";
import StateSample3 from "./stateSample/StateSample3";
import StateSample4 from "./stateSample/StateSample4";
import StateSample5 from "./stateSample/StateSample5";

function App() {

  const group = {
    name:'Moonspel',
    year:1992,
    detail:{
      albumCount:5
    }
  }

  
  
  return (
    <>
      <SupplierPage></SupplierPage>
    </>

  );
}

export default App;
