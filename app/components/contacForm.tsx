export default function ContactForm() {
    return (
        <form className="bg-white p-8 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Take the First Step</h3>

            <input type="text" placeholder="Your Name*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />

            <input type="email" placeholder="Your Best Email*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />

            <input type="text" placeholder="Best Contact Number*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />

            <textarea placeholder="How Can We Help You?*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" rows={5} required />

            <button type="submit" className="cursor-pointer px-8 py-3 bg-[var(--primary-color)] text-white border-2 border-[var(--primary-color)] rounded-lg font-semibold hover:bg-transparent hover:text-[var(--primary-color)] transition">
                Submit
            </button>
        </form>
    )
}