import './App.css'
import {Button} from './componets/Button.tsx'

function App() {
    const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber,age)
    }
    /*const Button2Foo = (subscriber) => {
        console.log(subscriber)
    }*/
    return (
        <div className="App">
            <Button name={'MyYoutubeChanel-1'} callback={()=>Button1Foo('haha', 21)}/>
            {/*<Button name={'MyYoutubeChanel-2'} callback={Button2Foo}/>*/}
        </div>
    )
}

export default App