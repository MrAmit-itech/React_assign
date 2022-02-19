const Login=()=>{
    return<>
        <form action="">
            <fieldset>
                <legend>This is login form</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="email" placeholder="email" name="email" id="" />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="password" placeholder="password" name="password" id="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" /> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </form>
    </>
}
export default Login