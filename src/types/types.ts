export interface IUserData {
    email: string
    password: string
    fio: string
    university: string
    faculty: string
    department: string
    group: string
    city: string
    companyName: string
    universityName:string
}

export interface IResponseUserData {
    email: string | undefined
    password: string | undefined
    fio: string | undefined
    university: string | undefined
    faculty: string | undefined
    department: string | undefined
    group: string | undefined
    city: string | undefined
    companyName: string | undefined
    universityName:string | undefined
    createdAt: string | undefined
    updatedAt: string | undefined
    __v?: number | undefined
    _id?: string | undefined
    message: string | undefined
}