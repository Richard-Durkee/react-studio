// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div class="BakeryItem">
            <div>
            <img src={props.image} height="100px" width="100px"></img>
            </div>
            <div>
            <button onClick={() => props.add()}> {props.name} </button> 
            </div>
        </div>
    );  
}