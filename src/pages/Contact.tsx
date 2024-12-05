const Contact = () => {
    return (
        <div className="bg-zinc-900 p-4 rounded-md shadow-md w-500px">
            <h1 className="text-zinc-100 text-2xl font-bold">Contact Me</h1>
            <form className="flex flex-col gap-3 mt-4">
                <label className="text-zinc-100">
                    <p>Nama</p>
                    <input className="p-2 rounded-md w-full bg-zinc-800 text-zinc-100" type="text" name="name" />
                </label>
                <label className="text-zinc-100">
                    <p>Email</p>
                    <input className="p-2 rounded-md w-full bg-zinc-800 text-zinc-100" type="email" name="email" />
                </label>
                <label className="text-zinc-100">
                    <p>Pesan</p>
                    <textarea className="p-2 rounded-md w-full bg-zinc-800 text-zinc-100" name="message" rows={5}></textarea>
                </label>
                <button className="bg-accent p-2 rounded-md font-bold w-full" type="submit">Kirim</button>
            </form>
        </div>
    )
}

export default Contact