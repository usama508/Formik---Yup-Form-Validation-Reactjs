import * as Yup from 'yup'



export const registerSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('Enter yor Name'),
    email: Yup.string().email().required('Enter your Email'),
    password: Yup.string().min(6).required('Enter your Password'),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], 'Password must match')
})