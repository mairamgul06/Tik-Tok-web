import React, { useState, useRef } from 'react'
export default function VideoControls() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    function togglePlay(e) {
        e.stopPropagation();
        if (isPlaying) {
            videoRef.current?.pause();
            setIsPlaying(false)
        } else {
            videoRef.current?.play();
            setIsPlaying(true)
        }
    }
    const toggleMuted = () => setIsMuted(prev => !prev)
    return { videoRef, toggleMuted, togglePlay, setIsPlaying, isPlaying, isMuted, setIsMuted }
}
