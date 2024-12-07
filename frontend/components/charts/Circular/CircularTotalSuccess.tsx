import React from "react";
import { CircularProgress } from "@nextui-org/react";
import styles from "./CircularTotalSuccess.module.css";

export default function CircularTotalSuccess() {
    return (
        <div className={styles.container}>
            <CircularProgress
                size="lg"
                value={60}
                color="success"
                strokeWidth={5}
                aria-label="Circular chart total success campaign"
                classNames={{
                    svg: styles.circularProgressSvg,
                }}
            />
            <div className={styles.legendContainer}>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendDot} ${styles.successDot}`}></div>
                    <span className={styles.legendText}>60% de succès</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendDot} ${styles.failureDot}`}></div>
                    <span className={styles.legendText}>40% d'échec</span>
                </div>
            </div>
        </div>
    );
}