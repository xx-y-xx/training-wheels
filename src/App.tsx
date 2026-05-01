import {useState} from "react";
import {InputMicro} from "./componets/Input.tsx";
import {ButtonMicro} from "./componets/Button.tsx";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }
    const callBackDeleteButton = () => {
        setMessage([]);
    }
    return (
        <div className="App">
            {/*<div>
                <input />
                <button>+</button>
            </div>*/}
            <InputMicro title={title} setTitle={setTitle}></InputMicro>
            <ButtonMicro name={'+'} callBack={callBackButtonHandler}></ButtonMicro>
            <ButtonMicro name={'delete'} callBack={callBackDeleteButton}></ButtonMicro>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;