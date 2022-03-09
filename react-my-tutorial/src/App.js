import GroupDetail from "./propSample/GroupDetail";
import UserDetail from "./propSample/UserDetail";
import StateSample from "./stateSample/StateSample";
import StateSample2 from "./stateSample/StateSample2";
import StateSample3 from "./stateSample/StateSample3";

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
      {/* <UserDetail userAdress='Süleyman Seba caddesi' color='yellow' name="Pink" surname="Floyd" money={2000}></UserDetail>

      <GroupDetail group={group}></GroupDetail> */}

      {/* <StateSample></StateSample> */}
      {/* <StateSample2></StateSample2> */}
      <StateSample3></StateSample3>
    </>

  );
}

export default App;
