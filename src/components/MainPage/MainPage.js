import { Content } from './Content';
import { Header } from '../Header';
import './style.scss';

export function MainPage(){
    return(
        <main className='main'>
            <Header/>
            <Content/>
        </main>
    )
}