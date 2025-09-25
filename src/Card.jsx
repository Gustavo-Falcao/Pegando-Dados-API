export default function Card({usuario}) {
    return (
            <li>
                <p>Nome: {usuario.name}</p>
                <p>Username: {usuario.username}</p>
                <p>Email: {usuario.email}</p>
                <p>Addres: {usuario.address.street}/{usuario.address.suite}/{usuario.address.city}</p>
                <p>Localização: {usuario.address.geo.lat}/{usuario.address.geo.lng}</p>
                <p>Telefone: {usuario.phone}</p>
                <p>Website: {usuario.website}</p>
            </li>
    )
}