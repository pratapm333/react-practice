const Contact = () => {
    return (
        <div>
            <h1 className="font-bold p-4 m-4 text-3xl">Contact page</h1>
            <form>
            <input type="text" placeholder="Name" className="border border-black m-4 p-4"></input>
            <input type="text" placeholder="Message" className="border border-black m-4 p-4"></input>

             <button className="bg-black text-white m-4 p-4" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;