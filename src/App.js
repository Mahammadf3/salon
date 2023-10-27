import './App.css';
import Home from './pages/Home';
import HairCut from './pages/HairCut';
import Makeup from './pages/Makeup';
import Massage from './pages/Massage';
import OilTreatment from './pages/OilTreatment';
import Padicure from './pages/Padicure';
import Wrapper from './pages/Wrapper';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './pages/Error';

import {db} from "./Firebase";
import {doc,collection,setDoc,onSnapshot} from "firebase/firestore";


function App() {

  async function handleBookNow(name,email,service,message){
        const dRef=doc(collection(db,"Booked-Clint-Details"));
        await setDoc(dRef,{
          name:name,
          email:email,
          service:service,
          message:message,
          BookedOn:new Date(),
        });



        onSnapshot(collection(db, "Booked-Clint-Details"), (snapShot) => {
          const data = snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // setOrderedItems(data);
          console.log("data===>",data);
        });
        
  }


  // ================================================================================================================
 
  // ================================================================================================================

      const routes=createBrowserRouter([
        {path:'/',
        element:<Wrapper/>,
        errorElement:<Error/>,
        children:[
          {
            index:true,
            element:<Home/>
          },
          {
            path:'/Haircut',
            element:<HairCut handleBookNow={handleBookNow}/>
          },
          {
            path:'/Makeup',
            element:<Makeup handleBookNow={handleBookNow}/>
          },
          {
            path:'/Massage',
            element:<Massage handleBookNow={handleBookNow}/>
          },
          {
            path:'/Oiltreatment',
            element:<OilTreatment handleBookNow={handleBookNow}/>
          },
          {
            path:'Padicure',
            element:<Padicure handleBookNow={handleBookNow}/>
          }
        ]
      },
      
      ])
  return (
    <div className="App" >
     {/* <Home/> */}
     <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
