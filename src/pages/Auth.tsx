import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { AuthService } from "../services/auth.service";

const Auth: FC = () =>{ //RegistrationForm
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fio: '',
        role: '',
        university: '',
        faculty: '',
        department: '',
        group: '',
        city: '',
        companyName: '',
        universityName: '',
    });
    const loginHandler = async(e: React.FormEvent<HTMLFormElement>)=>{
        try {

        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    } 
    const registrationHandler = async(e: React.FormEvent<HTMLFormElement>)=>{
        try {
            e.preventDefault()
            const data = await AuthService.registration({email,password,fio,university,faculty,department,group,city,companyName,universityName,})
                if(data){
                    toast.success('Account has been created.')
                    setIsLogin(!isLogin)
                }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    } 
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fio, setFio] = useState<string>('')
    const [university, setUniversity] = useState<string>('')
    const [faculty, setFaculty] = useState<string>('')
    const [department, setDepartment] = useState<string>('')
    const [group, setGroup] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [companyName, setCompanyName] = useState<string>('')
    const [universityName, setUniversityName] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // const handleSubmit = async (e: React.FormEvent) => {  //registrationHandler
    //     e.preventDefault();
    //     try {
    //         await axios.post('/user/register', formData); 
    //         alert('Регистрация успешно завершена!');
    //     } catch (error) {
    //         alert('Ошибка при регистрации');
    //         console.error(error);
    //     }
    // };
    return ( 
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1 className="text-center text-3xl mb-8">
            {isLogin ? 'Вход' : 'Регистрация'}
        </h1>

        <form 
            onSubmit={isLogin ? loginHandler : registrationHandler}
            className='flex w-1/3 flex-col mx-auto gap-5'
            >
            {!isLogin && (
            <input 
            type="text"
            name="email"
            className='input' 
            placeholder='Почта'
            onChange={(e) => setEmail(e.target.value)} required
            />
            )}
            {isLogin && (
            <input 
            type="text"
            name="email"
            className='input' 
            placeholder='Почта'
            onChange={(e) => setEmail(e.target.value)} required
            />
            )}
            {!isLogin && (
            <input 
            type="password"
            name="password"
            className='input' 
            placeholder='Пароль'
            onChange={(e) => setPassword(e.target.value)} required
            />
            )}
            {isLogin && (
            <input 
            type="password"
            name="password"
            className='input' 
            placeholder='Пароль'
            onChange={(e) => setPassword(e.target.value)} required
            />
            )}
            {!isLogin && (
            <input 
            type="text" 
            name="fio"
            className='input'
            placeholder='Фио'
            onChange={(e) => setFio(e.target.value)} required 
            />
            )}
            {isLogin && (
            <input 
            type="text" 
            name="fio"
            className='input'
            placeholder='Фио'
            onChange={(e) => setFio(e.target.value)} required 
            />
            )}
            <div>
            <h1 className="text-center text-3xl mt-3 mb-7">
                {isLogin ? '' : 'Выберите роль'}
                </h1> 
                {!isLogin && ( 
                <select name="role" 
                value={formData.role} 
                onChange={handleChange} 
                required className="select"> 
                <option value="none">Выберите роль</option> 
                <option value="student">Студент</option> 
                <option value="employee">Сотрудник</option> 
                <option value="university_agent">Агент университета</option> 
                </select> )}
                </div>
            {formData.role === 'student' && !isLogin &&(
                <>   <input 
                        type="text" 
                        name="university" 
                        placeholder="Университет:" 
                        onChange={(e) => setUniversity(e.target.value)} required  
                        className="input"
                        />

                        <input 
                        type="text" 
                        name="faculty" 
                        placeholder="Факультет:" 
                        onChange={(e) => setFaculty(e.target.value)} required  className="input"
                        />

                        <input type="text" 
                        name="department" 
                        placeholder="Кафедра:" 
                        onChange={(e) => setDepartment(e.target.value)} required  className="input"
                        />

                        <input type="text" 
                        name="group" 
                        placeholder="Группа:" 
                        onChange={(e) => setGroup(e.target.value)} required  className="input"
                        />
                </>
                
            )}
            {formData.role === 'employee' &&  !isLogin &&(
                <>
                        <input type="text" 
                        name="city" 
                        placeholder="Город:" 
                        onChange={(e) => setCity(e.target.value)} required className="input"
                        />

                        <input type="text" 
                        name="companyName" 
                        placeholder="Название компании:" 
                        onChange={(e) => setCompanyName(e.target.value)} required className=" input"
                        />

                </>
            )}
            {formData.role === 'university_agent' && !isLogin &&(
                <>
                        <input 
                        type="text" 
                        name="universityName" 
                        placeholder="Название университета:" 
                        onChange={(e) => setUniversityName(e.target.value)} required className="input"
                        />
                </>
            )}
            <button type="submit" className="btn btn-green mx-auto">Войти</button>
        </form>

        <div className="mt-5 flex justify-center">
            {isLogin ?(
                <button 
                onClick={() =>setIsLogin(!isLogin)} 
                className="text-slate-300 hover:text-white"
                >
                    У вас нет аккаунта?
                </button>
            ) : (
                <button 
                onClick={() =>setIsLogin(!isLogin)}
                className="text-slate-300 hover:text-white"
                >
                    Уже есть аккаунт?
                </button>
            )}
        </div>
    </div>
    )
};

export default Auth;