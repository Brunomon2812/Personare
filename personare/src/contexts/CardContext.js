import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
    const [tarotCards, setTarotCards] = useState([]);
    const [imagesUrl, setImagesUrl] = useState("");
    const [imageBackCard, setImageBackCard] = useState("");
    const [isFlippedFront, setIsFlippedFront] = useState(true);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        getCards();
    }, []); // Only run this effect once, on component mount

    const getCards = async () => {
        try {
            const response = await axios.get('./tarot.json');
            setTarotCards(response.data.cards);
            setImagesUrl(response.data.imagesUrl);
            setImageBackCard(response.data.imageBackCard);
            setLoading(false); // Set loading to false when data is available
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }



    const sortTarotCards = () => {
        const shuffledCards = [...tarotCards];
        shuffledCards.sort(() => Math.random() - 0.5);
        setTarotCards(shuffledCards)
    }

    // Render children only when data is available
    return (
        <CardContext.Provider value={{ tarotCards, imagesUrl, imageBackCard, isFlippedFront, setIsFlippedFront, sortTarotCards }}>
            {!loading && children}
        </CardContext.Provider>
    )
}

export default CardProvider;


