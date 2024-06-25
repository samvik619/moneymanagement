import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useHistory } from 'react-router';
import { addCircleOutline } from 'ionicons/icons'; // Import the desired icon

const Tab1: React.FC = () => {
  const history = useHistory();

  const goToAddUserPage = () => {
    history.push('/add-user');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* Your main content here */}
      </IonContent>
      <IonButton className="round-button" expand="block" onClick={goToAddUserPage}>
      <IonIcon className="icon-button" icon={addCircleOutline} />
        
      </IonButton>
      
    </IonPage>
  );
};

export default Tab1;
