import { FC } from "react";

const News:FC = () =>{
    return <>
    <div className="flex gap-2 flex-row mt-10 p-4 rounded-2xl justify-center bg-slate-800 w-full"> 
        <div className="flex justify-center"> 
            <h1 className="text-6xl">Новостная лента</h1> 
        </div>
    </div>
    <div className="flex gap-2 flex-row mt-10 p-4 rounded-2xl justify-center bg-slate-800 w-full">
    <div className="flex flex-col pl-0 pr-0 pt-0 m-0 justify-center">
    </div>
    <div className="flex flex-col  p-2 rounded-full gap-5 w-full">
    <div className="flex flex-col bg-slate-800 p-3 justify-center rounded-xl gap-5">
        <div className="flex flex-row bg-slate-500 justify-around rounded-2xl ">
        <h1 className="text-3xl flex p-2  items-center justify-start">Имя юзера</h1>
        <h1 className="text-3xl flex p-2  items-center justify-center">Пост 1</h1>
        </div>
<form className="">
<div className="w-full max mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
   <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
       <label htmlFor="comment" className="sr-only">Ваш комментарий</label>
       <textarea id="comment" className="w-full rounded-md px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Напишите комментарий"required ></textarea>
   </div>
   <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
   <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Опубликовать</button>
   </div>
</div>
</form> 
    </div>
    <div className="flex flex-col bg-slate-800 p-3 rounded-xl gap-5 ">
    <div className="flex flex-row bg-slate-500 justify-around rounded-2xl ">
        <h1 className="text-3xl flex p-2  items-center justify-start">Имя юзера</h1>
        <h1 className="text-3xl flex p-2  items-center justify-center">Пост 2</h1>
        </div> 
    <form>
<div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
   <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
       <label htmlFor="comment" className="sr-only">Ваш комментарий</label>
       <textarea id="comment" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Напишите комментарий" required ></textarea>
   </div>
   <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 ">
   <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Опубликовать</button>
   </div>
</div>
</form>
    </div>
    </div>
</div>
</>
};

export default News;