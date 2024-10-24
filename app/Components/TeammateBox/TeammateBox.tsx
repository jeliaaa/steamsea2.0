'use client'
import Image from 'next/image';
import styles from './TeammateBox.module.scss';

interface Props {
    name: string;
    image: string;
    role: string;
}

const TeammateBox = (props: Props) => {
    return <div className={styles.container}>
        <Image className={styles.image} src={props.image} alt={'teamate image'} width={142} height={142} />
        <div className={styles.description}>
            <span className={styles.title}>
                {props.name}
            </span>
            <span className={styles.role}>
                {props.role}
            </span>
        </div>
    </div>
}

export default TeammateBox;