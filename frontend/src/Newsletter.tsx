import React, { useState } from "react";
import "./Newsletter.css";

interface NewsletterModalProps {
    onClose: () => void;
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setStatus("Please enter a valid email.");
            return;
        }
        setStatus("Thanks for signing up!");
        setEmail("");
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
            {/* Modal box */}
            <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-800"
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold text-burgundy mb-2">
                    Join Our Newsletter
                </h2>
                <p className="text-gray-700 mb-4">
                    Get notified when we're launching!
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 rounded px-3 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-darkorange"
                    />
                    <button
                        type="submit"
                        className="bg-burgundy text-white px-4 py-2 rounded w-full hover:bg-darkorange transition"
                    >
                        Subscribe
                    </button>
                </form>

                {status && <p className="mt-3 text-burgundy">{status}</p>}
            </div>
        </div>
    );
}
