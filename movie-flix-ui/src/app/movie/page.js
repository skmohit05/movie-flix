import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 10000));

    const res = await fetch('http://localhost:5000/movie', { cache: 'no-store' });
    
    // Await the JSON parsing
    const data = await res.json();
    const main_data = data.titles;
    console.log('size: ', main_data.length);
    

    // Check if `main_data` exists and is not empty
    if (!main_data || main_data.length === 0) {
        return <div>No movies available</div>;
    }

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;
