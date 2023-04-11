import data from "./data";
import Card from "./Card";
let cards = data.map((userData) => {
    return (
        <Card {...userData} />
    )
})
export default cards;