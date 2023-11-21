import React, { useState } from 'react';
import {db, storage } from '../firebase';
import {useCollection} from 'react-firebase-hooks/firestore'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    listAll
} from "firebase/storage";
import { useEffect } from 'react';
export default function UploadStorage() {
    const [file, setFile] = useState("");
    const [video, setVideo] = useState([]);
    const videoRef = ref(storage, 'videos/')
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        listAll(videoRef).then((Response) => {
            Response.items.forEach((item) => {
                getDownloadURL(item).then((URL) => {
                    setVideo((prev) => [...prev, URL])
                })
            })
        })
    }, []);


    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    function handleUpload() {
        if (!file) {
            alert("Пожалуйста выберите файл!")
        }
        const storageRef = ref(storage, `/videos/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
                    console.log(URL)
                });
            }
        );
    }
    


    function handleDag(e) {
        e.preventDefault();

    }
    function handleDrop(e) {
        e.preventDefault();
        const files = e.dataTransfer.files;
    }

    




    return {
        handleChange,
        handleUpload,
        percent, setPercent,
        video, setVideo,
        setFile, file,
        handleDrop,
        handleDag
    }
}
