import FORM_IMG from "../images/Contact-Us.13c5d28a.png";

const Contact = () => {
  return (
    <div className="flex flex-col justify-around mb-4 md:flex-row">
      <img className="w-96" src={FORM_IMG}></img>
      <div className="flex flex-col gap-5">
        <h1 className="mx-0 my-auto mt-5 text-5xl">Contact Us</h1>
        <form className="flex flex-col mt-5 gap-5">
          <input
            className="p-2.5 rounded border border-solid border-black"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-2.5 rounded border border-solid border-black"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="p-2.5 rounded border border-solid border-black"
            rows="2"
            cols="40"
            placeholder="Type your Message here.."
          ></textarea>
          <button className="w-16 bg-blue-500 m-auto decoration-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
