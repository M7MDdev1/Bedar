import bedar from "/assets/Contact_BedarLogo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { HiEnvelope } from "react-icons/hi2";

export default function ContactUs() {
  const Fields = [
    {
      id: "name",
      name: "الاسم",
      type: "text",
    },
    {
      id: "email",
      name: "البريد الإلكتروني",
      type: "email",
    },
    {
      id: "title",
      name: "عنوان الرسالة",
      type: "text",
    },
  ];

  const FooterInfo = [
    {
      icon: <IoLocationSharp />,
      title: "جازان، حي الشاطئ",
      src: "",
    },
    {
      icon: <MdLocalPhone />,
      title: "+96650481022 , 0173213139",
      src: "",
    },
    {
      icon: <HiEnvelope />,
      title: "info@bcharity.org",
      src: "",
    },
  ];
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:flex flex-col items-center justify-center">
        <div
          style={{
            background: `url('assets/ContactUs.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[83rem] h-[36.6875rem] relative"
        >
          <div className="w-[34.75rem] h-[8.8125rem] rounded-[0rem_2.5rem] absolute top-[13.56rem] left-[8.75rem] bg-[#BD8A3D] text-[3.4375rem] flex items-center justify-center text-white font-semibold">
            الشكاوى و الاقتراحات
          </div>

          <div className="w-[24.4375rem] h-[6.1875rem] rounded-[2.5rem_0rem] absolute top-[23.69rem] left-[5.31rem] bg-[#BD8A3D] text-[2.5rem] flex items-center justify-center text-white font-semibold">
            سعداء بالرد عليك
          </div>
        </div>
        <div className="px-10 py-16 gap-y-5 flex flex-col rounded-[2.5rem_0rem] border border-[#d5c2a833] shadow-contactUsShadow w-[49.1875rem] items-center justify-center mb-96">
          <h1 className="text-[#262117] font-bahij text-5xl font-semibold leading-[3.28125rem]">
            تواصل معنا
          </h1>
          <p className="text-[#4D5D6D] font-bahij leading-[1.44375rem] block">
            املأ النموذج أسفله تصل رسالتك إلينا
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              title: "",
              content: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              title: Yup.string().required("Title is required"),
              content: Yup.string().required("Content is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full  flex flex-col text-right p-4 relative">
                {Fields.map((field) => (
                  <>
                    <Field
                      type={field.type}
                      name={field.id}
                      placeholder={field.name}
                      className="h-12 rounded-[0.625rem] py-3 px-4 mb-8 text-right border border-[#BD8A3D]"
                    />
                    <ErrorMessage name={field.id} component="div" />
                  </>
                ))}
                <>
                  <Field
                    as="textarea"
                    id="content"
                    placeholder={"محتوى الرسالة"}
                    name="content"
                    className="h-[13.75rem] mb-8 rounded-2xl p-4 text-right border border-[#BD8A3D]"
                  />
                </>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-32 h-16 mx-auto bg-[#BD8A3D] text-white rounded-[20px]"
                >
                  {isSubmitting ? "...جاري الارسال" : "ارسال"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center sm:hidden">
        <h2 className="my-6 text-2xl font-bold">تواصل معنا</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            title: "",
            content: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            title: Yup.string().required("Title is required"),
            content: Yup.string().required("Content is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full bg-[#C58F3526] flex flex-col text-right p-4 relative">
              {Fields.map((field) => (
                <>
                  <label htmlFor={field.id} className="m-3">
                    {field.name}
                  </label>
                  <Field
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="h-12 rounded-2xl p-4 text-right border border-[#c58f35ad]"
                  />
                  <ErrorMessage name={field.id} component="div" />
                </>
              ))}
              <>
                <label htmlFor="content" className="m-3">
                  محتوى الرسالة
                </label>
                <Field
                  as="textarea"
                  id="content"
                  name="content"
                  className="h-[192px] rounded-2xl p-4 text-right border border-[#c58f35ad]"
                />
              </>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-48 h-14 my-12 mx-auto bg-[#C58F35] text-white rounded-[20px] shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)]"
              >
                {isSubmitting ? "...جاري التسجيل" : "تسجيل"}
              </button>
              <img
                src={bedar}
                className="absolute -z-50 w-60 top-[54%] left-[50%] -translate-x-1/2 -translate-y-1/2"
              />
            </Form>
          )}
        </Formik>

        {/* Footer of Contact */}
        <div className="w-full flex flex-col items-end text-right p-4 pb-12 font-bold gap-5">
          <p className="w-52">كما نسعد بزيارتكم وتواصلكم على بياناتنا أدناه</p>
          {FooterInfo.map((In) => (
            <div className="flex flex-row-reverse text-sm items-center gap-2">
              <div className="text-[#C58F35] rounded-full border border-[#c58f35ad] p-1">
                {In.icon}
              </div>
              <a href={In.src}>{In.title}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
