import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    family: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: '',
      family: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    if (name.length < 3) {
      newErrors.name = 'name must be at least 3 characters';
    }
    if (family.length < 3) {
      newErrors.family = 'family must be at least 3 characters';
    }
    if (!email.includes('@')) {
      newErrors.email = 'email must be valid';
    }
    if (password.length < 6) {
      newErrors.password = 'password must be at least 6 characters';
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'confirm password must be equal to password';
    }
    setErrors(newErrors);
    if (
      !newErrors.name &&
      !newErrors.family &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      navigate('/auth');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      {errors.name && <p>{errors.name}</p>}
      <input
        type="text"
        value={family}
        onChange={(e) => setFamily(e.target.value)}
        placeholder="family"
      />
      {errors.family && <p>{errors.family}</p>}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      {errors.password && <p>{errors.password}</p>}
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="confirm password"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      <button type="submit">Register</button>
    </form>
  );
};