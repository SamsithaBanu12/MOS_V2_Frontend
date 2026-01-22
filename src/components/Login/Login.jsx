import { useLocation, useNavigate } from "react-router";
import galaxeye from "../../assets/galaxeye-white.png";
import "./Login.css";
import { useEffect, useState } from "react";
import { loginUser } from "../../utils/api";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeDot, setActiveDot] = useState('login');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (location?.pathname === "/signup") {
            setActiveDot('signup')
        } else {
            setActiveDot('login')
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            try {
                const response = await loginUser(formData);
                console.log('Login Successful', response);

                // Store token and user data
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify({
                    username: response.username,
                    email: response.email,
                    role: response.role,
                    permissions: response.permissions
                }));

                toast.success(`Welcome back, ${response.username}!`);
                navigate('/');
            } catch (error) {
                console.error('Login Error', error);
                toast.error(error.message || "Login failed. Please check your credentials.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="login-wrapper">
            <div className="lg-left-wrapper">
                <div className="lg-dots">
                    <div className={`lg-dot1 ${activeDot === 'login' ? 'active' : ''}`} onClick={() => navigate('/login')}></div>
                    <div className={`lg-dot2 ${activeDot === 'signup' ? 'active' : ''}`} onClick={() => navigate('/signup')}></div>
                </div>
                <div className="lg-header">
                    Sign in
                </div>
                <div className="lg-form">
                    <form onSubmit={handleSubmit}>
                        <div className="lg-form-group">
                            <label htmlFor="email">Your email</label>
                            <input
                                className={`lg-input ${errors.email ? 'invalid' : ''}`}
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Charles@comet.co"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="lg-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                className={`lg-input ${errors.password ? 'invalid' : ''}`}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        <div className="lg-form-group">
                            <button className="lg-button" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Signing in..." : "Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="lg-footer">
                    <div className="lg-footer-text">
                        Don't have an account?
                    </div>
                    <div className="lg-footer-link" onClick={() => navigate('/signup')}>
                        Sign up
                    </div>
                </div>
            </div>
            <div className="lg-right-wrapper">
                <img className="lg-satelite-img" src="https://i.pinimg.com/736x/53/f6/a8/53f6a8e8f2902a540c2fe4312605ab76.jpg" alt="" />
                <img className="lg-logo" src={galaxeye} alt="galaxeye-logo" />
            </div>
        </div>
    )
};
export default Login;