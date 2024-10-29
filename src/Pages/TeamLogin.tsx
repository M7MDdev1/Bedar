import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ResearchesAndStudys() {
  const Fields = [
    {
      id: ["leaderName", "teamName"],
      name: ["اسم مسؤول الفريق", "اسم الفريق"],
      type: "text",
      width: "half",
    },
    {
      id: "email",
      name: "البريد الإلكتروني",
      type: "text",
      width: "full",
    },
    {
      id: ["teamNumber", "address"],
      name: ["عدد أعضاء الفريق", "العنوان"],
      type: "text",
      width: "half",
    },
    {
      id: "leaderPhone",
      name: "رقم الجوال مسؤول الفريق",
      type: "number",
      width: "full",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-8 text-2xl font-bold">تسجيل فريق تطوعي</h2>
      <div className="w-full flex flex-col items-center text-right bg-[#C58F3526] pt-8 pb-28">
        <Formik
          initialValues={{
            leaderName: "",
            teamName: "",
            email: "",
            teamNumber: "",
            address: "",
            leaderPhone: "",
            aboutTeam: "",
            eqrar: false,
          }}
          validationSchema={Yup.object({
            leaderName: Yup.string().required("اسم مسؤول الفريق مطلوب"),
            teamName: Yup.string().required("اسم الفريق مطلوب"),
            email: Yup.string()
              .email("عنوان البريد الإلكتروني غير صالح")
              .required("البريد الإلكتروني مطلوب"),
            teamNumber: Yup.number().required("عدد أعضاء الفريق مطلوب"),
            address: Yup.string().required("العنوان مطلوب"),
            leaderPhone: Yup.number().required("يجب كتابة رقم مسؤل الفريق"),
            aboutTeam: Yup.string().required("يجب كتابة نبذة عن الفريق"),
            eqrar: Yup.bool().isTrue("يجب الموافقة على الشروط والأحكام"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col gap-y-4 gap-x-2 p-4">
              {/* Form Fieds */}
              {Fields.map((field) => (
                <>
                  {field.width === "half" ? (
                    <div className="flex gap-2 flex-row-reverse">
                      <div>
                        <Field
                          type={field.type}
                          name={field.id[0]}
                          id={field.id[0]}
                          placeholder={field.name[0]}
                          className="h-[46px] w-full text-sm text-right rounded-2xl border border-amber-500/70 p-3 cursor-pointer"
                        ></Field>
                        <ErrorMessage
                          name={field.id[0]}
                          component="div"
                          className="text-red-400 text-sm"
                        />
                      </div>

                      <div>
                        <Field
                          type={field.type}
                          name={field.id[1]}
                          id={field.id[1]}
                          placeholder={field.name[1]}
                          className="h-[46px] w-full text-sm text-right rounded-2xl border border-amber-500/70 p-3 cursor-pointer"
                        ></Field>
                        <ErrorMessage
                          name={field.id[1]}
                          component="div"
                          className="text-red-400 text-sm"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Field
                        type={field.type}
                        name={field.id}
                        id={field.id}
                        placeholder={field.name}
                        className="h-[46px] text-right text-sm rounded-2xl border border-amber-500/70 p-3 cursor-pointer"
                      ></Field>
                      <ErrorMessage
                        name={field.id + ""}
                        component="div"
                        className="text-red-400 text-sm"
                      />
                    </>
                  )}
                </>
              ))}
              <Field
                as="textarea"
                name="aboutTeam"
                id="aboutTeam"
                placeholder="..نبذة عن فريقك التطوعي"
                className="h-[115px] w-full text-sm text-right rounded-2xl border border-amber-500/70 p-3 cursor-pointer"
              ></Field>
              <ErrorMessage
                name="aboutTeam"
                component="div"
                className="text-red-400 text-sm"
              />

              {/* Form Footer */}
              <div className="relative text-right mb-8 px-4">
                <h3 className="text-center text-[#C58F35] font-bold my-8">
                  <span className="block">خذ فريقك</span> التطوعي إلى عوالم
                  لانهائية
                </h3>
                <div className="flex items-center justify-end mb-[14px]">
                  <ErrorMessage
                    name="eqrar"
                    component="div"
                    className="text-red-400 text-sm"
                  />
                  <label htmlFor="eqrar" className="text-black font-bold mx-3">
                    إقرار
                  </label>
                  <Field
                    type="checkbox"
                    name="eqrar"
                    id="eqrar"
                    className="hidden peer"
                  />
                  <span className="w-6 h-6 border-2 border-[#C58F35] rounded-md peer-checked:bg-[#C58F35]"></span>
                </div>
                <p className="absolute right-4 w-[80%] text-black opacity-30 text-sm font-bold">
                  أقر بأن جميع البيانات السابقة بيانات صحيحة، وأتحمل كافة
                  المسؤولية حيال صحتها.
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[234px] h-14 mx-auto mt-4 bg-[#C58F35] text-white rounded-[20px] shadow-[2px_2px_5px_0px_rgba(197,143,53,0.68)]"
              >
                {isSubmitting ? "...جاري التسجيل" : "تسجيل"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
