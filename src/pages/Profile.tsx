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
    
    <div className="flex flex-row mt-10  rounded-2xl justify-between" >
    <div className="flex flex-col justify-center items-center rounded-3xl bg-slate-700" >
    <div>
        <div className="bg-slate-500 rounded-2xl p-1 m-3">
            <h1 className="text-3xl py-2 px-3 m-0">достижения</h1>
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

<div className="flex flex-col justify-start items-center rounded-2xl gap-5">
    <div className="flex flex-row bg-slate-700 p-5 rounded-2xl justify-center">
        <div className="flex flex-row">
            <img src={dog} alt="" width={150} className="rounded-3xl"/>
        </div>
    <div className="flex flex-row p-5 rounded-2xl">
            <div className="flex flex-col">
            <h1 className="text-3xl">Степанов</h1>
            <h1 className="text-3xl">Максим</h1>
            <button className="pr-8"><h1 className="text-1xl pt-4">Загрузить фото</h1></button>
        </div>
    </div>
        <div className="flex flex-col p-5 rounded-2xl">
            <h1 className="text-3xl">Факультет</h1>
            <h1 className="text-3xl">Курс</h1>
            <h1 className="text-3xl">Группа</h1>
        </div>
    </div>
    <div className="flex flex-row bg-slate-700 px-3 rounded-3xl items-center gap-3">
        <div className="flex flex-row bg-slate-500 rounded-3xl px-8">
            <h1 className="text-3xl flex px-2 p-1">cтатистика</h1>
        </div>
        <div className="flex flex-col p-2 rounded-full">
            <h1 className="text-2xl">Место в рейтинге №46</h1>
            <h1 className="text-2xl">Всего: 546 звёздочек</h1>
        </div>
        
    </div>
    <div className="flex flex-col bg-slate-700 px-6 pt-3 rounded-2xl items-center gap-2" >
        <div className="flex flex-col pl-20 pr-0 pt-0 m-0">
        <div className="flex bg-slate-500 rounded-3xl px-10 mt-0 mr-12">
            <h1 className="text-3xl flex items-end p-2">личная активность</h1>
        </div>
        </div>
        <div className="flex flex-col  p-2 rounded-full gap-5 w-full">
        <div className="flex flex-col bg-slate-900 p-3 justify-center rounded-xl gap-5">
            <div className="flex flex-col bg-slate-500 justify-center rounded-2xl ">
            <h1 className="text-3xl flex p-2  items-center justify-center">Пост 1</h1>
            </div>
<form className="">
   <div className="w-full max mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label htmlFor="comment" className="sr-only">Ваш комментарий</label>
           <textarea id="comment" className="w-full rounded-md px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Напишите комментарий"required ></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Опубликовать
           </button>
       </div>
   </div>
</form> 
        </div>
        <div className="flex flex-col bg-slate-900 p-3 rounded-xl gap-5 ">
        <div className="flex flex-col bg-slate-500 rounded-2xl ">
            <h1 className="text-3xl flex p-2 items-center justify-center">Пост 2</h1>
        </div>  
        <form>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label htmlFor="comment" className="sr-only">Ваш комментарий</label>
           <textarea id="comment" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Напишите комментарий" required ></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 ">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Опубликовать
           </button>
       </div>
   </div>
</form>
        </div>
        </div>
    </div>
</div>

<div className="flex flex-col justify-start items-center rounded-2xl gap-5">
<div className="flex flex-col bg-slate-700 px-3 rounded-3xl gap-3 py-5">
    <div className="flex flex-row bg-slate-500 rounded-3xl py-2 px-0">    
        <div className="flex flex-col bg-slate-500 rounded-3xl px-8">
            <h1 className="text-4xl flex pr-20 p-1">о себе</h1>
        </div>
        <div className="flex justify-start items-center gap-4">
            <div className="flex flex-row px-5 rounded-full">
            <button><h1 className="text-2xl ">изменить</h1></button>
            </div>
        </div> 
        </div>
        <div className="flex w-full flex-row px-1 rounded-full">
        <textarea className="text-black w-full bg-slate-300 rounded-3xl p-6 placeholder-gray-500" placeholder="Добавьте текст о себе"></textarea>
            </div>
    </div>
    <div className="flex flex-col bg-slate-700 px-8 rounded-3xl gap-3 py-7">
    <div className="flex flex-row 0 rounded-3xl py-2 px-0">    
        <div className="flex flex-col justify-start items-center gap-10">
            <div className="flex flex-row px-5 rounded-full items-center">
                <h1 className="text-5xl bg-slate-500 rounded-3xl p-3 px-20">Прочее</h1>
            </div>
            <div className="pr-10">
            <div className="flex flex-row px-1 rounded-full">
                <h1 className="text-6xl p-4" >рейтинг</h1>
            </div>
            <div className="flex flex-row px-1 rounded-full">
                <h1 className="text-6xl p-4">чаты</h1>
            </div>
            <div className="flex flex-row px-1 rounded-full">
                <h1 className="text-6xl p-4">вакансии</h1>
            </div>
            </div>
            <div className="text-5xl bg-slate-500 rounded-3xl p-1 px-02 w-full">
            <div className="flex flex-row px-1 rounded-full">
                <h1 className="text-4xl p-4">Маркет</h1>
            </div>
            <div className="flex flex-row px-1 rounded-full">
                <h1 className="text-4xl p-4">Поддержка</h1>
            </div>
            </div>
        </div> 
        </div>
    </div>
</div>

</div>
  </>
};

export default Profile;