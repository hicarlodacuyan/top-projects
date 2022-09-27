import { MdForum, MdContactSupport, MdPeople } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full px-4 py-12 flex flex-col justify-center items-center gap-4 text-slate-700">
        <h1 className="md:text-4xl text-2xl font-black">Get in touch</h1>
        <p className="">
          Want to find out how Shopping Cart can solve problems specific to your
          product? Let's talk.
        </p>
        <div className="flex md:flex-row flex-col w-full gap-4">
          <div className="flex-1 p-4 bg-slate-200 drop-shadow-md rounded-md">
            <h2 className="text-4xl font-bold">Contact Sales</h2>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <p className="text-xs font-bold">First Name</p>
                <input
                  className="border border-slate-300 w-full"
                  type="text"
                ></input>
              </div>
              <div>
                <p className="text-xs font-bold">Last Name</p>
                <input
                  className="border border-slate-300 w-full"
                  type="text"
                ></input>
              </div>
              <div>
                <p className="text-xs font-bold">Email Address</p>
                <input
                  className="border border-slate-300 w-full"
                  type="email"
                ></input>
              </div>
              <div>
                <p className="text-xs font-bold">Company</p>
                <input
                  className="border border-slate-300 w-full"
                  type="text"
                ></input>
              </div>
              <div>
                <p className="text-xs font-bold">Phone Number</p>
                <input
                  className="border border-slate-300 w-full"
                  type="number"
                ></input>
              </div>
              <div>
                <p className="text-xs font-bold">Address</p>
                <input
                  className="border border-slate-300 w-full"
                  type="text"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-2xl font-bold">Other ways to connect</h3>
            <p className="text-sm mb-4">
              Call, email, send us a postcard - whatever workds for you. We'll
              be here.
            </p>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2 cursor-pointer">
                <span>
                  <MdForum size={32} />
                </span>
                Help Center
              </p>
              <p className="flex items-center gap-2 cursor-pointer">
                <span>
                  <MdContactSupport size={32} />
                </span>
                Get Support Now
              </p>
              <p className="flex items-center gap-2 cursor-pointer">
                <span>
                  <MdPeople size={32} />
                </span>
                Careers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
