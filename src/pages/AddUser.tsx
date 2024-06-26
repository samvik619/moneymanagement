// src/pages/AddUser.tsx
import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';

const AddUser: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [share, setShare] = useState('');
  const history = useHistory();

  const addUser = async () => {
    const userData = {
      username,
      email,
      share,
      
    };

    try {
        console.log(userData)
      // Replace with your actual backend API endpoint
      const response = await fetch('https://your-backend-api/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      console.log('User added successfully');
      history.push('/home'); // Redirect to home page after successful addition
    } catch (error) {
      console.error('Failed to add user:');
      // Handle error, show user-friendly message
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <form onSubmit={(e) => { e.preventDefault(); addUser(); }}>
          <IonInput
            type="text"
            color="secondary"
            placeholder="Username"
            value={username}
            onIonInput={(e: any) => setUsername(e.target.value)}
            required
          />
          <IonInput
            type="email"
            color="secondary"
            placeholder="Email"
            value={email}
            onIonInput={(e: any) => setEmail(e.target.value)}
            required
          />
           <IonInput
           color="secondary"
            type="number"
            placeholder="Share"
            value={share}
            onIonInput={(e: any) => setShare(e.target.value)}
            required
          />
          <IonButton className='gold'  expand="block" type="submit">Add User</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddUser;
