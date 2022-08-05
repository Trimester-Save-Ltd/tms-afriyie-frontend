
const baseURL = "https://tms-crm-backend.herokuapp.com/api/v1/"

const URL = {

    // loginPatient: baseURL + 'patient/login',
    // registerPatient: baseURL + 'patient/register',
    // verifyPhone: baseURL + 'patient/verify_phone',
    // resendCode: baseURL + 'patient/send_verification_code',
    // verifyEmail: baseURL + 'patient/verify_email',
    // resetPassword: baseURL + 'patient/reset_password',
    // forgotPassword: baseURL + 'patient/forgot_password',

    // createBudget: baseURL + 'budget/add_budget',
    // getBudgets: baseURL + 'budget/patient_budget',

    
    //appointments
    createAppointment: baseURL + 'appointment/add_appointment',                    
    updateAppointment: baseURL + 'appointment/update/:id',                   
    deleteAppointment: baseURL + 'appointment/delete/:id',                   
    getAppointments: baseURL + 'appointment/patient_appointments',                    
    getAppointment: baseURL + 'appointment/:id',                   

    //budget
    createBudget: baseURL + 'budget/add_budget', 
    updateBudget: baseURL + 'budget/update/:id', 
    deleteBudget: baseURL + 'budget/delete/:id',
    getBudgets: baseURL + 'budget/patient_budgets', 
    getBudget: baseURL + 'budget/:id', 

    //notifications
    getNotifications: baseURL + 'notification/:id', 
    readNotification: baseURL + 'notification/read_notification/:id',

    //patient
    registerPatient: baseURL + 'patient/register', 
    getUserProfile: baseURL + 'patient/me', 
    resendCode: baseURL + 'patient/send_verification_code', 
    loginPatient: baseURL + 'patient/login', 
    verifyEmail: baseURL + 'patient/verify_email', 
    verifyPhone: baseURL + 'patient/verify_phone', 
    updatePatient: baseURL + 'patient/update', 
    changePassword: baseURL + 'patient/change_password', 
    forgotPassword: baseURL + 'patient/forgot_password', 
    resetPassword: baseURL + 'patient/reset_password',
    sendSMS: baseURL + 'patient/send_sms_code', 

    //vault
    addVaultFile: baseURL + 'vault/add_file', 
    updateVaultFile: baseURL + 'vault/update_file/:id', 
    deleteVaultFile: baseURL + 'vault/delete/:id', 
    getVaultFiles: baseURL + 'vault/patient_files', 
    getVaultFile: baseURL + 'vault/:id', 

    //vital
    addVital: baseURL + 'vital/add_vital',
    updateVital: baseURL + 'vital/update/:id', 
    deleteVital: baseURL + 'vital/delete/:id', 
    getVitals: baseURL + 'vital/patient_vitals', 
    getVital: baseURL + 'vital/', 
}

export default URL