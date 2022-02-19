

function Register() {
  const handledata=(e)=>{
    e.preventDefault()

  }

  return (
    <div id='reg_cont'>
        <form onSubmit={handledata}>
          <fieldset>
            <legend>Admin Regsitration form</legend>
            <table>
              <tbody>
                <tr>
                  <td>name</td>
                  <td><input placeholder='fullname' autoComplete='off' type="text" name='firstname' /></td>
                </tr>
                <tr>
                  <td>email</td>
                  <td><input placeholder='email' autoComplete='off' name="email" type="text" /></td>
                </tr>
                <tr>
                  <td>password</td>
                  <td><input placeholder='password' autoComplete='off' type="password" name="password" /></td>
                </tr>
                <tr>
                  <td><input type="submit" /></td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
    </div>
  );
}

export default Register;
