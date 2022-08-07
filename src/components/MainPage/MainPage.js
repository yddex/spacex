import { Mars } from '../Mars';
import { Header } from '../Header';
import './style.scss';

export function MainPage(){
    return(
        <main className='main'>
            <Header/>
            <section className='main__content'>
            <Mars/>
            </section>
        </main>
    )
}