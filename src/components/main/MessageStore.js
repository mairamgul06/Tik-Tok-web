import React, { useState, useEffect } from 'react'
import { auth, db, storage } from '../firebase';

import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
export default function MessageStore() {
    const [user] = useAuthState(auth);
    const [messages, setMessages] = useState([]);
    const { userUid } = auth.currentUser;
    const [message, setMessage] = useState("")
    const messagesRef = collection(db, "messages");

    const sendMessage = async (e) => {
        const { uid, photoURL, displayName } = auth.currentUser

        await addDoc(messagesRef, {
            text: message,
            createdAt: serverTimestamp(),
            uid: uid,
            photoURL: photoURL,
            displayName: displayName,


        })
        setMessage("");
    };

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages)

        });
        return () => data;

    }, []);
    return { message, setMessage, sendMessage, messages, setMessages, userUid, messagesRef, user }
}
