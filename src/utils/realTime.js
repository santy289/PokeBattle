import {
    ref, onValue, set, update,
  } from 'firebase/database';
  import { realTimeDB } from '../config/firebase';
  
  export async function listeningRealTime(channel, setProp) {
    if (channel) {
      let data;
      const refListening = ref(realTimeDB, channel);
      onValue(refListening, (snapshot) => {
        data = snapshot.val();
        setProp(data);
      });
    }
  }
  
  export async function emitRealTime(channel, object) {
    const refEmit = ref(realTimeDB, channel);
    set(refEmit, object);
  }
  export async function upDateRealTime(channel, object) {
    const refEmit = ref(realTimeDB, channel);
    update(refEmit, object, { merge: true });
  }