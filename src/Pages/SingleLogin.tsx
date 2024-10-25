import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



export default function ResearchesAndStudys() {
    const Fields = [
        {
            id: "name",
            name: "الاسم",
            type: "text"
        },
        {
            id: "id",
            name: "رقم السجل المدني",
            type: "text"
        },
        {
            id: "email",
            name: "البريد الإلكتروني",
            type: "email"
        },
        {
            id: "field",
            name: "المجال التطوعي",
            type: "select",
            options: [
                "المجال الاول",
                "المجال الثاني",
                "المجال الثالث",
                "المجال الرابع",
            ]
        },
        {
            id: "birth",
            name: "تاريخ الميلاد",
            type: "text"
        },
        {
            id: "address",
            name: "العنوان",
            type: "text"
        },
        {
            id: "phone",
            name: "رقم الجوال",
            type: "text"
        },
    ]
    return (
        <div className="flex flex-col items-center">
            <h2 className="my-8 text-2xl font-bold">تسجيل متطوع فردي</h2>
            <div className="w-full flex flex-col items-center text-right bg-[#C58F3526] pt-8 pb-28">
                <Formik 
                    initialValues={{
                        name: "",
                        id: "",
                        email: "",
                        birth: "",
                        address: "",
                        phone: "",
                        eq: false
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Name is required"),
                        id: Yup.string().required("National identity is required"),
                        email: Yup.string().email("Invalid email address").required("Name is required"),
                        birth: Yup.string().required("Date of birth is required"),
                        address: Yup.string().required("Address is required"),
                        phone: Yup.string().required("Phone number is required"),
                        eq: Yup.bool().isTrue('يجب الموافقة على الشروط والأحكام')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form className="w-full flex flex-col gap-4 p-4">
                            {Fields.map((field) => (
                                <>
                                    {field.type === "select" ? (
                                        <>
                                        <Field as="select" id={field.id} name={field.name} dir="rtl" className="relative h-[46px] text-right rounded-2xl border border-amber-500/70 text-gray-400 p-3 pr-[26px] appearance-none cursor-pointer focus:outline-none">
                                            <option value="" disabled selected hidden>مجال التطوع</option>
                                            {field.options?.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </Field>
                                    </>
                                    ) : (
                                        <>
                                        <Field type={field.type} name={field.id} id={field.id} placeholder={field.name} className="h-[46px] text-right rounded-2xl border border-amber-500/70 p-3 pr-[26px] cursor-pointer"></Field>
                                        <ErrorMessage name={field.id} component="div" className="text-red-400 text-sm"/>
                                    </>
                                    )}
                                </>
                            ))}
                            <div className="relative text-right mb-8 px-4">
                                <h3 className="text-center text-[#C58F35] font-bold my-8">انضم لكوكبة من المتميزين في عالم التطوع</h3>
                                <div className="flex items-center justify-end mb-[14px]">
                                    <ErrorMessage name="eq" component="div" className="text-red-400 text-sm"/>
                                    <label htmlFor="eq" className="text-black font-bold mx-3">إقرار</label>
                                    <Field type="checkbox" name="eq" id="eq" className="hidden peer"/>
                                    <span className="w-6 h-6 border-2 border-[#C58F35] rounded-md peer-checked:bg-[#C58F35]"></span>
                                </div>
                                <p className="absolute right-4 w-[80%] text-black opacity-30 text-sm font-bold">أقر بأن جميع البيانات السابقة بيانات صحيحة، وأتحمل كافة المسؤولية حيال صحتها.</p>
                            </div>
                            <button type='submit' disabled={isSubmitting} className='w-[234px] h-14 mx-auto mt-4 bg-[#C58F35] text-white rounded-[20px] shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)]'>
                                {isSubmitting ? "...جاري التسجيل" : "تسجيل"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}