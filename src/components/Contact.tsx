import { Send } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="text-center w-full">
      <h3 className="text-3xl block w-full text-center pb-10 pt-6">
        Contact Me
      </h3>
      <h4 className="text-sm p-4">
        Feel free to contact me directly through this form
      </h4>
      <div className="w-full flex justify-center">
        <form
          action=""
          method="POST"
          className="flex flex-col items-center text-sm w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-transparents"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="my-4 w-full rounded-md p-2 focus:outline-none bg-transparent shadow-sm border border-black/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="my-4 w-full rounded-md p-2 focus:outline-none bg-transparent shadow-sm border border-black/30"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="my-4 w-full min-h-32 rounded-md p-2 focus:outline-none bg-transparent shadow-sm border border-black/30"
          />
          <button
            type="submit"
            className="flex py-2 px-4 m-2 text-black/60 rounded-full text-black hover:scale-110 origin-center transition-all shadow-sm border border-black/30"
          >
            Send
            <Send size={20} className="px-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
