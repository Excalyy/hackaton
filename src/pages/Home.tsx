import { FC } from "react";
import { NavLink } from "react-router-dom"

const Home:FC = () =>{
    return <>
    <div className="flex gap-2 flex-row mt-10 p-4 rounded-2xl justify-center bg-slate-800"> 
        <div className="flex justify-center"> 
            <h1 className="text-7xl">О нас</h1> 
        </div>
    </div>
    
    <div className="flex gap-2 flex-row mt-10 p-4 rounded-2xl bg-slate-800"> 
        <div className="flex items-end"> 
            <h1 className="text-2xl p-3 whitespace-pre-line">LifeCourse» - это инновационное приложение, которое революционизирует образование и карьерный рост студентов.
С помощью данного приложения студенты смогут не только легко и удобно общаться между собой, обмениваться знаниями и помощью в учебе, но и создавать свои профили, где будут отображены все их достижения, навыки и умения, что позволит работодателям легко и быстро найти подходящего кандидата на вакансию.
Поддержка приложения будет оказываться не только студентам, но и преподавателям, работодателям, родителям и абитуриентам. Каждая группа пользователей будет иметь свои особенности и удобства в использовании приложения, чтобы каждый мог максимально эффективно использовать его функционал.</h1> 
        </div>
        <div className="p-5">
        <h1 className="text-2xl p-4 whitespace-pre-line"></h1>
        </div>
    </div>
    <div className="flex gap-2 flex-row mt-10 p-4 rounded-2xl justify-around bg-slate-800"> 
        <div className="flex bg-slate-800"> 
            <div className="gap-10 flex justify-around p-4 ">
                <button className="px-5 py-2 bg-slate-500 text-2xl rounded-3xl"><NavLink to={'/auth'}>Вузам</NavLink></button>
                <button className="px-5 py-2 bg-slate-500 text-2xl rounded-3xl"><NavLink to={'/auth'}>Предпренимателям</NavLink></button>
                <button className="px-5 py-2 bg-slate-500 text-2xl rounded-3xl"><NavLink to={'/auth'}>Студентам</NavLink></button>
            </div>
        </div>
    </div>
  </>
};

export default Home;