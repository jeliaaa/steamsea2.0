"use client";

import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseconfig';
import styles from './page.module.scss'
import Image from 'next/image';

const YourComponent = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
    const [showPopUp, setShowPopUp] = useState(false)
    const [lastImagesLength, setLastImagesLength] = useState(0)
    const [currentImages, setCurretnImages] = useState(0)

    useEffect(() => {
        setLastImagesLength(imageUrls.length)
    }, [imageUrls])

    useEffect(() => {
        if (lastImagesLength !== currentImages) {
            setShowPopUp(true)
            setCurretnImages(lastImagesLength)
        }
    }, [imageUrls, lastImagesLength])

    const fetchImages = async () => {
        const { data: files, error } = await supabase.storage
            .from('images')
            .list();

        if (error) {
            console.error('Error fetching images:', error.message || error);
            setError('Could not fetch images');
            setLoading(false);
            return;
        }

        const urls = files.map(file => {
            const { data } = supabase.storage.from('images').getPublicUrl(file.name);

            return data.publicUrl;
        }).filter(Boolean);

        setImageUrls(urls);
        setLoading(false);
    };

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
    }, [imageUrls])

    useEffect(() => {
        const interval = setInterval(() => {
            fetchImages()
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (

        showPopUp ?
            <div className={styles.popUp
            } >
                <span className={styles.span}>
                    არალეგალური თევზჭერა დაფიქსირდა მე-3 კამერაში!
                </span>
                <iframe className={styles.iFrame} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2982.4971648727847!2d41.6267781!3d41.623384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40678fa30c545f0b%3A0xa1da60dfa7c982da!2z4YOi4YOU4YOl4YOc4YOd4YOe4YOQ4YOg4YOZ4YOYIOGDkeGDkOGDl-GDo-GDm-GDmA!5e0!3m2!1ska!2sge!4v1729773524595!5m2!1ska!2sge" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <button type='button' className={styles.button} onClick={() => setShowPopUp(false)} >
                    OK
                </button>
            </div > : <div className={styles.container}>
                <div className={styles.boxesWrapper}>
                    <div className={styles.grayBox}></div>
                    <div className={styles.grayBox}></div>
                    <div className={styles.grayBox}></div>
                    <div className={styles.grayBox}></div>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.vidoeContainer}>
                        <h1>Net Watch</h1>
                        <div className={styles.videoBox}>
                            {/* <Image /> */}
                        </div>
                    </div>
                    <div className={styles.infoBoxes}>
                        {imageUrls.map((url, index) => (
                            <div className={styles.infoBox} key={index}>
                                <div className={styles.technologyBox}>
                                    <img src={url} alt={`Image ${index + 1}`} style={{
                                        width: '100%',
                                        height: '100%'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

    );
};

export default YourComponent;
