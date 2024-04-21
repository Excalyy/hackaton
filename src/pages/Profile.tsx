import { FC } from "react"
import dog from '../assets/dog.jpg'

const Profile:FC = () =>{
    return <>
    <div className="flex gap-3 flex-row mt-10 p-4 rounded-2xl bg-slate-800"> 
        <div className="flex items-end"> 
            <h1 className="text-7xl">Профиль</h1> 
        </div> 
        <div className="flex items-end mb-1"> 
            <h1 className="text-4xl flex justify-start">студента</h1> 
        </div> 
    </div>
    
    <div className="flex gap-5 flex-row mt-10  rounded-2xl justify-between" >
    <div className="flex flex-col justify-center items-center rounded-3xl bg-slate-700" >
    <div>
        <div className="bg-slate-500 rounded-3xl p-1 m-5">
            <h1 className="text-3xl py-3 px-2 m-0">достижения</h1>
        </div>
    </div>
    <div className="flex justify-between items-center mb-1 ">
        <h1 className="text-4xl flex justify-start"></h1>
    </div>
    <div className="p-2 ">
        <div className="text-center pb-1 pt-1">1 уровень</div>
            <div>
                  <img src={dog} alt="" width={200} className="rounded-3xl"/>
            </div>  
        <div className="text-center pb-1 pt-1">2 звезды</div>
    </div> 
    <div className="p-2 ">
        <div className="text-center pb-1 pt-1">2 уровень</div>
            <div>
                  <img src={dog} alt="" width={200} className="rounded-3xl"/>
            </div>  
        <div className="text-center pb-1 pt-1">2 звезды</div>    
    </div>
    <div className="p-2 ">
        <div className="text-center pb-1 pt-1">3 уровень</div>
            <div>
                  <img src={dog} alt="" width={200} className="rounded-3xl"/>
            </div>  
        <div className="text-center pb-1 pt-1">2 звезды</div>    
    </div>
    <div className="p-2 ">
        <div className="text-center pb-1 pt-1">4 уровень</div>
            <div>
                  <img src={dog} alt="" width={200} className="rounded-3xl"/>
            </div>  
        <div className="text-center pb-1 pt-1">2 звезды</div>    
    </div>
</div>

<div className="flex flex-col justify-center items-center rounded-2xl bg-slate-700">
    <div className="flex flex-row bg-slate-400 p-5 rounded-2xl justify-center">
    <div className="flex flex-row">
            <img src={dog} alt="" width={150} className="rounded-3xl"/>
        </div>
    <div className="flex flex-row bg-slate-400 p-5 rounded-2xl">
        <div className="flex flex-col">
        <h1 className="text-3xl">Давиденко</h1>
        <h1 className="text-3xl">Дмитрий</h1>
        <h1 className="text-1xl pt-4">Загрузить фото</h1>
        </div>
    </div>
    <div className="flex flex-col bg-slate-400 p-5 rounded-2xl">
        <h1 className="text-3xl">Факультет</h1>
        <h1 className="text-3xl">Курс</h1>
        <h1 className="text-3xl">Группа</h1>
    </div>
    </div>
    <div className="flex justify-center items-center mb-1">
        <h1 className="text-4xl flex justify-start">студента</h1>
    </div>
    <div>
        <h1 className="text-3xl">Достижения</h1>
    </div>
    <div className="flex justify-center items-center mb-1">
        <h1 className="text-4xl flex justify-start">студента</h1>
    </div>
</div>

<div className="flex flex-col justify-center items-center rounded-2xl bg-slate-700">
    <div>
        <h1 className="text-3xl">Достижения</h1>
    </div>
    <div className="flex justify-center items-center mb-1">
        <h1 className="text-4xl flex justify-start">студента</h1>
    </div>
</div>
</div>
  </>
};

export default Profile;