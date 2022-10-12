export const LoginForm = () => {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <div className="form-group_wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group_wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};