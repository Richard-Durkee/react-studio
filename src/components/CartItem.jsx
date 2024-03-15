// TODO: create a component that displays a single bakery item
export default function CartItem(props) {
    return (
        <div>
            <p> {props.name}: ${props.price}</p>
        </div>
    );
}