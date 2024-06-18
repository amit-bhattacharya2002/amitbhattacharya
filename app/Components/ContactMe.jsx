
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

export default function Contact() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const count = 0;
        formData.append("access_key", "7dc83694-8143-465a-85cc-65a4b7decc9f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            alert("Message sent successfully!");
            document.getElementById('contactFrom').reset();
        }
    }

  return (
    <> 
      <form id='contactFrom' className="h-full w-[80%] flex flex-col gap-5 m-auto mt-5 sm:mt-[10rem] scroll-m-[10rem] text-purple-500 p-4 " onSubmit={handleSubmit}>
        <h1 className={`${lexendDeca.className} text-3xl border-b-2 pb-4 border-b-purple-500`}>GET IN TOUCH</h1>
        <input type="text" className="p-4 bg-black border border-purple-500" name="name" placeholder="Enter your name"/>
        <input type="email"  className="p-4 bg-black border border-purple-500" name="email" placeholder="Enter your email"/>
        <textarea name="message"  className="p-4 bg-black border border-purple-500" placeholder="Enter your message"></textarea>
        <button type="submit" className="border self-end w-fit p-4 border-purple-500 hover:bg-purple-500 hover:text-black transition-all">Submit Form</button>
      </form>
    </>
  );
}