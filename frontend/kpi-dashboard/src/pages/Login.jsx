import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost/api/login", { email, password });
            localStorage.setItem("loggedIn", "true");
            navigate("/");
        } catch {
            setError("Credenciais inválidas");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 space-y-6">
                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
                        alt="Logo"
                        className="h-12 w-auto"
                    />
                </div>
                <h2 className="text-center text-2xl font-extrabold text-gray-800">
                    Faça seu login
                </h2>
                {/* Erro */}
                {error && (
                    <p className="text-center text-red-500 text-sm">{error}</p>
                )}
                {/* Formulário */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <div className="relative">
                            <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* Senha */}
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Senha
                        </label>
                        <div className="relative">
                            <LockClosedIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
                            <input
                                id="password"
                                type="password"
                                placeholder="Senha"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* Botão */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
