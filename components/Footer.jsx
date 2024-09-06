"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import emailjs from "@emailjs/browser";
import "dotenv/config";

import HashLoader from "react-spinners/HashLoader";
import { SocialLinksData } from "@/constants";

export default function Footer() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const [modal, setModal] = useState({
    title: "",
    email: "",
    message: "",
  });

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleModal(title, message, button) {
    modal.title = title;
    modal.message = message;
    modal.button = button;
    openModal();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Andrei",
          from_email: form.email,
          to_email: "andreiwork25@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);

          handleModal(
            "Message Sent Succesfully!",
            "Thank you for contacting me! I will get back to you as soon as possible.",
            "Okay, I undestand",
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setLoading(false);
          handleModal(
            "Failed To Send Message!",
            "Ahh, something went wrong. Please try again!",
            "Okay, I undestand",
          );
        },
      );
  };

  return (
    <footer
      id="footer"
      className="flex w-full flex-col items-center justify-center bg-background-1"
    >
      <div className="flex w-full max-w-[1980px] flex-col justify-between gap-[50px] px-[8px] py-[50px] md:flex-row md:px-[150px] md:py-[100px]">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex h-full w-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="bg-background w-full max-w-[350px] transform overflow-hidden rounded-[10px] p-[16px] text-left align-middle text-gray shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-gray-900 text-left text-[20px] text-lg font-medium capitalize leading-6 text-gray  md:!text-left"
                    >
                      {modal.title || "payment successful"}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-gray-500 text-sm brightness-75">
                        {modal.message ||
                          "Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."}
                      </p>
                    </div>

                    <div className="mt-[32px]">
                      <button
                        type="button"
                        className="block items-center justify-center rounded-[10px] bg-gray p-[12px] text-sm font-bold text-blackberry hover:brightness-110"
                        onClick={closeModal}
                      >
                        {modal.button || "Got it, thanks!"}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <div className="flex flex-col gap-[35px] md:gap-[70px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="w-full text-left text-gray">
              Reaching goals relentlessly!
            </h2>
            <p className="text-left text-[20px] font-semibold text-gray2 md:!text-left">
              Relentlessly pursuing goals with unwavering{" "}
              <br className="hidden md:flex" />
              determination, turning vision into reality!
            </p>
          </div>

          <div className="flex flex-col gap-[25px] md:gap-[50px] lg:flex-row">
            <div className="group:order-1 z-20 flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-md !px-[0px] md:gap-[50px]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex w-full flex-col"
              >
                <div className="flex w-full flex-col gap-[15px] md:w-fit md:flex-row md:gap-[30px]">
                  <div className="flex w-full flex-col gap-[15px] md:w-fit md:gap-[30px]">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required={true}
                      placeholder="Enter your name..."
                      autoComplete="on"
                      className="block w-full select-none rounded-[10px] bg-glass p-[16px] text-left text-content focus:placeholder:italic md:w-[300px]"
                    />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required={true}
                      placeholder="Enter your email..."
                      autoComplete="on"
                      className="block w-full select-none rounded-[10px] bg-glass p-[16px] text-left text-content focus:placeholder:italic md:w-[300px]"
                    />
                  </div>

                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required={true}
                    placeholder="Enter your message..."
                    className="mb-[15px] block h-full w-full select-none resize-none rounded-[10px] bg-glass p-[16px]  text-left text-content focus:placeholder:italic md:mb-[0px] md:h-[175px] md:w-[500px]
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="block w-full min-w-[210px] select-none items-center justify-center rounded-[10px] bg-gray p-[16px] font-bold text-blackberry hover:brightness-110 md:w-[300px]"
                >
                  {loading ? (
                    <div className="flex flex-row items-center justify-center gap-4">
                      Sending...
                      <HashLoader
                        loading={true}
                        size={20}
                        color="#252131"
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        speedMultiplier={1}
                        className="text-blackberry"
                      />
                    </div>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex h-[2px] w-full bg-gray/10  md:hidden" />

        <div className="flex flex-row items-center justify-center gap-[30px] md:flex-col md:items-end md:justify-end md:gap-[60px]">
          <ul className="order-2 flex w-fit flex-row justify-between gap-[15px] md:order-1 md:w-full md:gap-2 lg:flex">
            {SocialLinksData.map(({ id, icon, ariaLabel, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                aria-label={ariaLabel}
                className="flex h-[28px] w-[28px] items-center justify-center text-gray md:h-[48px] md:w-[48px]"
              >
                {icon}
              </a>
            ))}
          </ul>
          <p className="order-1 flex w-fit flex-row gap-[6px] text-center text-[13px] text-gray md:order-2 md:text-[20px]">
            © 2023{" "}
            <span className="flex h-fit w-fit font-bold"> Andrei Sager</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
