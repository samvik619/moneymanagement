import { trash, create, close } from 'ionicons/icons';
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonModal,
  IonInput,
  IonItemDivider,
} from '@ionic/react';
import './Tab1.css';
const Tab2: React.FC = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Group 1'},
    { id: 2, name: 'Group 2' },
    { id: 3, name: 'Group 3' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<{ id: number, name: string } | null>(null);
  const [newGroupName, setNewGroupName] = useState('');

  const deleteGroup = (id: number) => {
    const updatedGroups = groups.filter(group => group.id !== id);
    setGroups(updatedGroups);
  };

  const openEditModal = (group: { id: number, name: string }) => {
    setSelectedGroup(group);
    setNewGroupName(group.name);
    setShowModal(true);
  };

  const updateGroupName = () => {
    if (selectedGroup) {
      const updatedGroups = groups.map(group =>
        group.id === selectedGroup.id ? { ...group, name: newGroupName } : group
      );
      setGroups(updatedGroups);
      setShowModal(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Grouped List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {groups.map(group => (
          <IonList key={group.id}>
            <IonItemDivider>
              <IonLabel>{group.name}</IonLabel>
              <IonButton  slot="end" onClick={() => openEditModal(group)} fill="clear">
                <IonIcon icon={create} />
              </IonButton>
              <IonButton  slot="end" onClick={() => deleteGroup(group.id)} fill="clear">
                <IonIcon icon={trash} />
              </IonButton>
            </IonItemDivider>
          </IonList>
        ))}

        {/* Modal for Edit */}
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Edit Group</IonTitle>
              <IonButton slot="end" onClick={() => setShowModal(false)}>
                <IonIcon icon={close} />
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItemDivider>Name</IonItemDivider>
              <IonItem>
                <IonInput
                  value={newGroupName}
                  color="secondary"
                  placeholder="Enter Group Name"
                  onIonInput={(e: any) => setNewGroupName(e.target.value)}
                />
              </IonItem>
            </IonList>
            <IonButton expand="block" onClick={updateGroupName}>Update</IonButton>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
