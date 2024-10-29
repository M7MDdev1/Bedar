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
    <div className="flex flex-col items-center">
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
  );
}
