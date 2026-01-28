import { useLocation, useNavigate } from "react-router";
import galaxeye from "../../assets/galaxeye-white.png";
import "./Signup.css";
import { timelineSelectStyles } from "../../customStyles/customStyle";
import { RoleTypes } from "../../data";
import { use, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { emailRegex, nameRegex, passwordRegex } from "../../constants/contants";
import { registerUser } from "../../utils/api";
import toast from "react-hot-toast";

const Signup = () => {
    const navigate = useNavigate();
    const [roleType, setRoleType] = useState('ADMIN');
    const [activeDot, setActiveDot] = useState('signup');
    const location = useLocation();

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [role, setRole] = useState(RoleTypes[0]);

    console.log('role', role)
    const roleTypeOption = useMemo(() => {
        return RoleTypes.find((opt) => opt?.label === roleType) || null;
    }, [roleType]);

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
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.username) {
            newErrors.username = 'Username is required';
        } else if (!nameRegex.test(formData.username)) {
            newErrors.username = 'Only alphabets are allowed';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Must contain uppercase, lowercase, number, and special character';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            try {
                const userData = {
                    email: formData.email,
                    username: formData.username,
                    password: formData.password,
                    role: role.label,
                };
                console.log('userdata', userData);
                const response = await registerUser(userData);
                console.log('Registration Successful', response);
                toast.success("Successfully registered!");
                navigate('/login');
            } catch (error) {
                console.error('Registration Error', error);
                toast.error(error.message || "Registration failed. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-left-wrapper">
                <div className="signup-dots">
                    <div className={`signup-dot1 ${activeDot === 'login' ? 'active' : ''}`} onClick={() => navigate('/login')}></div>
                    <div className={`signup-dot2 ${activeDot === 'signup' ? 'active' : ''}`} onClick={() => navigate('/signup')}></div>
                </div>
                <div className="signup-header">
                    Sign up
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="signup-form-group">
                            <label htmlFor="email">Your email</label>
                            <input
                                className={`signup-input ${errors.email ? 'invalid' : ''}`}
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Charles@comet.co"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="signup-form-group">
                            <label htmlFor="username">Your username</label>
                            <input
                                className={`signup-input ${errors.username ? 'invalid' : ''}`}
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Charles"
                            />
                            {errors.username && <span className="error-message">{errors.username}</span>}
                        </div>
                        <div className="signup-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                className={`signup-input ${errors.password ? 'invalid' : ''}`}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        <div className="signup-form-group">
                            <label htmlFor="Role">Role</label>
                            <Select
                                options={RoleTypes}
                                value={roleTypeOption}
                                onChange={(option) => {
                                    setRoleType(option?.label ?? "Admin");
                                    setRole(option);
                                }}
                                isSearchable
                                styles={timelineSelectStyles}
                            />
                        </div>
                        <div className="signup-form-group">
                            <button className="signup-button" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Creating account..." : "Sign up"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="signup-footer">
                    <div className="signup-footer-text">
                        Do You already have an account?
                    </div>
                    <div className="signup-footer-link" onClick={() => navigate('/login')}>
                        Sign in
                    </div>
                </div>
            </div>
            <div className="signup-right-wrapper">
                <img className="signup-satelite-img" src="https://i.pinimg.com/736x/53/f6/a8/53f6a8e8f2902a540c2fe4312605ab76.jpg" alt="" />
                <img className="signup-logo" src={galaxeye} alt="galaxeye-logo" />
            </div>
        </div>
    )
};
export default Signup;