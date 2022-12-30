import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useRef,useState} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

<script>
  
</script>

const Tab1: React.FC = () => {
  // function animate(props){
  //   return();
  // }

  const [calculation,setCalculation]=useState<number>();


  const input2=useRef<HTMLIonInputElement>(null);
  // const input1=useRef<HTMLIonLabelElement>(null);
 
  // const [open]=useState(false);
  const input1=useRef<HTMLIonInputElement>(null);
  
  let finalinput;
  let enterinput;
 let enterinput2;
let calculate=()=>{
  
   enterinput=+input1.current!.value!;
   enterinput2=+input2.current!.focus();
  //  enterinput2=+input2.current!.value!;
  
  if(!enterinput){
    return;
  }
  
  finalinput=++enterinput;
    setCalculation(finalinput);
    // a=enterinput;
   
};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className=""size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
       
        <div className="square"></div>
        <IonRow>
            <IonCol>
              <IonItem>
              <IonInput  value={1} ref={input1}>{calculation}</IonInput>
              
           
              </IonItem>
              
            </IonCol>
         </IonRow>
          
        <IonRow>
            <IonCol>
          
            <IonButton onClick={calculate}>Increase Value</IonButton>
            {/* <IonButton onClick={() => c(myState + 1)}>Increase Value</IonButton> */}
          
            </IonCol>
         </IonRow>
         {<IonRow>
            <IonCol>
       
            <IonInput  ref={input2} value={calculation}></IonInput>
         
            </IonCol>
         </IonRow>} 

      </IonContent>
      
    </IonPage>
    
  );
};

export default Tab1;
