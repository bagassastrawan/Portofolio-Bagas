"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdovqdkd");
  if (state.succeeded) {
    // return (
    //   // <main>
    //   //   <body className="bg-[#202203]">
    //   //     <div className="container px-5 py-2 mx-auto">
    //   //       <div className="flex flex-wrap -m-4 justify-center">
    //   //         <div className="p-4 mt-36 w-2/3 sm:w-1/2 lg:w-1/3 bg-[#F1F1F1] rounded-xl">
    //   //           <h3 className="text-center pb-10">
    //   //             Thank you for your message. Hope you always have a nice day!
    //   //           </h3>
    //   //           <div className="flex items-center flex-wrap justify-center ">
    //   //             <a href="">
    //   //               <button className="edu-box hover:cursor-pointer">
    //   //                 Back to home page
    //   //               </button>
    //   //             </a>
    //   //           </div>
    //   //         </div>
    //   //       </div>
    //   //     </div>
    //   //   </body>
    //   // </main>
    // );
  }

  return (
    <section id="contact" className=" body-font relative mt-5">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="my-2 text-center font-bold text-2xl md:text-4xl text-[#1E1E1E]">
            CONTACT
            <hr className="w-12 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2 justify-center">
            <div className="p-2 w-3/4">
              <div className="relative">
                <form
                  action="https://formspree.io/f/xdovqdkd"
                  method="POST"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <label
                    className="leading-7 text-sm text-[#1E1E1E]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full bg-[#1D202B]  rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] text-base outline-none text-[#EDEDED] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Insert your name"
                    required
                    id="name"
                    type="name"
                    name="name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                  <label
                    className="leading-7 text-sm text-[#1E1E1E]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full bg-[#1D202B] rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] text-base outline-none text-[#EDEDED] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Insert your email"
                    required
                    id="email"
                    type="email"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-[#1E1E1E]"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full bg-[#1D202B] rounded border border-[#4E597A] focus:border-[#20232E] focus:bg-[#15171E] focus:ring-2 focus:ring-[#B19DC5] h-32 text-base outline-none text-[#EDEDED] py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Insert your message"
                    required
                    id="message"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <div className="rounded-none justify-item-center">
                    <button
                      className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full item-center"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
