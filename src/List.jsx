import Card from "./Card"
export default function List({lista}) {
    const array = lista.map((item) => (
        <Card key={item.id} usuario={item}/>
    ))
    return (
        <ul>{array}</ul>
    )
}