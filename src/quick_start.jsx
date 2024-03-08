import userEvent from "@testing-library/user-event";

const name = "Adam";
const imageUrl = "https://hips.hearstapps.com/hmg-prod/images/best-guard-dog-breeds-akita-1648472919.jpg?crop=1xw:1xh;center,top&resize=980:*";
var isLoggedIn = true;
const products = [
    {title: 'Cabbage', id: 1, isFruit: false},
    {title: 'Garlic', id: 2, isFruit: false},
    {title: 'Apple', id: 3, isFruit: true},
]

//Declare components as a function
function MyButton(){
    return (
    //Write in HTML format inside return
        <button>I'm a button</button>
    );
}

function WelcomePage() {
    //Changing array into a HTML list
    const listItems = products.map(product => 
        <li key = {product.id} style={{color: product.isFruit ? 'magenta':'darkgreen'}}>{product.title}</li>);
    return (
        <div>
            <h1>
            {/* Substitute a variable using brackets */}
                Welcome to my App, {name}
            </h1>
            <p>Press the button below <br /> to donate!</p>
            {/* components start with capital letters 
            while HTML tags start with lower case */}
            <MyButton />
            <br /><br />
            <img className="dog" src={imageUrl} style={{width: 200, height: 300}}/>
            <br />
            <ul>{listItems}</ul>
        </div>
    );
}

export default function MyApp() {
    let content;
    //Using if-statements inside the component
    if(isLoggedIn){
        content = <WelcomePage />;
    } else {
        content = <LoginForm />;
    }
    return (
        <div>
            {content}
        </div>
    );
}

